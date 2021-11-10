import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._devices = []
        this._brands = [
            {id: 1, name: 'Canon'},
            {id: 9, name: 'Nikon'}
        ]
        this._selectedBrandId = []

        this._price = {
            min: '0',
            max: '0'
        }


        makeAutoObservable(this)
    }

    setDevices(devices) {
        this._devices = devices
    }

    setBrands(brands) {
        this._brands = brands
    }

    setSelectedBrandId(id) {
        this._selectedBrandId = [...this.selectedBrandId, id]
    }

    delSelectedBrandId(id) {
        this._selectedBrandId = [...this.selectedBrandId.filter(el => el !== id)]
    }

    setPrice(price) {
        this._price = price
    }


    get devices() {
        return this._devices
    }

    get brands() {
        return this._brands
    }

    get selectedBrandId() {
        return this._selectedBrandId
    }

    get price() {
        return this._price
    }


}