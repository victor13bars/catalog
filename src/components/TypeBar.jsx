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
            <h1 className='type_device'>Камеры</h1>
            <h2 className='price'>Цена, ₽</h2>
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
            <h2 className='brand_name'>Брэнд</h2>
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