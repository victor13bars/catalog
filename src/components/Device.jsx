import React, {memo} from 'react';
import Heart from "./Heart";

const Device = memo(({device}) => {

    return (
        <div className='device'>
            <div className='device_photo'>
                <img src={device.image.desktop.x1} alt=""/>
                {device.is_new && <span className='device_newDevice'>новинка</span>}

            </div>
            <div className="device_wrapper">
                <div className="device_name">
                    {device.title}
                </div>
                <div className='device_priceBlock'>
                    <div className="device_price">
                        {device.price + ' ₽'}
                    </div>
                    {device.is_new && <div className='device_new'>Новое</div>}
                </div>
                <div className='device_groupBtn'>
                    <button className='device_btn'>В корзину</button>
                    <Heart/>
                </div>
            </div>

        </div>
    );
});

export default Device;