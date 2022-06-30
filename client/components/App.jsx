import React from 'react'

import LoadRecipes from './RecipeList'
function App() {
  return (
    <>
      <header className="header">
        <h1>Recipes</h1>
      </header>
      <LoadRecipes />
      <section className="main">{/* add your code here */}</section>
    </>
  )
}

export default App
