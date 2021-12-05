import GoogleMapReact from "google-map-react";
// import { LocationPin } from "./LocationPin";

export const Map = ({ zoomLevel }) => {
  const location = {
    address: "Vestre veien 132, 1680 Skjærhalden",
    lat: 59.048058232920866,
    lng: 11.001828811965463,
  };

  const LocationPin = ({ text }) => <div>{pin}</div>;

  return (
    <div className="">
      <h2>Come visist us at our campus</h2>
      <div className="w-100 h-400 my-24">
        <GoogleMapReact
          defaultCenter={location}
          defaultZoom={zoomLevel}
          bootstrapURLKeys={{ key: "AIzaSyCQUej5CVD-LXWkx745S3-C-7Ji3-D9H_g" }}
        >
          <LocationPin text="Hvaler Gjestgiveri" lat={location.lat} lng={location.lng} />
        </GoogleMapReact>
      </div>
    </div>
  );
};

const pin = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="#B84825"
    stroke="white"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-map-pin"
  >
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);
