const Institution = require("../models/institution.model");

// @desc Register Institution
// @route POST /api/v1/institution

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
      result: institution
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  registerInstitution,
};
