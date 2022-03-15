const uuid = require('uuid')
const path = require('path')
const {Device, DeviveInfo} = require('../models/models')
const { nextTick } = require('process')
const ApiError = require('../error/ApiError')

class DeviceController {

    async create(req, res, next) {
       try {
            const {name, price,  typeId, brandId, info} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + '.jpg'
            img.mv(path.resolve(__dirname, '..', 'static', fileName))

            const device = await Device.create({name, price, typeId, brandId, img: fileName})

            if (info) {
                info = JSON.parse(info)

                info.forEach(element => {
                    device.info.create( {
                        title: element.title,
                        description: element.description,
                        deviceId: device.id
                    })
                    
                });
            }


            return res.json(device)
        }
        catch (e) {
            next(ApiError.BadRequest(e.message))
        }
    }

    async getAll(req, res) {
        let {brandId, typeId, limit, page} = req.query
        let devices 
        page = page || 1
        limit = limit || 10
        let offset = page * limit - limit
        if (!brandId && !typeId) {
            devices = await Device.findAndCountAll({limit, offset})
        } 
        if (brandId && !typeId) {
            devices = await Device.findAndCountAll({where: {brandId}, limit, offset})
        }
        if (!brandId && typeId) {
            devices = await Device.findAndCountAll({where: {typeId}, limit, offset})
        }
        if (brandId && typeId) {
            devices = await Device.findAndCountAll({where: {typeId, brandId}, limit, offset})
        }
        return res.json(devices)
    }

    async getOne(req, res) {
        const{id} = req.params
        
        const device = await Device.findOne(
                {
                    where: {id},
                    include: [ { model: DeviveInfo, as: 'info' } ]
                }, 
            
            ) 
        
        return res.json(device)
    }
}

module.exports = new DeviceController()
