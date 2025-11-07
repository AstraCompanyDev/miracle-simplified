import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const ContactMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState('');
  const [tokenSubmitted, setTokenSubmitted] = useState(false);

  // Coordinates for Bangkok, Thailand (general area)
  // Update these with the specific clinic address coordinates
  const clinicCoordinates: [number, number] = [100.5018, 13.7563]; // Bangkok center
  
  useEffect(() => {
    if (!mapContainer.current || !tokenSubmitted || !mapboxToken) return;

    try {
      mapboxgl.accessToken = mapboxToken;
      
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/light-v11',
        center: clinicCoordinates,
        zoom: 15,
      });

      // Add marker for clinic location
      new mapboxgl.Marker({ color: '#8B5CF6' })
        .setLngLat(clinicCoordinates)
        .setPopup(
          new mapboxgl.Popup({ offset: 25 })
            .setHTML('<h3 class="font-semibold">Miracle Regenerative Center</h3><p>Heart of Bangkok, Thailand</p>')
        )
        .addTo(map.current);

      // Add navigation controls
      map.current.addControl(
        new mapboxgl.NavigationControl(),
        'top-right'
      );

    } catch (error) {
      console.error('Error initializing map:', error);
    }

    return () => {
      map.current?.remove();
    };
  }, [tokenSubmitted, mapboxToken]);

  const handleTokenSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mapboxToken.trim()) {
      setTokenSubmitted(true);
    }
  };

  if (!tokenSubmitted) {
    return (
      <div className="bg-gradient-card rounded-2xl p-8 shadow-soft h-96 flex flex-col items-center justify-center">
        <h3 className="text-xl font-semibold mb-4 text-center">Enter Mapbox Token to View Map</h3>
        <p className="text-muted-foreground mb-6 text-center max-w-md">
          Get your free public token from <a href="https://mapbox.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">mapbox.com</a>
        </p>
        <form onSubmit={handleTokenSubmit} className="w-full max-w-md space-y-4">
          <Input
            type="text"
            placeholder="pk.eyJ1IjoieW91cnVzZXJuYW1lIiwiYSI6ImNsZT..."
            value={mapboxToken}
            onChange={(e) => setMapboxToken(e.target.value)}
            className="w-full"
          />
          <Button type="submit" className="w-full">
            Load Map
          </Button>
        </form>
      </div>
    );
  }

  return (
    <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-soft">
      <div ref={mapContainer} className="absolute inset-0" />
    </div>
  );
};

export default ContactMap;