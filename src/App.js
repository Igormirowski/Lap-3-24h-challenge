import { Header, Footer } from './layout'
import { Home } from './pages'
import { Routes, Route } from 'react-router-dom'

import './App.css'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
