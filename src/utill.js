import React from "react";
import numeral from "numeral";
import { Circle, Popup } from "react-leaflet";

export const sortData = (data) => {
  const sortedData = [...data];
  return sortedData.sort((a, b) => (a.cases > b.cases ? -1 : 1));
  /* if (a.cases > b.cases) {
      return -1; //false
    } else {
      return 1; //true
    }
  });
return sortedData;*/
};

//draw Circle color
const casesTypeColors = {
  cases: {
    hex: "#CC1034",
    multiplier: 800,
  },
  recovered: {
    hex: "#7dd71d",
    multiplier: 1200,
  },
  deaths: {
    hex: "#fb4443",
    multiplier: 2000,
  },
};

export const prettyPrintStat = (stat) =>
  stat ? `+${numeral(stat).format("0.0a")}` : "0";

// draw circle on the map with interactive tooltop
export const showDataOnMap = (data, casesType = "cases") =>
  data.map((country) => (
    <Circle
      center={[country.countryInfo.lat, country.countryInfo.long]}
      fillOpacity={0.4}
      color={casesTypeColors[casesType].hex}
      fillColor={casesTypeColors[casesType].hex}
      radius={
        Math.sqrt(country[casesType]) * casesTypeColors[casesType].multiplier
      }
    >
      <Popup>
        <div className="info_container">
          <div
            className="info_flag"
            style={{ backgroundImage: `url(${country.countryInfo.flag})` }}
          />
          <div className="info_name">{country.country}</div>
          <div className="info_confirmed">
            Cases:{numeral(country.cases).format("0,0")}
          </div>
          <div className="info_recovered">
            Recovered:{numeral(country.recovered).format("0,0")}
          </div>
          <div className="info_deaths">
            Deaths:{numeral(country.deaths).format("0,0")}
          </div>
        </div>
      </Popup>
    </Circle>
  ));
