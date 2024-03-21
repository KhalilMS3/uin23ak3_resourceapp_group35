import React from 'react'
import Nav from './Nav'


export default function Layout({children, selectedCategory, onCategorySelect}) {
  
  return (
    <>
     
     <Nav selectedCategory={selectedCategory} onCategorySelect={onCategorySelect}/> 
     {children}
    </>
  )
}
