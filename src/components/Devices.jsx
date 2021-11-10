import React, {useContext, useEffect} from 'react';
import Device from "./Device";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {getAllDevices} from "../api/deviceApi";


const Devices = observer(() => {
    const {device} = useContext(Context)

    useEffect(() => {
        try {
            getAllDevices(device.selectedBrandId, device.price.min, device.price.max)
                .then(data => device.setDevices(data.products))
            device.setIsLoading(false)
        } catch (e) {
            console.log(e)
        }


    }, [device.selectedBrandId, device.price.min, device.price.max])

    return (

        <div className='devices'>
            {device.devices.map(device =>
                <Device
                    key={device.id}
                    device={device}
                />
            )}

        </div>


    );
});

export default Devices;