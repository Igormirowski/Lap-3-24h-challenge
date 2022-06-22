

import { Header, Footer } from './layout';
import { Home } from './pages';
import { Routes, Route } from 'react-router-dom';

import './App.css';


function App() {
  const myData = getData('buscaroli', 'userDetails')
  console.log(myData)
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
