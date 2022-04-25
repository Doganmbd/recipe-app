import React from 'react'
import { FormContainer, Header, LoginContainer, StyledButton, StyledForm, StyledImg, StyledInput } from './LoginStyle'
import mealSvg from "../../assets/meal.svg"

const Login = () => {


  const handleSubmit = (e)=> {
    e.preventDefault()
    window.location.href = "/home"

    // sayfa da login işlemlerini yapmadan başka sayfaya geçilmesin.
    
   
  }

  return (
    <LoginContainer>
      <FormContainer>
      <StyledImg src={mealSvg} />
        <Header>
          {"<M.B.D>"}Recipe
        </Header>
        <StyledForm onSubmit={handleSubmit} >
          <StyledInput type="text" placeholder="username" required />
          <StyledInput type="password" placeholder="password" required/>
          <StyledButton type="submit" >LOGIN</StyledButton>
        </StyledForm>

        
      </FormContainer>

    </LoginContainer>
  )
}

export default Login