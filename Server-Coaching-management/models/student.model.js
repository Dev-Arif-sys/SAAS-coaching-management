const { Schema, default: mongoose } = require("mongoose");

const studentSchema = new Schema({
  std_name: {
    type: String,
    required: [true, "Student name is required"],
  },
  institution_id: {
    type: Schema.Types.ObjectId,
  },
  std_institution: {
    type: String,
    required: [true, "Student School/college is required"],
  },
  std_phone: {
    type: String,
    required: [true, "Student Phone No is required"],
    validate: {
      validator: function (v) {
        return /^(?:(?:\+|00)88|01)?\d{11}$/.test(v);
      },
      message: (props) => `${props.value} is not a valid phone number!`,
    },
  },
  payment_contract: {
    type: String,
  },
  std_class: {
    type: String,
    required: [true, "Student's Class is required"],
  },
  std_batch: {
    type: String,
    required: [true, "Student's Batch is required"],
  },
  std_batch_year: {
    type: String,
    required: [true, "Student's Batch Year is required"],
  },
  std_group: {
    type: String,
  },
  std_enrolled_date: {
    type: String,
    required: [true, "Student's Enroll Date is required"],
  },
  std_gender: {
    type: String,
    required: [true, "Student's Gender is required"],
  },
  std_dateOfBirth: {
    type: String,
  },
  std_village: {
    type: String,
  },
  std_post: {
    type: String,
  },
  std_thana: {
    type: String,
  },
  std_zilla: {
    type: String,
  },
  std_mother_name: {
    type: String,
  },
  std_mother_occupation: {
    type: String,
  },
  std_mother_phone: {
    type: String,
    validate: {
      validator: function (v) {
        if (v === "") {
          return true;
        }
        return /^(?:(?:\+|00)88|01)?\d{11}$/.test(v);
      },
      message: (props) => `${props.value} is not a valid phone number!`,
    },
  },
  std_father_name: {
    type: String,
  },
  std_father_occupation: {
    type: String,
  },
  std_father_phone: {
    type: String,
    validate: {
      validator: function (v) {
        if (v === "") {
          return true;
        }
        return /^(?:(?:\+|00)88|01)?\d{11}$/.test(v);
      },
      message: (props) => `${props.value} is not a valid phone number!`,
    },
  },
  std_bro1_name: {
    type: String,
  },
  std_bro1_class: {
    type: String,
  },
  std_bro1_institution: {
    type: String,
  },
  std_bro2_name: {
    type: String,
  },
  std_bro2_class: {
    type: String,
  },
  std_bro2_institution: {
    type: String,
  },
  std_bro3_name: {
    type: String,
  },
  std_bro3_class: {
    type: String,
  },
  std_bro3_institution: {
    type: String,
  },
},
{ timestamps: true }
);

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
