const express =require('express');
const { registerStudent, getStudents } = require('../controllers/student.controller');
const { protect } = require('../middlewares/protect');
const router = express.Router();



router.route('/')
              .post(protect,registerStudent)
              .get(getStudents)
router.route('/:id') 
              .get()
              .put()
              .delete()
                      



module.exports=router;