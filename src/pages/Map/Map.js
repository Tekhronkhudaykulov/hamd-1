import React, { useState } from "react";
import "../../assets/scss/_map.scss";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { useSelector } from "react-redux";
const containerStyle = {
  width: "100%",
  height: "300px",
};

const center = {
  lat: 39.627,
  lng: 66.975,
};

const Map = () => {
  const [infoVisible, setInfoVisible] = useState(false);
  const curier = useSelector((state) => state.couriers.courier);
  const [map, setMap] = React.useState(null);
  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  let lat, lng;

  if (curier) {
    let loc = curier.map_location.split(",");
    lat = +loc[0];
    lng = +loc[1];
  }
  const apiKey = "AIzaSyAoud-_7sLGaEDVV5s8QvtTeGzI9dunLqU";

  return (
    <div className="map">
      <GoogleMap
        mapContainerStyle={containerStyle}
        zoom={11}
        center={center}
        onUnmount={onUnmount}
        ref={setMap}
      >
        {curier && (
          <>
            <Marker
              onClick={() => setInfoVisible(true)}
              position={{ lat, lng }}
            />
            {infoVisible && (
              <InfoWindow
                onCloseClick={() => setInfoVisible(false)}
                position={{ lat, lng }}
              >
                <div className="map-p">
                  <p>
                    Курьер: <span>{curier.name}</span>
                  </p>
                  <p>
                    ID заказа: <span>#{curier.id}</span>
                  </p>
                  <p>
                    Маршрут: <span>{curier.address}</span>
                  </p>
                  <p>
                    Тел: <span>{curier.phone}</span>
                  </p>
                </div>
              </InfoWindow>
            )}
          </>
        )}
      </GoogleMap>
    </div>
  );
};

export default React.memo(Map);
