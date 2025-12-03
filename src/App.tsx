import { useState } from 'react';
import { LanguageSelector } from './components/LanguageSelector.jsx';
import { ShopStatus } from './components/ShopStatus.jsx';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { Phone, Clock, MapPin, CreditCard, Banknote, Bitcoin } from 'lucide-react';

const content = {
  fr: {
    title: "Barbier Willy",
    welcome: "Bienvenue chez Barbier Willy",
    description: "Établi en 1959, nous sommes un barbershop de quartier fondé sur la tradition, la bonne conversation et des coupes qui ne se démodent jamais. Sans réservation ",
    hours: "Heures d'Ouverture",
    schedule: {
      monToWed: "Lundi - Mercredi",
      monToWedTime: "9h00 - 18h00",
      thuFri: "Jeudi - Vendredi",
      thuFriTime: "9h00 - 19h00",
      saturday: "Samedi",
      saturdayTime: "9h00 - 17h00",
      sunday: "Dimanche",
      sundayTime: "Fermé"
    },
    phone: "Téléphone",
    location: "Notre Emplacement",
    gallery: "Galerie",
    weAccept: "Nous acceptons"
  },
  en: {
    title: "Barbier Willy",
    welcome: "Welcome to Barbier Willy",
    description: "Established in 1959, we’re a neighbourhood barbershop built on tradition, good conversation, and cuts that never go out of style. Walk-in only",
    hours: "Business Hours",
    schedule: {
      monToWed: "Monday - Wednesday",
      monToWedTime: "9:00 AM - 6:00 PM",
      thuFri: "Thursday - Friday",
      thuFriTime: "9:00 AM - 7:00 PM",
      saturday: "Saturday",
      saturdayTime: "9:00 AM - 5:00 PM",
      sunday: "Sunday",
      sundayTime: "Closed"
    },
    phone: "Phone",
    location: "Our Location",
    gallery: "Gallery",
    weAccept: "We accept"
  }
};

export default function App() {
  const [language, setLanguage] = useState('fr'); // For French default
  // Set to true if you want to show holiday status
  const isHoliday = false;

  const t = content[language];
  const phoneNumber = "(819) 685-2025";

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-black text-white py-4 px-4 sticky top-0 z-40 shadow-lg">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h1 className="text-white" style={{ fontFamily: "'Playfair Display', serif" }}>{t.title}</h1>
          </div>
          <div className="flex items-center gap-4">
            <ShopStatus language={language} isHoliday={isHoliday} />
            <button
              onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
              className="text-sm px-4 py-2 bg-white/10 hover:bg-white/20 rounded transition-colors"
            >
              {language === 'fr' ? 'EN' : 'FR'}
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative">
        <div className="w-full h-[400px] md:h-[500px] overflow-hidden">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1610475680335-dafab5475150?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJiZXJzaG9wJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY0MzQzMjE0fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Barbershop Interior"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h2 className="text-white mb-4">{t.welcome}</h2>
            <p className="max-w-2xl mx-auto">{t.description}</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Business Info Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Hours Card */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center gap-3 mb-4">
              <Clock className="text-red-600" size={32} />
              <h3 className="text-gray-800">{t.hours}</h3>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-700">{t.schedule.monToWed}</span>
                <span className="text-gray-900">{t.schedule.monToWedTime}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">{t.schedule.thuFri}</span>
                <span className="text-gray-900">{t.schedule.thuFriTime}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">{t.schedule.saturday}</span>
                <span className="text-gray-900">{t.schedule.saturdayTime}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">{t.schedule.sunday}</span>
                <span className="text-gray-900">{t.schedule.sundayTime}</span>
              </div>
            </div>
          </div>

          {/* Contact Card */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center gap-3 mb-4">
              <Phone className="text-blue-600" size={32} />
              <h3 className="text-gray-800">{t.phone}</h3>
            </div>
            <a
              href={`tel:${phoneNumber.replace(/\D/g, '')}`}
              className="text-blue-600 hover:text-blue-700 transition-colors inline-block"
            >
              {phoneNumber}
            </a>
            <div className="mt-6">
              <div className="flex items-center gap-3 mb-2">
                <MapPin className="text-green-600" size={24} />
                <span className="text-gray-700">130 Rue Principale, Gatineau, Quebec J9H 3M4</span>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery Section */}
        <section className="mb-12">
          <h2 className="text-gray-800 mb-6 text-center">{t.gallery}</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="rounded-lg overflow-hidden shadow-md h-64">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1701885183616-cf00e2db1a3b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Barber at work"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md h-64">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1599011176306-4a96f1516d4d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Barber chair"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md h-64">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1675599193741-e6f078a65fbd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJiZXJzaG9wJTIwdG9vbHN8ZW58MXx8fHwxNzY0Mzg5MzUwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Barber tools"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section>
          <h2 className="text-gray-800 mb-6 text-center">{t.location}</h2>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps?q=130+Rue+Principale,+Gatineau,+Quebec+J9H+3M4&output=embed"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Barbier Willy Location"
            ></iframe>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-8 mt-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-300 mb-4">{t.weAccept}</p>
          <div className="flex items-center justify-center gap-6 mb-6 flex-wrap">
            <div className="flex flex-col items-center gap-1">
              <CreditCard size={32} className="text-blue-400" />
              <span className="text-xs text-gray-400">Visa</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <CreditCard size={32} className="text-orange-400" />
              <span className="text-xs text-gray-400">Mastercard</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <CreditCard size={32} className="text-green-400" />
              <span className="text-xs text-gray-400">Amex</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Bitcoin size={32} className="text-yellow-400" />
              <span className="text-xs text-gray-400">Bitcoin</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Banknote size={32} className="text-green-300" />
              <span className="text-xs text-gray-400">Cash</span>
            </div>
          </div>
          <p className="text-gray-400">© 2025 {t.title}. {language === 'fr' ? 'Tous droits réservés.' : 'All rights reserved.'}</p>
        </div>
      </footer>
    </div>
  );
}
