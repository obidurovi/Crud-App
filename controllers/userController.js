const user = require('../models/users')

/**
 * @desc get all user
 * @name get
 * @access public
 */

const allUser = async (req, res) => {
    const user_data = await user.find();
    res.render('users', {
    user_data,
    });
};

/**
 * @desc Creat  user
 * @name post
 * @access public
 */
 const userCreate = async (req, res) => {
    const { name, age, email, gender, phone, location, image } = req.body;
  
    const postData = {
      name: name,
      age: age,
      email: email,
      phone: phone,
      location: location,
      gender: gender,
      image: req.file ? req.file.filename : 'av.jpg'
    };
  
    await user.create(postData);
    res.redirect('/');
};

/**
 * @desc delete  user
 * @name delete
 * @access public
 */
const deleteUser = async (req, res) => {
  const id = req.params.id;

  const data = await user.deleteOne({ _id: id });
  res.redirect('/');
};

/**
 * @desc view  user
 * @name get
 * @access public
 */
  const viewData = async (req, res) => {
    const id = req.params.id;
    const singledata = await user.findOne({ _id: id });
  res.render('singleUser', {
    singledata,
  });
}

// User Update
const updateUser = async (req, res) => {
  const id = req.params.id;
  const editData = await user.findOne({ _id: id });
  res.render('updateUser', {
    editData,
  });
};

/**
 * @desc edit  user
 * @name put
 * @access public
 */
const updateNewData = async (req, res) => {
  const id = req.params.id;

  const { name, age, email, gender, image, phone, location } =
    req.body;
  const updateUserData = {
    name: name,
    age: age,
    email: email,
    phone: phone,
    location: location,
    gender: gender,
    image: req.file ? req.file.filename : 'av.jpg'
  };
  await user.updateOne({ _id: id }, updateUserData);

  res.redirect('/');
};
// Exports
module.exports = {
    allUser,
    userCreate,
    deleteUser,
    viewData,
    updateUser,
    updateNewData
}