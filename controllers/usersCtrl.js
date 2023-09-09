import User from '../model/User.js';
import asyncHandler from 'express-async-handler';
import bcrypt from 'bcryptjs';
import generateToken from '../utils/generateToken.js';
import { getTokenFromHeader } from '../utils/getTokenFromHeader.js';
import { verifyToken } from '../utils/verifyToken.js';

// @desc Register user
// @route POST /api/v1/users/register
// @access Private/Admin

export const registerUserCtrl = asyncHandler(async (req, res) => {
  const {fullname, email, password} = req.body;
  // Check user exist
  const userExists = await User.findOne({ email })
  if(userExists) {
    // throw err
    throw new Error('User already exists')
  };

  // hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt)

  // create the user
  const user = await User.create({
    fullname, 
    email, 
    password: hashedPassword
  });
  res.status(201).json({
    status: 'succes',
    message: 'User registered succesfully.',
    data: user
  })
});

// @desc Login user
// @route POST /api/v1/users/login
// @access Public 

export const loginUserCtrl = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // Find user in DB by email only
  const userFound = await User.findOne({
    email,
  });

  if(userFound && await bcrypt.compare(password, userFound?.password)) {
    res.json({
      status: 'success',
      message: 'User logged in succesfully',
      userFound,
      token: generateToken(userFound?._id)
    });
  }else {
    throw new Error('Invalid login credentials')
  }
});

// @desc Get user profile
// @route GET /api/v1/users/profile
// @access Private
export const getUserProfileCtrl = asyncHandler(async (req, res) => {
  const token = getTokenFromHeader(req)
  // verify token 
  const verified = verifyToken(token);
  res.json({
    msg: 'welcome to profile page'
  });
}); 

// @desc Update user shipping address
// @route PUT /api/v1/users/update/shipping
// @access Private
export const updateShippingAddressCtrl = asyncHandler(async (req, res) => {
  const {
    firstName,
    lastName,
    address,
    city,
    postalCode,
    province,
    phone,
    country,
  } = req.body;
  const user = await User.findByIdAndUpdate(
    req.userAuthId,
    {
      shippingAddress: {
        firstName,
        lastName,
        address,
        city,
        postalCode,
        province,
        phone,
        country,
      },
      hasShippingAddress: true,
    },
    {
      new: true,
    }
  );
  //send response
  res.json({
    status: "success",
    message: "User shipping address updated successfully",
    user,
  });
});