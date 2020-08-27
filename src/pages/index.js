import React from "react"
import Header from '../components/header'
import { Link } from "gatsby"

function Home() {
  return (
    <div>
      <Header />
      <Link to="/about/">About</Link>
      <h1>Hello there!</h1>
      <p>Nice to see you</p>
    </div>
  )
}

export default Home
