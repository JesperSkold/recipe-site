export interface Recipe {
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
  name: string
  comment: string
  createdAt: Date
}

export interface Ingredient {
  ingredient: string
  amount: string
  unit: string
}
