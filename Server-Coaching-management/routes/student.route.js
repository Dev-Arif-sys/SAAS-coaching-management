const express =require('express');
const { registerStudent, getStudents, getStudentsBatch, updateStudent, getStudent } = require('../controllers/student.controller');
const { protect } = require('../middlewares/protect');
const router = express.Router();



router.route('/')
              .post(protect,registerStudent)
              .get(protect,getStudents)
router.route('/batch')
              .get(protect,getStudentsBatch)
router.route('/:id') 
              .get(protect,getStudent)
              .put(protect,updateStudent)
              .delete()
 
                      



module.exports=router;