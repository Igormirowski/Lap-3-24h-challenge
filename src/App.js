import './App.css'
import { Header, Footer } from './layout'
import { getData } from './api/github'

function App() {
  const myData = getData('buscaroli', 'userDetails')
  console.log(myData)
  return (
    <>
      <Header />
      <h1>Home</h1>
      <Footer />
    </>
  )
}

export default App
