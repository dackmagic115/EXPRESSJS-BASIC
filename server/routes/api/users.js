const express = require('express')

const router = express.Router()

const users = [{
    id: 1,
    name: 'Hori miona',
    role: 'admin',
    email: 'HMN46@test.com',
    active: true,
  },
  {
    id: 2,
    name: 'Shiraishi mai',
    role: 'admin',
    email: 'SMN46@test.com',
    active: false,
  },
  {
    id: 3,
    name: 'Yamashita mizuki',
    role: 'customer',
    email: 'YMN46@test.com',
    active: true,
  },
  {
    id: 4,
    name: 'Oguri yui',
    role: 'customer',
    email: 'OYA48@test.com',
    active: false,
  },
  {
    id: 5,
    name: 'Miyawaki sakura',
    role: 'customer',
    email: 'MSIZ@test.com',
    active: true,
  },
  {
    id: 6,
    name: 'Yamaguchi mizuki',
    role: 'customer',
    email: 'YMA48@test.com',
    active: true,
  },
]


router.get('/', (req, res , next) => {
    setTimeout(()=>{
        res.json(users)
    }, 1000)
})

router.get('/:userId', (req , res , next )=>{
    const { userId } = req.params
    const userIndex = users.findIndex(user => user.id === parseInt(userId))
    if(userIndex !== -1){
        res.json(users[userIndex])
    } else{
        res.json(null)
    }
})

module.exports = router