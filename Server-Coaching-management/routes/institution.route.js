const express =require('express');
const { registerInstitution } = require('../controllers/institution.controller');
const router = express.Router();



router.route('/')
              .post(registerInstitution)
router.route('/:id') 
              .get()
              .put()
              .delete()
                      



module.exports=router;