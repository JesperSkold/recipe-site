export interface Recipe {
  title: string
  description: string
  imageUrl: string
  timeInMins: string
  ratings: string[]
  category: string[]
  ingredient: Ingredient
  instructions: Instruction
}

interface Ingredient {
  ingredient: string
  amount: number
  unit : string
}

interface Instruction {
  instruction: string
  prio: number
}