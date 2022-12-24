const { Schema, default: mongoose } = require("mongoose");

const institutionSchema = new Schema(
  {
    institution_name: {
      type: String,
      required: [true, "Institution name is required"],
    },
    institution_EIIN: {
      type: String,
    },
    institution_logo: {
      type: String,
    },
    contact_person_name: {
      type: String,
      required: [true, "Contact person name is required"],
    },
    contact_person_phone: {
      type: String,
      required: [true, "Contact person number is required"],
      min: [11, "Phone Number should be minimum 11 characters"],
      max: [11, "Phone Number should be maximum 11 characters"],
    },
    institution_head_name: {
      type: String,
      required: [true, "Contact person name is required"],
    },
    institution_head_phone: {
      type: String,
      required: [true, "Contact person number is required"],
      min: [11, "Phone Number should be minimum 11 characters"],
      max: [11, "Phone Number should be maximum 11 characters"],
    },
    institution_reg_date: {
      type: String,
    },
    institution_payment_policy: {
      type: String,
    },
    institution_district: {
      type: String,
    },
    institution_village: {
      type: String,
    },
    institution_thana: {
      type: String,
    },
    users: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  { timestamps: true }
);

const Institution = mongoose.model("Institution", institutionSchema);

module.exports = Institution;
