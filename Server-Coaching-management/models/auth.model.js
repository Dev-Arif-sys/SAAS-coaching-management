const { Schema, default: mongoose } = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "User name is required"],
  },
  institution_id: {
    type: Schema.Types.ObjectId,
    ref: "Institution",
  },
  number: {
    type: String,
    unique: true,
    min: [11, "Phone number should be minimum 11 characters"],
    max: [11, "Phone number should not be more than 8 characters"],
    required: [true, "Email is required"],
  },
  password: {
    type: String,
    min: [8, "Password should be minimum 8 characters"],
    required: [true, "Password is required"],
  },
  role: {
    type: "string",
    default: "",
    required: [true, "Role is required"],
  },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

userSchema.methods.matchPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

userSchema.methods.getJwtToken = function (JWT_Secret, JWT_Expiration) {
  return jwt.sign(
    {
      user: {
        id: this._id,
        role: this.role,
      },
    },
    JWT_Secret,
    { expiresIn: JWT_Expiration }
  );
};

const User = mongoose.model("User", userSchema);

module.exports = User;
