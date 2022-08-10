import React from 'react';
import './App.css';
import { links } from './links'
import FaceBook from './icons/icons8-facebook-50.png'





function App() {
  return (

    <div className='Whole'>
      <div className='TopBar'>
        <a href="#contact">
        <button className='TopButton' href="#contact" >Contact</button></a>
        <button className='Logo'>PhotoOPS</button>
        <a href="#contact">
        <button className='TopButton' onClick="document.getElementById('contact').scrollIntoView();">Social</button></a>

      </div>
      
      <div className='PozeFlex'>
        {
          links.map( link =>{ 
          console.log(link)
          return <img className='poza' src={link} alt=''/>  
        })
        
       
        }
      </div>
      <div className='BottomBar'>
        <div className='Contact-Stanga'>
         
          <img className='Icoane' src={require("./icons/icons8-mail-75.png")}/>
          <p className='Scris'>julieniancu@gmail.com</p>
         
          <img className='Icoane' src={require("./icons/icons8-phone-50.png")}/>
          <p className='Scris' >0730667009</p>
          
        </div>
        <div id='contact' className='Contact-Dreapta'>
          <a className='Icoane' href='https://www.instagram.com/julieniancu/' target="_blank"><img  src={require("./icons/icons8-instagram-50.png")}/></a>
          <a className='Icoane' href='https://www.facebook.com/julien.iancu' target="_blank"><img src={require("./icons/icons8-facebook-50.png")}/></a>
        </div>
      </div>

    </div>


  );
}
export default App
