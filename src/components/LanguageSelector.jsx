export function LanguageSelector({ onSelectLanguage }) {
  return (
    <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-2xl p-8 max-w-md w-full text-center">
        <h1 className="mb-8 text-gray-800">Choose Your Language / Choisissez Votre Langue</h1>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => onSelectLanguage('fr')}
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg transition-colors"
          >
            Français
          </button>
          <button
            onClick={() => onSelectLanguage('en')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg transition-colors"
          >
            English
          </button>
        </div>
      </div>
    </div>
  );
}
