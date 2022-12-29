const Student = require("../models/student.model");

// @desc Register Students
// @route POST /api/v1/students
// @access admin
const registerStudent = async (req, res, next) => {
  try {
    const student = await Student.create({
      ...req.body,
      institution_id: req.user.institution_id,
    });
    console.log(student);
    res.status(200).json({
      success: true,
      message: "Student has been registered successfully",
      result: student,
    });
  } catch (err) {
    next(err);
  }
};


// @desc  get all students
// @route POST /api/v1/students
// @access admin
const getStudents = async (req, res, next) => {
    try {
     
      res.status(200).json({
        success: true,
        message: "Student has been registered successfully",
      });
    } catch (err) {
      next(err);
    }
  };

module.exports = { registerStudent, getStudents };
