import React, { useEffect, useState } from 'react'
import { getCategoryCount } from "../../api/getCategory";

const CategoryAmount = ({category}:any) => {
  const [amount, setAmount] = useState()
  useEffect(() => {
    const getCategoryCounts = async () => {
      const count = await getCategoryCount(category)
      setAmount(count)
    }
    getCategoryCounts()
  }, [])
  return (
    <span> ({amount})</span>
  )
}

export default CategoryAmount