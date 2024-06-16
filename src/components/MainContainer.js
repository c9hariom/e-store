import React from 'react'
import Sidebar from './Sidebar'
import Product from './Product'

const MainContainer = () => {
  return (
    <div className="container">
    <div className='main-container'>
     <Sidebar></Sidebar>
      <Product></Product>
    </div>
    </div>
  )
}

export default MainContainer
