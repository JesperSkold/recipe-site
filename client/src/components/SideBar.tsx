import React, {useState, useEffect} from 'react'
import { getCategories } from '../api/getCategory'
import { Categories } from "../interfaces/category"
const SideBar = () => {
  const [category, setCategory] = useState<Categories[]>([])
 
  useEffect(() => {
    const getAllCategories = async () => {
      const categories = await getCategories()
      setCategory(categories)

    }
    getAllCategories()
  }, [])
  return (
    <ul>{category.map(category => <li key={category._id}>{category.category}</li>)}</ul>
  )
}

export default SideBar