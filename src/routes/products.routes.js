import {response, Router} from 'express'
import { verify } from 'jsonwebtoken'
const router = Router()

import * as productsCtrl from '../controllers/products.controller'
import { verifyToken } from '../middlewares'

router.post('/', verifyToken, productsCtrl.createProduct)

router.get('/', productsCtrl.getProduct)

router.get('/:productId', productsCtrl.getProductById)

router.put('/:productId', verifyToken, productsCtrl.updateProductByid)

router.delete('/:productId', verifyToken, productsCtrl.deleteProductByid)


export default router;