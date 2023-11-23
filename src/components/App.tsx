import { useState } from 'react'
import styles from './App.module.scss'
import { Link, Outlet } from 'react-router-dom'
import photo from '@/assets/photo.jpeg'

export const App = () => {
  const [count, setCount] = useState(0)

  const addCount = () => setCount((prev) => prev + 1)
  return (
    <div>
      <Link to='/about'>about</Link> /
      <Link to='/shop'>shop</Link>
      <img width={150} src={photo} alt="photo" />
      <Outlet />

      <h1>{count}</h1>
      <button onClick={addCount} className={styles.button}>
        add
      </button>
    </div>
  )
}
