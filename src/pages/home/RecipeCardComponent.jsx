import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, RecipeCard, RecipeHeader, RecipeImage } from "./HomeStyle";

const RecipeCardComponent = ({ item }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/details", { state: { item } });
  };
console.log({item})
  return (
    <RecipeCard>
      <RecipeHeader>{item.label}</RecipeHeader>

      <RecipeImage src={item.image} />

      <Button onClick={handleClick}>more view</Button>
    </RecipeCard>
  );
};

export default RecipeCardComponent;
