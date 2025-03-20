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
    <main className="main-class">
    {/* <main className="flex flex-1 flex-col justify-center text-center"> */}
      {/* <div className ="flex flex-col h-screen w-full"> */}
      <div className="overlay-text">
        <h1 className="title">glowy</h1>
        <h2 className="subtitle">Learning and inventing to bring light around the world</h2>
      </div>
      
      <div className ="map-background">
        <Map
          mapboxAccessToken={mapboxToken}
          initialViewState={{
            longitude: -122.4,
            latitude: 37.8,
            zoom: 14
        }}
        // style={{width: 100, height: 100}}
        mapStyle={
          theme === "light"
          ? "mapbox://styles/mapbox/streets-v9"
          : "mapbox://styles/mapbox/dark-v10"
        }
      />
      </div>
      {/* <h1 className="mb-4 text-9xl font-bold">Glowy</h1> */}
      {/* <h2 className="mb-9 text-3xl font-bold">Learning and inventing to bring light around the world</h2> */}
      {/* <button>click me</button> */}
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
