import React, { useState } from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import { GoogleMap, LoadScriptNext, Marker } from "@react-google-maps/api";
import "../../assets/scss/_orders.scss";

const MapPayment = ({ onClickMapsValue, onClickCoordinateValue }) => {
  const [address, setAddress] = useState("");
  const [coordinates, setCoordinates] = useState({ lat: 39.627, lng: 66.975 });

  const handleSelect = async (value) => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    onClickMapsValue(value);
    onClickCoordinateValue(latLng);
    setAddress(value);
    setCoordinates(latLng);
  };
  const [map, setMap] = React.useState(null);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  const containerStyle = {
    width: "800px",
    height: "350px",
  };
  const apikey = "AIzaSyAoud-_7sLGaEDVV5s8QvtTeGzI9dunLqU";
  return (
    <div>
      <PlacesAutocomplete
        bounds={coordinates}
        value={address}
        onChange={setAddress}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <div className="input-autocomplete">
              <input
                className="inputProps"
                {...getInputProps({ placeholder: "Ведите адрес клиента" })}
              />
            </div>
            <div>
              {loading ? <div>...loading</div> : null}

              {suggestions.map((suggestion) => {
                const style = {
                  backgroundColor: suggestion.active ? "#41b6e6" : "#fff",
                };

                return (
                  <div {...getSuggestionItemProps(suggestion, { style })}>
                    {suggestion.description}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
      <LoadScriptNext googleMapsApiKey={apikey}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          zoom={13}
          center={coordinates}
          onUnmount={onUnmount}
          ref={setMap}
        >
          {coordinates && (
            <Marker position={{ lat: coordinates.lat, lng: coordinates.lng }} />
          )}
        </GoogleMap>
      </LoadScriptNext>
    </div>
  );
};

export default MapPayment;
