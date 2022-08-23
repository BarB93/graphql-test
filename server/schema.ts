import { buildSchema } from 'graphql'

export type User = {
  id: number
  username: string
  age: number
  posts: Post[]
}

export type Post = {
  id: number
  title: string
  content: string
}

export type UserInput = {
  id?: number
  username: string
  age: number
  posts?: Post[]
}

export type PostInput = {
  id?: number
  title: string
  content: string
}

const schema = buildSchema(`
  type User {
    id: ID
    username: String
    age: Int
    posts: [Post]
  }
  type Post {
    id: ID
    title: String
    content: String
  }

  input UserInput {
    id: ID
    username: String!
    age: Int!
    posts: [PostInput]
  }

  input PostInput {
    id: ID
    title: String!
    content: String!
  }

  type Query {
    getAllUsers: [User] 
    getUser(id: ID): User 
  }

  type Mutation {
    createUser(input: UserInput): User
  }
`)

export default schema
