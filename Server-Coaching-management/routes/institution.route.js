const express =require('express');
const { registerInstitution, getAllInstitution, deleteInstitution } = require('../controllers/institution.controller');
const { protect } = require('../middlewares/protect');
const router = express.Router();



router.route('/')
              .post(registerInstitution)
              .get(protect,getAllInstitution)
router.route('/:id') 
              .get()
              .put()
              .delete(deleteInstitution)
                      



module.exports=router;