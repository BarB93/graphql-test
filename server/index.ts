import express from 'express'
import cors from 'cors'
import { graphqlHTTP } from 'express-graphql'
import schema from './schema'

const users = [{ id: 1, username: 'Boris', age: 18 }]

const app = express()
app.use(cors())

const PORT = process.env.PORT || 5000

const createUser = (input) => {
  const id = Date.now()

  return {
    id, ...input
  }
}

const root = {
  getAllUsers: () => {
    return users
  },
  getUser: ({ id }: { id: number }) => {
    return users.find((user) => user.id === id)
  },
  createUser({input}) {

  }
}

app.use(
  '/graphql',
  graphqlHTTP({
    graphiql: true,
    schema,
    rootValue: root,
  }),
)

app.listen(PORT, () => {
  console.log(`Server has been started on ${PORT} port!!!`)
})
