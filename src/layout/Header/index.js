import React from 'react';
import './style.css'
import logo from './logo.png'

const Header = () => {
    return (

    <nav>
        <img src={logo} style={{height: "60px"}}></img>
       GitHub Search
 

       {/* <form>
      <input type="text" placeholder="Search.." name="search">
      <button type="submit">Submit</button>
      </form> */}
    </nav>
       
    
    )
    
}

export default Header;
