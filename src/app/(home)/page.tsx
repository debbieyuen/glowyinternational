// import Link from 'next/link';
// use client so we can run it on the server
"use client"
import * as React from 'react';
import Map from 'react-map-gl/mapbox';
import "mapbox-gl/dist/mapbox-gl.css";
import { useTheme } from "next-themes";

export default function HomePage() {
  // Mapbox Token
  const mapboxToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

  // Next Themes
  const { theme } = useTheme();

  return (
    <main className="flex flex-1 flex-col justify-center text-center">
      <Map
      mapboxAccessToken={mapboxToken}
      initialViewState={{
        longitude: -122.4,
        latitude: 37.8,
        zoom: 14
      }}
      style={{width: 600, height: 400}}
      mapStyle={
        theme === "light"
        ? "mapbox://styles/mapbox/streets-v9"
        : "mapbox://styles/mapbox/dark-v10"
      }
    />

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
