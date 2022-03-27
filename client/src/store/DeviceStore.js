import {makeAutoObservable} from 'mobx'

export default class DeviceStore {
    constructor() {
        this._types = []
        this._brands = []
        this._devices = []
        this._selectedType = {}
        this._selectedBrand = {}
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }
    setSelectedType(type) {
        this._selectedType = type
    }
    setSelectedBrand(brand) {
        this._selectedBrand = brand
    }
    setBrands(brands) {
        this._brands = brands
    }
    setDevices(devices) {
        this._devices = devices
    }
    

    get types() {
        return this._types
    }
    get selectedType() {
        return this._selectedType
    }
    get brands() {
        return this._brands
    }
    get selectedBrand() {
        return this._selectedBrand
    }
    get devices() {
        return this._devices
    }
}