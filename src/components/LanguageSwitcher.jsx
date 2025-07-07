import Button from "./Button";
import LanguageOptionSelect from "./LanguageOptionSelect";

export default function LanguageSwitcher({
  languages,
  sourceLang,
  setSourceLang,
  targetLang,
  setTargetLang,
  onSwap,
}) {
  return (
    <div className="flex items-center justify-between w-full">
      <LanguageOptionSelect
        value={sourceLang}
        onChange={setSourceLang}
        options={languages}
      />
      <Button swapTranslate={onSwap} />

      <LanguageOptionSelect
        value={targetLang}
        onChange={setTargetLang}
        options={languages}
      />
    </div>
  );
}
