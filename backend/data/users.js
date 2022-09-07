import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'arjun@gmail.com',
    password: bcrypt.hashSync('12345', 10),
    isAdmin: true,
  },
  
]

export default users
