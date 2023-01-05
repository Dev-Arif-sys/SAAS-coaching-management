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
    const { std_class, std_batch, std_batch_year, search } = req.query;
    const { institution_id } = req.user;
    let query = {};

    const keyword = req.query.search
      ? {
          institution_id,
          std_batch,
          std_batch_year,
          std_class,
          $or: [
            { std_name: { $regex: req.query.search, $options: "i" } },
            { std_phone: { $regex: req.query.search, $options: "i" } },
          ],
        }
      : { institution_id, std_batch, std_batch_year, std_class };

    console.log(keyword);
    const students = await Student.find({
      ...keyword,
    });

    res.status(200).json({
      success: true,
      message: "Student has been found",
      result: students,
    });
  } catch (err) {
    next(err);
  }
};


// @desc  get single student buy id
// @route Get /api/v1/students/:id
// @access admin

const getStudent = async (req, res, next) => {
  try {
    const { id } = req.params;
    console.log({id})
    const student = await Student.findOne(
      {
        _id: id,
      }
    );
    

    res.status(200).json({
      success: true,
      message: "Student has been found",
      result: student
    });
  } catch (err) {
    next(err);
  }
};



// @desc  update students students
// @route PUT /api/v1/students/id
// @access admin

const updateStudent = async (req, res, next) => {
  try {
    const { id } = req.params;

    console.log(id);
    console.log(req.body)
    const updatedStudent = await Student.updateOne(
      {
        _id: id,
      },
      {
        ...req.body,
      }
    );

    res.status(200).json({
      success: true,
      message: "Student has been updated",
    });
  } catch (err) {
    next(err);
  }
};

// @desc  get  student batch based on class and year
// @route POST /api/v1/students/batch
// @access admin

const getStudentsBatch = async (req, res, next) => {
  try {
    const { std_class, std_batch_year } = req.query;
    const { institution_id } = req.user;
     
    console.log({
      std_class, std_batch_year,  institution_id
    })
    const batches = await Student.aggregate([
      {
        $match: { std_class, std_batch_year, institution_id },
      },
      {
        $group: {
          _id: "$std_batch",
          batch: { $first: "$std_batch" },
        },
      },
    ]);

    res.status(200).json({
      success: true,
      message: "Batches has been found",
      result: batches,
    });
  } catch (err) {
    next(err);
  }
};


// @desc  update students students
// @route PUT /api/v1/students/id
// @access admin

const deleteStudent = async (req, res, next) => {
  try {
    const { id } = req.params;

    console.log(id);
    console.log(req.body)
    const deletedStudent = await Student.deleteOne(
      {
        _id: id,
      }
    );

    res.status(200).json({
      success: true,
      message: "Student has been Deleted",
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  registerStudent,
  getStudents,
  getStudent,
  getStudentsBatch,
  updateStudent,
  deleteStudent
};
