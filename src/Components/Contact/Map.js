import React from "react";
import MapCss from "./Map.module.css";

function Map() {
  return (
    <div className={MapCss.mapContainer}>
      <iframe
        className={MapCss.map}
        id="gmap_canvas"
        src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=%20%CE%9B%CE%B1%CF%81%CE%B9%CF%83%CE%B1+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      ></iframe>
    </div>
  );
}

export default Map;
