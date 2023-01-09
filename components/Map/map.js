import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import style from '../../styles/Home.module.css'

import { 
    MapContainer,
    TileLayer,
    Marker,
    Popup,
    Polyline,
    CircleMarker
} from 'react-leaflet'
import { Poly } from '@next/font/google'
import { polyline } from 'leaflet'


export default function Map(){

    const position = [49.28594, -123.11129];
    const polyline = [
        [49.2868128, -123.1214528],
        [49.2822638, -123.116657],
        [49.2794992, 123.1135886],
        [49.2737316, -123.1041365],
        [49.262623, -123.0714252],
        [49.2484708, -123.0607178],
        [49.2433838, -123.0497091],
        [49.2378151, -123.0343239],
        [49.2300808, -123.0173938],
        [49.2261012, -123.009079],
        [49.2133114, -122.9899695],
        [49.2122742, -122.9724172],
        [49.2030218, -122.9668811],
        [49.201115, -122.9226997],
        [49.2026713, -122.914696],
        [49.2034284, -122.8822949],
        [49.203849, -122.8653863],
        [49.1886492, -122.8603223],
        [49.1886492, -122.8603223],
        [49.2095407, -122.9020789],
        [49.2320768, -122.9067138],
        [49.2483278, -122.9199317]  
    ]
    const greenOption = { color: 'mediumspringgreen' };
    const redOption = { color: 'tomato' };


    return(
        <MapContainer className={style.map} center={position} zoom={14} scrollWheelZoom={true}>
            <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker position={position}>
                <Popup>
                    Skytrain. <br /> Waterfront.
                </Popup>
            </Marker>

            <CircleMarker center={[49.28250, -123.11865]} pathOptions={redOption} radius={20}>
                <Popup>
                    You reached your destination
                </Popup>
            </CircleMarker>
            <Polyline pathOptions={greenOption} positions={polyline} />
        </MapContainer>
    )
}