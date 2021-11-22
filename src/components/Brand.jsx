import React, {memo} from 'react';

const Brand = memo(({brand, checkedBrand}) => {

    return (
        <div className='brand'>
            <label>
                <input
                    type="checkbox"
                    name="travel-notes"
                    className="real-checkbox"
                    onClick={(e) => checkedBrand(e, brand.id)}

                />
                <span className="custom-checkbox"></span>
                {brand.name}
            </label>
            {/*<input*/}
            {/*    onClick={(e) => checkedBrand(e, brand.id)}*/}
            {/*    type="checkbox"*/}
            {/*    id="checkbox-id"*/}
            {/*/>*/}
            {/*<label htmlFor="checkbox-id"></label>*/}
            {/*{brand.name}*/}
        </div>
    );
});

export default Brand;