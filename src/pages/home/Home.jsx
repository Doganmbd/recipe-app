import React,{useState} from 'react'
import Header from '../../components/header/Header'
import axios from "axios";

const APP_ID="0ce4dac0";
const APP_KEY ="96feea739d9b6d46cbdd5f528d9d8c05";

const Home = () => {


  const [query, setQuery] = useState("");
  const [meal, setMeal] = useState("breakfast")

  // query=yazdığımız sorgu kelimesi, meal=breakfast vs
  const URL = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`;

  const getData = async ()=> {
    const result =await axios(URL)
    console.log(result);
  }
  getData()
  return (
    <div>
      <Header/>
    </div>
  )
}

export default Home