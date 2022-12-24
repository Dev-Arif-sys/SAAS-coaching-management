const express =require('express');
const { registerInstitution, getAllInstitution, deleteInstitution } = require('../controllers/institution.controller');
const router = express.Router();



router.route('/')
              .post(registerInstitution)
              .get(getAllInstitution)
router.route('/:id') 
              .get()
              .put()
              .delete(deleteInstitution)
                      



module.exports=router;