import React from 'react'
import { Button, FoodInput, FormContainer, Select } from './HeaderStyle';

const Form = ({setQuery,mealType,setMeal,getData}) => {

    const handleSubmit = (e)=> {
        e.preventDefault();
        getData()};
  return (

    
    
        <FormContainer onSubmit={handleSubmit}>
            <FoodInput type="text" placeholder="search"
            onChange={(e)=>setQuery(e.target.value)}
            >

            </FoodInput>
            <Button type="submit">
                Search
            </Button>

            <Select onChange={(e)=>setMeal(e.target.value)} >


              {mealType.map((item,index)=> (
                  <option key={index} value={item.toLowerCase()} >{item}</option>
              )

              )}
            </Select>
        </FormContainer>
    
  )
}

export default Form;
