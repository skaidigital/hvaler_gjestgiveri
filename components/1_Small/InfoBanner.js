export const InfoBanner = ({ banner_message }) => {
  return (
    banner_message && (
      <header id="info-banner" className="py-4 bg-secondary_700 text-center">
        <span className=" font-semibold text-white">{banner_message}</span>
      </header>
    )
  );
};
