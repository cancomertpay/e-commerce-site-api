import User from '../model/User.js';

// @desc Register user
// @route POST /api/v1/users/register
// @access Private/Admin

export const registerUserCtrl = async (req, res) => {
  const {fullname, email, password} = req.body;
  // Check user exist
  const userExists = await User.findOne({ email })
  if(userExists) {
    // throw err
    res.json({
      msg: 'User already exists.'
    })
  }
  // hash password
  // create the user
  const user = await User.create({
    fullname, email, password
  });
  res.status(201).json({
    status: 'succes',
    message: 'User registered succesfully.',
    data: user
  })
};