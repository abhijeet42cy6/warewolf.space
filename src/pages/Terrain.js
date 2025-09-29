import React, { useEffect, useRef, useState } from "react";
import '../css/terrain.css';
import 'leaflet/dist/leaflet.css';

// Import marker icons to ensure they're bundled properly
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

export default function Terrain() {
  const mapRef = useRef(null);
  const leafletRef = useRef(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  // Search function using OpenStreetMap Nominatim API
  const searchPlaces = async (query) => {
    if (!query.trim()) {
      setSearchResults([]);
      setShowResults(false);
      return;
    }

    setIsSearching(true);
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&limit=5&addressdetails=1`
      );
      const data = await response.json();
      setSearchResults(data);
      setShowResults(true);
    } catch (error) {
      console.error('Search error:', error);
      setSearchResults([]);
    }
    setIsSearching(false);
  };

  // Handle search input change with debouncing
  useEffect(() => {
    const timer = setTimeout(() => {
      searchPlaces(searchQuery);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Handle place selection
  const handlePlaceSelect = (place) => {
    if (mapRef.current && mapRef.current._leaflet_map) {
      const L = leafletRef.current;
      if (!L) return;
      const map = mapRef.current._leaflet_map;
      const lat = parseFloat(place.lat);
      const lon = parseFloat(place.lon);

      // Fly to the location
      map.flyTo([lat, lon], 13, {
        animate: true,
        duration: 2
      });

      // Add marker at the new location
      const marker = L.marker([lat, lon]).addTo(map);
      marker.bindPopup(`
        <div style="text-align: center;">
          <strong>${place.display_name.split(',')[0]}</strong><br/>
          <small>${place.type || 'Location'}</small>
        </div>
      `).openPopup();

      // Clear search
      setSearchQuery('');
      setShowResults(false);
    }
  };

  useEffect(() => {
    // Dynamically import Leaflet to avoid SSR issues
    import('leaflet').then((L) => {
      leafletRef.current = L;
      if (mapRef.current && !mapRef.current._leaflet_id) {
        // Fix default marker icons
        const DefaultIcon = L.icon({
          iconUrl: markerIcon,
          iconRetinaUrl: markerIcon2x,
          shadowUrl: markerShadow,
          iconSize: [25, 41],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
          shadowSize: [41, 41]
        });

        // Set the default icon for all markers
        L.Marker.prototype.options.icon = DefaultIcon;

        // Initialize the map
        const map = L.map(mapRef.current, {
          attributionControl: false  // Disable attribution control
        }).setView([28.6139, 77.2090], 13);

        // Add tile layer
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        }).addTo(map);

        // Add initial marker
        const marker = L.marker([28.6139, 77.2090]).addTo(map);
        marker.bindPopup('📍 You are here — Delhi!').openPopup();

        // Store map reference for search functionality
        mapRef.current._leaflet_map = map;
      }
    });

    // Cleanup function
    return () => {
      if (mapRef.current && mapRef.current._leaflet_id) {
        mapRef.current._leaflet_map.remove();
      }
    };
  }, []);

  return (
    <div className='leaf-map'>
      {/* Search Bar */}
      <div className="map-search-container">
        <div className="search-wrapper">
          <div className="search-input-container">
            <i className="fas fa-search search-icon"></i>
            <input
              type="text"
              placeholder="Search for places, cities, addresses..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            {isSearching && <div className="search-spinner"></div>}
          </div>

          {/* Search Results Dropdown */}
          {showResults && searchResults.length > 0 && (
            <div className="search-results">
              {searchResults.map((result, index) => (
                <div
                  key={index}
                  className="search-result-item"
                  onClick={() => handlePlaceSelect(result)}
                >
                  <div className="result-icon">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div className="result-details">
                    <div className="result-name">{result.display_name.split(',')[0]}</div>
                    <div className="result-address">{result.type || 'Location'}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Map Container */}
      <div
        ref={mapRef}
        className="leaflet-container"
        style={{
          height: '350px',
          width: '100%',
          borderRadius: '8px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
        }}
      />
    </div>
  );
}
