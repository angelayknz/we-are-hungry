import React from 'react'

function Recipe({ strMeal, image }) {
  return (
    <div>
      {strMeal}
      <img src={image} alt="" />
    </div>
  )
}

export default Recipe
