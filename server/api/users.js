const router = require('express').Router()
const { User } = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      attributes: ['id', 'firstName', 'lastName', 'email', 'createdAt']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})

//update user email
router.put('/email', async (req, res, next) => {
  const userId = req.user.id

  const email = req.body.email
  console.log('this is the email -------------', email)
  try {
    const user = await User.findOne({
      where: {
        id: userId
      }
    })
    const updated = await user.update({
      email
    })
    res.json(updated)
  } catch (err) {
    next(err)
  }
})

//update user name
router.put('/name', async (req, res, next) => {
  const userId = req.user.id

  const firstName = req.body.firstName
  const lastName = req.body.lastName
  console.log('this is the name -------------', firstName, lastName)
  try {
    const user = await User.findOne({
      where: {
        id: userId
      }
    })
    const updated = await user.update({
      firstName,
      lastName
    })
    res.json(updated)
  } catch (err) {
    next(err)
  }
})

//update user password
router.put('/password', async (req, res, next) => {
  const userId = req.user.id

  const password = req.body.password
  console.log('this is the pass -------------', password)
  try {
    const user = await User.findOne({
      where: {
        id: userId
      }
    })
    const updated = await user.update({
      password
    })
    res.json(updated)
  } catch (err) {
    next(err)
  }
})
