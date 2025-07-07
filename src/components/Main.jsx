import TextArea from "./TextArea";
import LanguageSwitcher from "./LanguageSwitcher";
import { useState, useEffect } from "react";

export default function Main() {
  const languages = [
    { code: "en", name: "Inglês" },
    { code: "es", name: "Espanhol" },
    { code: "fr", name: "Francês" },
    { code: "de", name: "Alemão" },
    { code: "it", name: "Italiano" },
    { code: "pt", name: "Português" },
  ];

  const [sourceLang, setSourceLang] = useState("pt");
  const [targetLang, setTargetLang] = useState("en");
  const [sourceText, setSourceText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [translatedText, setTranslatedText] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (sourceText) {
      const delay = setTimeout(() => {
        handleTranslate();
      }, 600);

      return () => clearTimeout(delay);
    }
  }, [sourceText]);

  const handleTranslate = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(
        `https://api.mymemory.translated.net/get?q=${sourceText}&langpair=${sourceLang}|${targetLang}`
      );

      if (!response.ok) {
        throw new Error(`HTTP ERROR: ${response.status}`);
      }

      const data = await response.json();

      setTranslatedText(data.responseData.translatedText);
    } catch (err) {
      setError(`Erro ao traduzir: ${err.message}. Tente novamente`);
    } finally {
      setIsLoading(false);
    }
  };

  const swapTranslate = () => {
    setSourceLang(targetLang);
    setTargetLang(sourceLang);
    setSourceText(translatedText);
    setTranslatedText(sourceText);
  };

  return (
    <main className="flex-grow flex items-start justify-center px-4 py-8">
      <div className="w-full max-w-5xl bg-white rounded-lg shadow-md overflow-hidden">
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <LanguageSwitcher
            sourceLang={sourceLang}
            setSourceLang={setSourceLang}
            targetLang={targetLang}
            setTargetLang={setTargetLang}
            languages={languages}
            onSwap={swapTranslate}
          />
        </div>
        <TextArea
          sourceText={sourceText}
          setSourceText={setSourceText}
          isLoading={isLoading}
          translatedText={translatedText}
          error={error}
        />
      </div>
    </main>
  );
}
