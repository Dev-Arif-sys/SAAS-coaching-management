const express =require('express')
const router = express.Router();
const {login,refresh,register,logout, protectTest} = require('../controllers/auth.controller');
const { protect } = require('../middlewares/protect');


router.route('/')
              .post(login)
router.route('/register') 
              .post(register)
router.route('/refresh')
              .get(refresh)
router.route('/logout')
              .post(logout)     
 router.route('/protect')
              .get(protect,protectTest)                       



module.exports=router;