export default function TextArea({
  sourceText,
  setSourceText,
  isLoading,
  translatedText,
  error,
}) {
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-2">
        <div className="p-4">
          <textarea
            value={sourceText}
            onChange={(event) => setSourceText(event.target.value)}
            className="w-full h-40 text-lg text-[#3c4043] bg-transparent outline-none border-none resize-none"
            placeholder="Digite seu texto..."
          ></textarea>
        </div>

        <div className="p-4 relative bg-[#f5f5f5] border-l border-gray-200">
          {isLoading ? (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-blue-500"></div>
            </div>
          ) : (
            <p className="text-lg text-[#3c4043]">{translatedText} </p>
          )}
        </div>
      </div>

      {error && (
        <div className="p-4 bg-red-100 border-t border-red-400 text-red-700">
          {error}
        </div>
      )}
    </>
  );
}
