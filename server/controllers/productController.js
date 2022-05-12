const uuid = require('uuid')
const path = require('path')
const { Product, ProductInfo,
    Rating
} = require('../models/models')
const ApiError = require('../error/ApiError')

class ProductController {
    async create(req, res, next) {
        try {
            let {
                name,
                price,
                categoryId,
                info,
            } = req.body
            const { img } = req.files
            let fileName = uuid.v4() + '.jpg'
            await img.mv(path.resolve(__dirname, '..', 'static', fileName))

            if (info) {
                info = JSON.parse(info)
                info.forEach(i => {
                    ProductInfo.create({
                        title: i.title,
                        description: i.description,
                        productId: product.id
                    })
                })
            }

            const product = await Product.create({ name, price, categoryId, img: fileName })

            return res.json(product)
        } catch (err) {
            next(ApiError.badRequest(err.message))
        }
    }



    async getAll(req, res) {
        let { categoryId, limit, page } = req.query
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit
        let products
        if (!categoryId) {
            products = await Product.findAndCountAll({ limit, offset })
        }
        if (categoryId) {
            products = await Product.findAndCountAll({ where: { categoryId }, limit, offset })
        }

        return res.json(products)
    }

    //todo delete and update product and category
    //why exist deleteOne method?
    // async delete(req, res, next) {
    //     try {
    //         await Product.deleteOne
    //     }
    //     let { id } = req.params
    //
    // }

    async getOne(req, res, next) {
        const { id } = req.params
        const { user } = req.body

        const product = await Product.findOne(
            {
                where: { id },
                //check who is user and may be return boolean info about this process
                include: [{ model: ProductInfo, as: 'info' }, { model: Rating, as: 'rateInfo' }]
            }
        )

        const calculateRating = (ratings) => {
            let rating = 0
            if (ratings) {
                ratings.forEach(i => {
                    rating += i
                })
                rating = rating / ratings.length
            }

            return rating
        }

        const parsedProduct = JSON.parse(JSON.stringify(product))
        const newProduct = {...parsedProduct}

        if (!parsedProduct) {
            return next(ApiError.badRequest('Нет такой трубы, дружок!)'))
        }

        if (parsedProduct.rateInfo.length){
            newProduct.rateInfo = {
                isRated: parsedProduct.rateInfo.reduce((total, item) => {
                    if (item.user === Number(user)){
                        total = true
                    }
                    return total
                }, false),
                rate: calculateRating(product.rateInfo.map(item=> item.rate))
            }
        } else {
            newProduct.rateInfo = {
                isRated: false,
                rate: 0
            }
        }

        return res.json(newProduct)
    }
}

module.exports = new ProductController()


//todos example
// const mongoose = require('mongoose');
// const Task = require('../../db/models/task/index');
//
//
// module.exports.changeTaskInfo = async (req, res, next) => {
//     try{
//         await Task.updateOne({_id: req.params._id}, {
//             $set: {
//                 text: req.body.text,
//                 isCheck: req.body.isCheck
//             }
//         });
//         res.send('Task updated');
//     } catch (err) {
//         console.log({'err': err});
//     }
// };
//
// module.exports.deleteTask = async (req, res, next) => {
//     try{
//         await Task.deleteOne({_id: req.params._id});
//         res.send('Task deleted');
//     }catch (err){
//         console.log({'err': err});
//     }
// }
//
// module.exports.deleteAllTask = async (req, res, next) => {
//     try{
//         await mongoose.connection.collections['tasks'].deleteMany({});
//         res.send('Tasks deleted');
//     }catch (err){
//         console.log({'err': err});
//     }
// }


