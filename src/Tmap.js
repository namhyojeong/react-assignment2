import { useState, useEffect } from "react";

function Tmap() {
  const [showMap, setShowMap] = useState(false);

  useEffect(() => {
    const initTmap = () => {
      const map = new window.Tmapv2.Map("map_div", {
        center: new window.Tmapv2.LatLng(
          37.566481622437934,
          126.98502302169841
        ),
        width: "890px",
        height: "400px",
        zoom: 15,
      });
    };

    if (showMap) {
      initTmap();
    }
  }, [showMap]);

  const handleClick = () => {
    setShowMap(true);
  };

  return (
    <div className="App">
      <button onClick={handleClick}>Show Map</button>
      {showMap && <div id="map_div"></div>}
    </div>
  );
}
export default Tmap;
