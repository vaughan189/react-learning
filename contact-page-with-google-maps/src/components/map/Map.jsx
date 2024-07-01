import React from 'react'
import GoogleMapReact from 'google-map-react'
import { Icon } from '@iconify/react'
import locationIcon from '../../assets/icons/PinOnMap.svg'
import customLocationIcon from '../../assets/icons/PinOnMapSelected.svg'
import './map.css'

import clusters from "../../data/clusters.json"

const LocationPin = ({ text }) => (
    <div className="pin">
        <img src={locationIcon} alt="selected location pin" width={35} height={48} />
        {/* <p className="pin-text">{text}</p> */}
    </div>
)

const LocationPinSelected = ({ text }) => (
    <div className="pin">
        <img src={customLocationIcon} alt="normal location pin" width={40} height={54} />
        {/* <p className="pin-text">{text}</p> */}
    </div>
)


const Map = ({ location, zoomLevel }) => {

    const { data: { storeLocator: { store: stores } } } = clusters

    console.log(stores);

    return (
        <div className="map">
            <h2 className="map-h2">Come Visit Us At Our Campus</h2>

            <div className="google-map">
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyAenxSlbWlG7Qy3N03MdxxwvtS8MtkndQ0' }}
                    defaultCenter={location}
                    defaultZoom={zoomLevel}
                >
                    {stores.map((item, index) => (
                        index === 0 ?
                            <LocationPinSelected
                                lat={item.lat}
                                lng={item.lng}
                                text={item.address}
                            /> : <LocationPin
                                lat={item.lat}
                                lng={item.lng}
                                text={item.address}
                            />

                    ))

                    }
                </GoogleMapReact>
            </div>
        </div>

    )
}


export default Map

