import express from 'express'
import cors from 'cors'
import { graphqlHTTP } from 'express-graphql'
import schema, { UserInput, User } from './schema'

let usersID = 0
let postsID = 0

const users: User[] = [
  {
    id: ++usersID,
    username: 'Boris',
    age: 18,
    posts: [
      { id: ++postsID, title: `Some title ${postsID}`, content: `Some content ${postsID}` },
      { id: ++postsID, title: `Some title ${postsID}`, content: `Some content ${postsID}` },
    ],
  },
  { id: ++usersID, username: 'Alex', age: 22, posts: [{ id: ++postsID, title: `Some title ${postsID}`, content: `Some content ${postsID}` }] },
  { id: ++usersID, username: 'Andrey', age: 33, posts: [{ id: ++postsID, title: `Some title ${postsID}`, content: `Some content ${postsID}` }] },
]

const app = express()
app.use(cors())

const PORT = process.env.PORT || 5000

const createUser = (input: UserInput): User => {
  const id = Date.now()

  return {
    id,
    posts: [],
    ...input,
  }
}

const root = {
  getAllUsers: () => {
    return users
  },
  getUser: ({ id }: { id: number }) => {
    return users.find(user => user.id === id)
  },
  createUser({ input }: { input: UserInput }): User {
    const user = createUser(input)
    users.push(user)
    return user
  },
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
