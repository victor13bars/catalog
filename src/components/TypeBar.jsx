import React, {useCallback, useContext, useState} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import Brand from "./Brand";

const TypeBar = observer(() => {
    const {device} = useContext(Context)
    const [price, setPrice] = useState(device.price)

    const checkedBrand = useCallback((e, id) => {
        if (e.target.checked) {
            device.setSelectedBrandId(id)
        } else {
            device.delSelectedBrandId(id)
        }
    }, [])

    return (
        <div className='typeBar'>
            <div className='count_device'>Товаров {device.devices.length}</div>
            <div className='type_device'>Камеры</div>
            <div className='price'>Цена, ₽</div>
            <div className='inputBlock'>
                <input
                    type="text"
                    value={price.min}
                    onChange={(e) => setPrice({...price, min: e.target.value})}
                    onBlur={() => device.setPrice(price)}
                />
                <input
                    type="text"
                    value={price.max}
                    onChange={(e) => setPrice({...price, max: e.target.value})}
                    onBlur={() => device.setPrice(price)}
                />
            </div>
            <div className='brand_name'>Брэнд</div>
            {device.brands.map(brand =>
                <Brand
                    key={brand.id}
                    brand={brand}
                    checkedBrand={checkedBrand}
                />
            )}
        </div>
    );
});

export default TypeBar;