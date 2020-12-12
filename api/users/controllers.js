const { User } = require('../../db/models')
const bcrypt = require('bcrypt')

exports.signup = async (req, res, next) => {
  const { password } = req.body
  const saltRounds = 10
  try {
    const hashedPassword = await bcrypt.hash(password, saltRounds)
    req.body.password = hashedPassword
    const newUser = await User.create(req.body)
    res.status(201).json({ message: 'User created successfully', newUser })
  } catch (error) {
    res.json({ message: 'here is an error at controller.js', error })
  }
}
