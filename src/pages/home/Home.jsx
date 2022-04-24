import React,{useState} from 'react'
import Header from '../../components/header/Header'
import axios from "axios";
import { MainContainer, RecipeImage } from './HomeStyle';

const APP_ID="0ce4dac0";
const APP_KEY ="96feea739d9b6d46cbdd5f528d9d8c05";

const Home = () => {

  const mealType = ["breakfast", "lunch", "dinner", "dessert","snack","Teatime"];
  const [query, setQuery] = useState("");
  const [meal, setMeal] = useState(mealType[0].toLowerCase())
  const [food, setFood] = useState([]);

  // query=yazdığımız sorgu kelimesi, meal=breakfast vs
  const URL = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`;

  const getData = async ()=> {
    const result =await axios(URL)
    setFood(result.data.hits);
    console.log(result.data.hits);
    console.log(result.data.hits[0]);
    console.log(result.data.hits[0].recipe.image);
  }
  
  return (
    <div>
      <Header setQuery={setQuery} mealType={mealType} setMeal={setMeal} getData={getData} />

      {food ? (
        
        <MainContainer>
         {food.map((item,index)=> (
           <RecipeImage  alt="yok" />
         ))}
          

          
        </MainContainer>
        
      ):(
        alert("Please enter a food")
      )
    }

    </div>
  )
}

export default Home