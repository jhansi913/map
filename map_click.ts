import { declareJsxWidget } from "streamlit-custom-components";

const Component = declareJsxWidget<{
  latitude: number;
  longitude: number;
}>(({ args }) => {
  const { Streamlit, useState, useEffect } = window.stcImports;

  // State variables to store latitude and longitude
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  useEffect(() => {
    const handleMapClick = (event: any) => {
      const lat = event.latlng.lat;
      const lon = event.latlng.lng;
      setLatitude(lat);
      setLongitude(lon);
      // Send latitude and longitude back to Streamlit
      Streamlit.setComponentValue({ latitude: lat, longitude: lon });
    };

    const map = document.querySelector(".leaflet-container");
    map.addEventListener("click", handleMapClick);

    return () => {
      map.removeEventListener("click", handleMapClick);
    };
  }, []);

  return null;
});

export default Component;
