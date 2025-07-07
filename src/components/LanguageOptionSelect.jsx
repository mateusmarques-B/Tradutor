export default function LanguageOptionSelect({
  label,
  value,
  onChange,
  options,
}) {
  return (
    <label className="flex items-center justify-between text-sm text-[#3c4043]">
      {label && <span>{label}</span>}
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className=" bg-transparent border-none focus:outline-none cursor-pointer"
      >
        {options.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.name}
          </option>
        ))}
      </select>
    </label>
  );
}
