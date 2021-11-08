import React, {memo} from 'react';

const Brand = memo(({brand, checkedBrand}) => {

    return (
        <div className='brand'>
            <input
                onClick={(e) => checkedBrand(e, brand.id)}
                type="checkbox"
                id="checkbox-id"
            />
            <label htmlFor="checkbox-id"></label>
            {brand.name}
        </div>
    );
});

export default Brand;