import { Recipe, Ingredient, Comment } from "../interfaces/recipe"
import {Schema, model} from "mongoose"

const ingredientSchema = new Schema<Ingredient>({
  ingredient:{type: String, required: true},
  amount:{type: String, required: true},
  unit:{type: String, required: true}
})

const commentsSchema = new Schema<Comment>({
  name:{type: String, required: true},
  comment:{type: String, required: true},
  createdAt: {type: Date, default: Date.now}
})

const recipeSchema = new Schema<Recipe>({
  title:{ type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  timeInMins: { type: String, required: true },
  ratings: [{type: Number, required: true}],
  category: [{type: String, required: true}],
  ingredients: {type: [ingredientSchema], required: true},
  instructions: [{type: String, required:true}],
  comments: {type: [commentsSchema], required: true}
})


export default model<Recipe>("Recipe", recipeSchema)