import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import { useRef, useState, useEffect } from "react";
mapboxgl.accessToken =
  "pk.eyJ1IjoiamFuY2FybG9mb250eXMiLCJhIjoiY2xjdXIxajIzMGJvaDN3bnZ0cm9jZGN3ZSJ9.8D1ndV2TSfbWyNfHfZEq9Q";

const LNG = -70.9;
const LAT = 42.35;
const ZOOM = 9;

const MapBox = ({ lng = LNG, lat = LAT, zoom = ZOOM }) => {
  const mapContainer = useRef(null);
  const map = useRef(null);

  const test = () => console.log("first");

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [lng, lat],
      zoom: zoom,
    });
  });

  return (
    <div>
      <div ref={mapContainer} className="map-container" />
    </div>
  );
};

export default MapBox;
