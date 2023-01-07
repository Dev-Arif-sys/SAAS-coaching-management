const express =require('express');
const { registerInstitution, getAllInstitution, deleteInstitution, updateInstitution, getInstitution } = require('../controllers/institution.controller');
const { protect } = require('../middlewares/protect');
const router = express.Router();



router.route('/')
              .post(registerInstitution)
              .get(protect,getAllInstitution)
router.route('/:id') 
              .get(getInstitution)
              .put(updateInstitution)
              .delete(deleteInstitution)
                      



module.exports=router;