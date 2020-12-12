const { User } = require('../../db/models')

exports.signup = async (req, res, next) => {
  try {
    const newUser = await User.create(req.body)
    res.json(newUser)
  } catch (error) {
    console.log('here is an error at controller.js', error)
  }
}
