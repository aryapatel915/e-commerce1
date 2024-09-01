import express from 'express';
import userControllers from '../app/user/userControllers';
import productController from '../app/product/productController';
import upload from '../common/multer/multer.config';
import categoryController from '../app/category/categoryController';
import OrderController from '../app/orders/oderController';
import cartController from '../app/cart/cartController';
import carouselController from '../app/carousel/carouselController';
import wishlistController from '../app/wishlist/wishlistController';



const router = express.Router() 

router.post('/login',userControllers.LoginUser);
router.post('/register',userControllers.RegisterUser);
router.post('/registerDetails',userControllers.RegisterUserDetails);
router.get('/getUserId/:userid',upload.array('files'),userControllers.getByIdUser)

router.post('/category',categoryController.RegisterCategory)
router.get('/getcategory',categoryController.GetAllCategories)

router.post('/product',upload.array('files'),productController.AddProduct)
router.get('/getProduct',upload.array('files'),productController.GetProduct)
router.put('/update',upload.array('files'),productController.UpdateProduct)
router.get('/getProductId/:productId',upload.array('files'),productController.getByIdProduct)
router.delete('/delete/:productId',upload.array('files'),productController.DeleteProduct)

router.post('/cart',cartController.addToCart)
router.get('/getcart/:userid',cartController.getAllcart)
router.delete('/removeFromCart/:cartID',cartController.removeFromCart)

router.post('/wishlist',wishlistController.addtoWishlist)
router.get('/getwishlist/:userid',wishlistController.getAllWishlist)
router.delete('/removeFromwishlist/:wishlistID',wishlistController.removeFromWishlist)

router.post('/carousel',upload.array('files'),carouselController.AddCarousel)
router.get('/getcarousel',upload.array('files'),carouselController.getCarousel)
router.delete('/deletecarousel/:carouselId',upload.array('files'),carouselController.deletecarousel)

router.post('/order',OrderController.AddOrder)
router.get('/getorder/:userid',OrderController.GetAllOrder)
router.put('/updateorder',OrderController.updateOrderStatus)
router.get('/getbyId/:id',OrderController.GetParticularOrder)

router.post('/addToCart',cartController.addToCart)

export default router
