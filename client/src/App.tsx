import { useState } from 'react'
import styles from './App.module.css'

function App() {
  const [count, setCount] = useState(1)

  const clickHandler = () => {
    setCount((prev) => prev + 1)
  }

  return (
    <div className={styles.parent}>
      <h1 className={styles.title}>Template vite, react, ts, tailwindcss</h1>
      <p className={styles.counter}>Counter: {count}</p>
      <button onClick={clickHandler} className={styles.button}>
        increase
      </button>
    </div>
  )
}

export default App
