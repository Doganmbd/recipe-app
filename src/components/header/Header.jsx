import React from 'react'
import Form from './Form';
import {  HeaderContainer, MainHeader } from './HeaderStyle'

const Header = ({setQuery,mealType,setMeal,getData}) => {

    

    
  return (
    <HeaderContainer>
        <MainHeader>
            MBD's Food App
        </MainHeader>
        <Form setQuery={setQuery} mealType={mealType} setMeal={setMeal} getData={getData}/>
    </HeaderContainer>
  )
}

export default Header