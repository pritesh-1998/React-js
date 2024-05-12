/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Heading from './components/Heading'
import Todo from './components/Todo'
import Clock from './components/bharatClock'
import Calc from './components/calculator/calc'
import Healthyfood from './components/healthyfoods'
import List from './components/llistingComponent'
import Container from './components/Container'

function App() {
  // const [count, setCount] = useState(0)
  let bikes = ["Raider", "Hayabusa", "Splendor", "Hero Honda"];
  return (
    <>
      {/* <Container>
        <Clock />
        <Healthyfood />
      </Container> */}
      <Container>
        <Todo />
      </Container>
      {/* <Container>
        <Calc />
      </Container>
      <Container>
        <List Listitems={bikes} />
        <Heading heading={"Good Morning"} />
      </Container> */}
    </>
  )
}

export default App
