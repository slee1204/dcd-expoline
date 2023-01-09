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

    const center = [49.28594, -123.11129]; //waterfront
    const mainpolyline = [
        [49.28594, -123.11129],
        [49.2856364, -123.1198152],
        [49.2832289,-123.1160432],
        [49.279398,-123.109311],
        [49.2731524,-123.1004436],
        [49.2618519,-123.0691167],
        [49.248374,-123.0560202],
        [49.2442084,-123.0459222],
        [49.2383663,-123.031678],
        [49.2298294,-123.012788],
        [49.2258524,-123.0038944],
        [49.2200742,-122.988416],
        [49.2121286,-122.959233],
        [49.2000649,-122.949015],
        [49.20137,-122.9127416],
        [49.2048182,-122.9061329]
    ];

    const mainname = [
        {name:"Waterfront Station", coord: [49.28594, -123.11129]},
        {name:"Burrard Station", coord: [49.2856364, -123.1198152]},
        {name:"Graville Station", coord: [49.2832289,-123.1160432]},
        {name:"Stadium-Chinatown Station", coord: [49.279398,-123.109311]},
        {name:"Main Street-Science World Station", coord: [49.2731524,-123.1004436]},
        {name:"Commercial-Broadway Station", coord: [49.2618519,-123.0691167]},
        {name:"Nanaimo Station", coord: [49.248374,-123.0560202]},
        {name:"29th Ave Station", coord: [49.2442084,-123.0459222]},
        {name:"Joyce–Collingwood Station", coord: [49.2383663,-123.031678]},
        {name:"Patterson Station", coord: [49.2298294,-123.012788]},
        {name:"Metrotown Station", coord: [49.2258524,-123.0038944]},
        {name:"Royal Oak Station", coord: [49.2200742,-122.988416]},
        {name:"Edmonds Station", coord: [49.2121286,-122.959233]},
        {name:"22nd Street Station", coord: [49.2000649,-122.949015]},
        {name:"New Westminster Station", coord: [49.20137,-122.9127416]},
        {name:"Columbia Station", coord: [49.2048182,-122.9061329]},
    ];

    const coqpolyline = [
        [49.2048182,-122.9061329],
        [49.224545,-122.8895213],
        [49.2331095,-122.8827758],
        [49.2484558,-122.8968482],
        [49.2534219,-122.918146] 
    ];

    const coqname = [
        {name:"Sapperton Station", coord: [49.224545,-122.8895213]},
        {name:"Braid Station", coord: [49.2331095,-122.8827758]},
        {name:"Lougheed Town Centre Station", coord: [49.2484558,-122.8968482]},
        {name:"Production Way–University Station", coord: [49.2534219,-122.918146]} 
    ];

    const surreypolyline = [
        [49.2048182,-122.9061329],
        [49.2044338,-122.8741266],
        [49.1991139,-122.850605],
        [49.1895143,-122.8478763],
        [49.1827755,-122.8447317],
    ]; 

    const surreyname = [
        {name:"Scott Road Station", coord: [49.2044338,-122.8741266]},
        {name:"Gateway Station", coord: [49.1991139,-122.850605]},
        {name:"Surrey Central Station", coord: [49.1895143,-122.8478763]},
        {name:"King George Station", coord: [49.1827755,-122.8447317]},
    ];
  

    const greenOption = { color: 'mediumspringgreen' };
    const redOption = { color: 'tomato' };
    const blueOption = { color: 'royalblue' };
    const circleOption = { color: 'yellow' };

    return(
        <MapContainer className={style.map} center={center} zoom={14} scrollWheelZoom={true}>
            <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {mainname.map((o,i)=>
                <Marker position={o.coord}>
                    <Popup>
                        {o.name}
                    </Popup>
                </Marker>                        
                    )}

            {coqname.map((o,i)=>
                <Marker position={o.coord}>
                    <Popup>
                        {o.name}
                    </Popup>
                </Marker>                        
            )}
            {surreyname.map((o,i)=>
                <Marker position={o.coord}>
                    <Popup>
                        {o.name}
                    </Popup>
                </Marker>                        
            )}        


            <CircleMarker center={[49.28594, -123.11129]} pathOptions={circleOption} radius={20}>
                <Popup>
                    You may transfer to <br/> Canada Line or Millennium Line.
                </Popup>
            </CircleMarker>
            <CircleMarker center={[49.2048182,-122.9061329]} pathOptions={circleOption} radius={20}>
                <Popup>
                    You may transfer to train to <br/> King George or Production Way-University.
                </Popup>
            </CircleMarker>
            <CircleMarker center={[49.1827755,-122.8447317]} pathOptions={blueOption} radius={20}>
                <Popup>
                You have arrived to your destination <br/> to King George.
                </Popup>
            </CircleMarker>
            <CircleMarker center={[49.2534219,-122.918146]} pathOptions={redOption} radius={20}>
                <Popup>
                    You have arrived to your destination <br/> to Production Way-University.
                </Popup>
            </CircleMarker>  

            <Polyline pathOptions={greenOption} positions={mainpolyline} />
            <Polyline pathOptions={redOption} positions={coqpolyline} />
            <Polyline pathOptions={blueOption} positions={surreypolyline} />
        </MapContainer>
    )
}