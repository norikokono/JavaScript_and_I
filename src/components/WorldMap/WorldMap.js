// https://www.react-simple-maps.io/examples/basic-world-map/

import React from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

import MapChart from "./MapChart";
import "./WorldMap.css";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const WorldMap = () => (
  <div>
      <div>
        <h2 style={{marginTop: 30}}>World Map</h2>
      </div>
        <ComposableMap>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map(geo => <Geography key={geo.rsmKey} geography={geo} />)
            }
          </Geographies>
        </ComposableMap>
      <div>
        <h2>Choropleth Map Chart</h2>
      </div>
    <div >
      <MapChart />
    </div>
  </div>
);

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);

export default WorldMap;