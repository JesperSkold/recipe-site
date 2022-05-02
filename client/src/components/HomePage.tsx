import React from 'react'
import SearchBar from './SearchBar'
import SideBar from './SideBar'
import RecipeList from './RecipeList'

const HomePage = () => {
  return (
    <>
    <SearchBar></SearchBar>
    <SideBar></SideBar>
    <RecipeList></RecipeList>
    </>
  )
}

export default HomePage