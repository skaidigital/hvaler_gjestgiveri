export const MobileNavButton = ({ onClick, children }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="text-h1 font-semibold text-dark mt-32 underline flex justify-start text-neutral_700"
    >
      {children}
    </button>
  );
};
