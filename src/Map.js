import  {React, Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
function Map(props) {
    console.log(props)
  var mappara = {
    center: {
      lat: props.lat,
      lng: props.lng
    },
    zoom: 11
  };
 
 
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '50vh', width: '100vh' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCn2eIPKoLJQfu3ZVfx-e_r1lrWehO6JPQ"}}
          defaultCenter={mappara.center}
          defaultZoom={mappara.zoom}
        >
          <AnyReactComponent
            lat={props.lat}
            lng={props.lng}
            text="🔥"
          />
        </GoogleMapReact>
      </div>
    );
  
}
 
export default Map;