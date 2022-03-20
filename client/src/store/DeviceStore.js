import {makeAutoObservable} from 'mobx'

export default class DeviceStore {
    constructor() {
        this._types = [
            { id: 1, name: 'Phones'},
            { id: 2, name: 'TV'},
            { id: 3, name: 'Laptops'},
            { id: 4, name: 'Audio'}
        ]
        this._brands = [
            { id: 1, name: 'Apple'},
            { id: 2, name: 'Xiaomi'},
            { id: 3, name: 'Lenovo'},
            { id: 4, name: 'Asus'},
            
        ]
        this._devices = [
            { id: 1, name: 'IPhone 12',price: 100000, rating: 5, img: 'https://www.techinn.com/f/13782/137821856/apple-iphone-12-pro-max-6gb-512gb-6.7.jpg'},
            { id: 2, name: 'IPhone 11',price: 80000, rating: 5, img: 'https://www.techinn.com/f/13782/137821856/apple-iphone-12-pro-max-6gb-512gb-6.7.jpg'},
            { id: 3, name: 'IPhone 10',price: 50000, rating: 5, img: 'https://www.techinn.com/f/13782/137821856/apple-iphone-12-pro-max-6gb-512gb-6.7.jpg'},
            { id: 4, name: 'IPhone 8',price: 30000, rating: 5, img: 'https://www.techinn.com/f/13782/137821856/apple-iphone-12-pro-max-6gb-512gb-6.7.jpg'},
            { id: 5, name: 'IPhone 12',price: 100000, rating: 5, img: 'https://www.techinn.com/f/13782/137821856/apple-iphone-12-pro-max-6gb-512gb-6.7.jpg'},
            { id: 6, name: 'IPhone 11',price: 80000, rating: 5, img: 'https://www.techinn.com/f/13782/137821856/apple-iphone-12-pro-max-6gb-512gb-6.7.jpg'},
            { id: 7, name: 'IPhone 10',price: 50000, rating: 5, img: 'https://www.techinn.com/f/13782/137821856/apple-iphone-12-pro-max-6gb-512gb-6.7.jpg'},
            { id: 8, name: 'IPhone 8',price: 30000, rating: 5, img: 'https://www.techinn.com/f/13782/137821856/apple-iphone-12-pro-max-6gb-512gb-6.7.jpg'},

        ]
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