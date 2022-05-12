import React, { useEffect, useState } from 'react'
import { getCategoryCount } from "../../api/getCategory";

interface Props {
  category:string
}

const CategoryAmount = ({category}:Props) => {
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