// import Link from 'next/link';
"use client";
import "mapbox-gl/dist/mapbox-gl.css";
import Map from "react-map-gl";
import { useTheme } from "next-themes";
export default function HomePage() {
  // Read the Mapbox Theme
  const { theme } = useTheme();
  // Read Mapbox Token
  const mapboxToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;
  return (
    <main className="flex flex-1 flex-col justify-center text-center">
      {/* <Map>
        mapboxAccessToken={mapboxToken}
        initialViewState={{
          longitude:-122.2,
          latitude:38.1,
          zoom: 10,
        }}
        mapStyle={
          theme === "light" 
            ? "mapbox://styles/mapbox/streets-v11" 
            : "mapbox://styles/mapbox/dark-v10"
        } */}
      {/* >
        {markers.map((marker, index) => (
          <Marker>
            longitude={marker.longitude}
            latitude={marker.latitude}
            color="red"
          </Marker>
        ))} */}
      {/* </Map> */}
      <h1 className="mb-4 text-9xl font-bold">Glowy</h1>
      <h2 className="mb-9 text-3xl font-bold">Learning and inventing to bring light around the world</h2>
      <button>click me</button>
      {/* <p className="text-fd-muted-foreground">
        You can open{' '}
        <Link
          href="/docs"
          className="text-fd-foreground font-semibold underline"
        >
          /docs
        </Link>{' '}
        and see the documentation.
      </p> */}
    </main>
  );
}
