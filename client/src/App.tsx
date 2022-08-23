import { ChangeEvent, useEffect, useState } from 'react'
import { useMutation, useQuery } from '@apollo/client'
import styles from './App.module.css'
import { GET_ALL_USERS } from './query/users'
import { CREATE_USER } from './mutation/user'

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

function App() {
  const [username, setUsername] = useState('')
  const [age, setAge] = useState('')
  const [users, setUsers] = useState<User[]>([])

  const { data, loading, error } = useQuery(GET_ALL_USERS)
  const [createUser] = useMutation(CREATE_USER)

  useEffect(() => {
    if (!loading) {
      setUsers(data.getAllUsers)
    }
  }, [data])

  const addUser = () => {

  }

  if (loading) return <h1>loading...</h1>

  return (
    <div className={styles.container}>
      <h1>Title</h1>
      <form>
        <input
          value={username}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            setUsername(event.target.value)
          }}
          type='text'
          name='username'
        />
        <input
          value={age}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            setAge(event.target.value)
          }}
          type='number'
          name='age'
        />
        <div className={styles.btns}>
          <button>Создать</button>
          <button>Получить</button>
        </div>
      </form>
      <div>
        {users.map(user => (
          <div className={styles.user}>
            <ul>
              <li>
                <span>ID:</span>
                {user.id}
              </li>
              <li>
                <span>AGE:</span>
                {user.age}
              </li>
              <li>
                <span>USERNAME:</span>
                {user.username}
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
