export interface Recipe {
  title: string
  description: string
  imageUrl: string
  timeInMins: string
  ratings: number[]
  category: string[]
  ingredients: Ingredient[]
  instructions: string[]
}

export interface Ingredient {
  ingredient: string
  amount: number
  unit: string
}

// export interface Instruction {
//   instruction: string
//   prio: number
// }