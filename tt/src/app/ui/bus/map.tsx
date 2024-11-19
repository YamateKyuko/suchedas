'use client';
import { useEffect, useRef } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import React from 'react';

// { height, width }: Props
export default function MapLib() {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const map = useRef<maplibregl.Map | null>(null);

  useEffect(() => {
    if (map.current || !mapContainer.current) return;

    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: {
        version: 8,
        sources: {
          'base-map': {
            type: 'raster',
            tiles: [
              // 背景地図のURLは適宜置き換えてください
              'https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png',
            ],
            tileSize: 256,
            attribution:
              '<a href="https://maps.gsi.go.jp/development/ichiran.html">地理院タイル</a>にODPTのデータを加工して記載。',
            // 背景地図置き換えたらアトリビューションも忘れずに
          },
        },
        layers: [
          {
            id: 'base-tiles',
            type: 'raster',
            source: 'base-map',
            minzoom: 0,
            maxzoom: 16,
          },
        ],
      },
      center: [139.63982660835788, 35.4434200783276],
      zoom: 12,
    });

    map.current.on('load', () => {
      if (!map.current) return;

      map.current.addSource('places', {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: [
            {
              type: 'Feature',
              properties: {
                title: '横浜スタジアム',
                description: '＼横浜優勝／',
              },
              geometry: {
                type: 'Point',
                coordinates: [
                  139.63982660835788, 35.4434200783276,
                ],
              },
            },
          ],
        },
      });

      map.current.addLayer({
        id: 'places',
        type: 'circle',
        source: 'places',
        paint: {
          'circle-radius': 10,
          'circle-color': '#007cbf',
          'circle-stroke-width': 2,
          'circle-stroke-color': '#fff',
        },
      });
    });

    map.current.on('click', 'places', (e: maplibregl.MapMouseEvent) => {
      console.log(e);

      if (map.current === null) return;

      const coordinates = e.lngLat;
      const popup = new maplibregl.Popup();

      popup
        .setLngLat(coordinates)
        .setHTML('<p style="color:black">＼横浜優勝／</p>')
        .addTo(map.current);
    });

    if (!map.current) return;




    
  }, []);

  return (
    <div
      ref={mapContainer}
      style={{
        height: '100vh',
        width: '100vw',
      }}
    ></div>
  );
}
