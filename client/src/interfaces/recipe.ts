import { ReactNode } from "react"

export interface Recipe {
  _id: string
  title: string
  description: string
  imageUrl: string
  timeInMins: string
  ratings: number[]
  category: string[]
  ingredients: Ingredient[]
  instructions: string[]
  comments: Comment[]
}

export interface Comment {
  _id: string
  name: string
  comment: string
  createdAt: string
}

export interface Ingredient {
  ingredient: string
  amount: number
  unit: string
}