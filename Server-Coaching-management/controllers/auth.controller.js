const User = require("../models/auth.model");
const ErrorResponse = require("../utils/errorResponse");
const jwt = require("jsonwebtoken");
const { findOne } = require("../models/auth.model");
const Institution = require("../models/institution.model");

const sendToken = (user, statusCode, res) => {
  const accessToken = user.getJwtToken(process.env.ACCESS_TOKEN_SECRET, "15m");
  const refreshToken = user.getJwtToken(process.env.REFRESH_TOKEN_SECRET, "7d");
  console.log(accessToken);
  //create secure cookie with refresh token
  res.cookie("jwt", refreshToken, {
    httpOnly: true,
    secure: true,
    sameSite: "none",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  //sending access token to the client with username and email
  res.status(statusCode).json({
    user: {
      name: user?.name,
      role: user?.role,
      institution: user?.institution_id,
      _id: user._id,
      number: user?.number,
    },
    token: accessToken,
  });
};

// @desc Register user
// @route POST /api/v1/auth/register
// @access Public

const register = async (req, res, next) => {
  try {
    const user = await User.create({
      ...req.body,
    });
    console.log(user);
    if (req.body?.institution_id) {
      const updatedInstitution = await Institution.updateOne(
        { _id: req.body.institution_id },
        { $push: { users: user._id } }
      );
    }

    // calling send token to send data to client
    res.status(200).json({
      success: true,
      message: "User has been registered successfully",
      user: {
        name: user?.name,
        role: user?.role,
        institution: user?.institution_id,
        _id: user._id,
        number: user?.number,
      },
    });
  } catch (err) {
    next(err);
  }
};

// @desc login user
// @route POST /api/v1/auth/
// @access Public

const login = async (req, res, next) => {
  try {
    const { number, password } = req.body;

    // check user inputs
    if (!number || !password) {
      throw next(new ErrorResponse("All fields are required", 400));
      return;
    }

    const foundUser = await User.findOne({ number }).populate("institution_id");

    if (!foundUser?.number) {
      throw new ErrorResponse("Invalid number or password", 401);
      return;
    }

    //check match passwords
    const isMatch = await foundUser.matchPassword(password);

    console.log({ isMatch });
    if (!isMatch) {
      throw new ErrorResponse("Invalid number or password", 401);
      return;
    }

    sendToken(foundUser, 200, res);
  } catch (err) {
    next(err);
  }
};

// @desc provide token on refresh
// @route GET /api/v1/auth/refresh
// @access Public

const refresh = async (req, res, next) => {
  try {
    const cookies = req.cookies;

    if (!cookies?.jwt) return next(new ErrorResponse("Unauthorized", 401));
    const refreshToken = cookies.jwt;

    jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET,
      async (err, decoded) => {
        if (err) return next(new ErrorResponse("Forbidden", 403));

        const foundUser = await User.findOne({ _id: decoded?.user?.id });

        if (!foundUser?._id)
          return next(new ErrorResponse("Unauthorized", 401));

        const accessToken = foundUser.getJwtToken(
          process.env.ACCESS_TOKEN_SECRET,
          "15m"
        );

        res.status(200).json({
          user: {
            name: foundUser?.name,
            role: foundUser?.role,
            institution: foundUser?.institution_id,
            _id: foundUser._id,
            number: foundUser?.number,
          },
          token: accessToken,
        });
      }
    );
  } catch (err) {
    next(err);
  }
};

// @desc Logout
// @route POST api/v1/auth/logout
// @access Public - just to clear cookie if exists
const logout = (req, res) => {
  const cookies = req.cookies;
  if (!cookies?.jwt) return res.sendStatus(204); //No content
  res.clearCookie("jwt", { httpOnly: true, sameSite: "None", secure: true });
  res.json({ message: "Cookie cleared" });
};

// @desc retrieve super admins
// @route POST api/v1/auth/super-admin
// @access Super admins
const getAllSuperAdmin = async (req, res, next) => {
  try {
    const users = await User.find({ role: "super-admin" }).select("-password");

    res.status(200).json({
      success: true,
      message: "All institutions are found",
      result: users,
    });
  } catch (err) {
    next(err);
  }
};
const protectTest = (req, res, next) => {
  try {
    res.json(req.user);
  } catch (err) {
    next(new ErrorResponse("Protect Error", 404));
  }
};

module.exports = {
  login,
  register,
  refresh,
  logout,
  getAllSuperAdmin,
  protectTest,
};
