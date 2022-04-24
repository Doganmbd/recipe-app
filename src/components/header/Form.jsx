import React from 'react'
import { Button, FoodInput, FormContainer, Select } from './HeaderStyle';

const Form = () => {

    const handleSubmit = (e)=> {
        e.preventDefault();
        console.log("preventdefault")};
  return (

    
    
        <FormContainer onSubmit={handleSubmit}>
            <FoodInput type="text" placeholder="search">

            </FoodInput>
            <Button type="submit">
                Search
            </Button>

            <Select>

            </Select>
        </FormContainer>
    
  )
}

export default Form;
