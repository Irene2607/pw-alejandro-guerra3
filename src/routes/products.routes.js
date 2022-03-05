import {response, Router} from 'express'
const router = Router()

import * as productsCtrl from '../controllers/products.controller'

router.post('/', productsCtrl.createProduct)

router.get('/', productsCtrl.getProduct)

router.get('/:productId', productsCtrl.getProductById)

router.put('/:productId', productsCtrl.updateProductByid)

router.delete('/productId', productsCtrl.deleteProductByid)


export default router;