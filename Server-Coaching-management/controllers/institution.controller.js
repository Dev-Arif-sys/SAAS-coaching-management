const Institution = require("../models/institution.model");

// @desc Register Institution
// @route POST /api/v1/institutions
// @access super admin
const registerInstitution = async (req, res, next) => {
  try {
    const institution = await Institution.create({
      ...req.body,
    });
    console.log(institution);
    res.status(200).json({
      success: true,
      message: "Institution has been registered successfully",
      result: institution,
    });
  } catch (err) {
    next(err);
  }
};

// @desc Register Institution
// @route POST /api/v1/institutions
// @access super admin
const getAllInstitution = async (req, res, next) => {
  try {
    const institutions = await Institution.find({}).sort({createdAt: -1}).populate({
      path:"users",
      select:'-password'
    });

    res.status(200).json({
      success: true,
      message: "All institutions are found",
      result: institutions,
    });
  } catch (err) {
    next(err);
  }
};


// @desc  get single Institution buy id
// @route Get /api/v1/institution/:id
// @access admin

const getInstitution = async (req, res, next) => {
  try {
    const { id } = req.params;
    console.log({id})
    const student = await Institution.findOne(
      {
        _id: id,
      }
    );
    

    res.status(200).json({
      success: true,
      message: "Institution has been found",
      result: student
    });
  } catch (err) {
    next(err);
  }
};
// @desc  update Institution 
// @route PUT /api/v1/Institution/id
// @access admin

const updateInstitution = async (req, res, next) => {
  try {
    const { id } = req.params;

    console.log(id);
    console.log(req.body)
    const updatedInstitution = await Institution.updateOne(
      {
        _id: id,
      },
      {
        ...req.body,
      }
    );

    res.status(200).json({
      success: true,
      message: "Institution has been updated",
    });
  } catch (err) {
    next(err);
  }
};


// @desc delete Institution
// @route POST /api/v1/institutions/:id
// @access super admin
const deleteInstitution=async(req,res,next)=>{
  try{
     const {id}=req.params
     const data= await Institution.deleteOne({_id:id})

     res.status(200).json({
      success: true,
      message: "Institution is deleted",
      result: data,
    });
  }catch(err){
    next(err)
  }
}

module.exports = {
  registerInstitution,
  getAllInstitution,
  getInstitution,
  updateInstitution,
  deleteInstitution
};
