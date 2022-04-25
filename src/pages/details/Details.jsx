import React from "react";
import { useLocation } from "react-router-dom";
import {
  DetailContainer,
  DetailPart,
  HeaderContainer,
  ImgContainer,
  IngredContainer,
  OtherPart,
} from "./DetailsStyle";
import dietSvg from "../../assets/diet.svg";

const Details = () => {
  // navigate ile recipecard dan gönderdiğim veriyi burada location ile alıyorum.

  const location = useLocation();
  const detailData = location.state.item;
  console.log(detailData);

  return (
    <DetailContainer>
      <HeaderContainer>
        <h1>{detailData.label}</h1>
        <img src={dietSvg} alt="" />
      </HeaderContainer>
      <DetailPart>
        <OtherPart>
          <h2>nutriens</h2>
          <p>
            {
              //! Object.values ile array içindeki value ları alırım .bize key değil value lazım olduğu için.daha sonra value ların keyleri ile aşağıya istediğim value ları yazdırırım.
            }
            {console.log(Object.values(detailData.totalNutrients))}

            {Object.values(detailData.totalNutrients).map(
              (value, index) =>
                (
                  <div key={index} >
                  <p >
                    {value.label} : {value.quantity} {value.unit}{" "}
                  </p>
                  </div>
                ) || <p>No Nutrients</p>
                
            )}
          </p>
        </OtherPart>

        <ImgContainer>
            <img src={detailData.image} alt="" />
        </ImgContainer>

        <IngredContainer>
            {detailData.ingredientLines.map((item,index)=> (
              <div>
              <p key={index}>{index + 1 } -) {item}</p>
              </div>
            ))}    
        </IngredContainer>
      </DetailPart>
    </DetailContainer>
  );
};

export default Details;
