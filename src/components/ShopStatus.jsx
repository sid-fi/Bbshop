import { useState, useEffect } from 'react';

export function ShopStatus({ language, isHoliday = false }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const checkIfOpen = () => {
      if (isHoliday) {
        setIsOpen(false);
        return;
      }

      const now = new Date();
      const day = now.getDay();
      const hour = now.getHours();
      const minutes = now.getMinutes();
      const currentTime = hour + minutes / 60;

      if (day === 0) {
        setIsOpen(false);
        return;
      }

      if (day >= 1 && day <= 3) {
        setIsOpen(currentTime >= 9.0 && currentTime < 18.0);
        return;
      }

      if (day >= 4 && day <= 5) {
        setIsOpen(currentTime >= 9.0 && currentTime < 19.0);
        return;
      }

      if (day === 6) {
        setIsOpen(currentTime >= 9.0 && currentTime < 17.0);
        return;
      }

      setIsOpen(false);
    };

    checkIfOpen();
    const interval = setInterval(checkIfOpen, 60000);
    return () => clearInterval(interval);
  }, [isHoliday]);

  const getStatusText = () => {
    if (isHoliday) {
      return language === 'fr' ? 'Fermé (Jour Férié)' : 'Closed (Holiday)';
    }
    return isOpen 
      ? (language === 'fr' ? 'Ouvert' : 'Open')
      : (language === 'fr' ? 'Fermé' : 'Closed');
  };

  const getStatusColor = () => {
    if (isHoliday) {
      return 'bg-gray-500';
    }
    return isOpen ? 'bg-green-500' : 'bg-red-500';
  };

  const statusClasses = "w-3 h-3 rounded-full " + getStatusColor() + " animate-pulse";

  return (
    <div className="flex items-center gap-2">
      <div className={statusClasses}></div>
      <span className="text-sm text-white">{getStatusText()}</span>
    </div>
  );
}
