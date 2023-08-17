import React from 'react'
import Navbar from './Navbar'
import Bar from './Bar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Overview from './Overview';
import Course from './Course';
import About from './About';
import Review from './Review';
import Footer from './Footer';
const App = () => {
  return (
    <>
  
    <Navbar/>
        <Bar/>
        <Overview/>
        <Course/>
        <About/>
        <Review/>
       <Footer/>
 
       
    </>
  )
}

export default App
