import { Recipe, Ingredient } from "../interfaces/recipe"
import {Schema, model} from "mongoose"

const ingredientSchema = new Schema<Ingredient>({
  ingredient:{type: String, required: true},
  amount:{type: Number, required: true},
  unit:{type: String, required: true}
})

// const instructionSchema = new Schema<Instruction>({
//   instruction:{type: String, required: true},
//   prio:{type: Number, required: true}
// })

const recipeSchema = new Schema<Recipe>({
  title:{ type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  timeInMins: { type: String, required: true },
  ratings: [{type: Number, required: true}],
  category: [{type: String, required: true}],
  ingredients: {type: [ingredientSchema], required: true},
  instructions: [{type: String, required:true}]
  // instructions: {type: Instruction, required: true}
})


export default model<Recipe>("Recipe", recipeSchema)