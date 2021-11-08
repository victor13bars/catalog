import {instance} from "./api";

export const getAllDevices = async (selectedBrands, priceMin, priceMax) => {

    const {data} = await instance.get(``, {
        params: {
            'brands[]': selectedBrands,
            'price[min]': priceMin,
            'price[max]': priceMax
        }
    })
    return data
}