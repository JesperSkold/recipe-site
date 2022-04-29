import { Recipe } from "../interfaces/recipe"
import {Schema, model} from "mongoose"
const recipeSchema = new Schema<Recipe>({

})

export default model<Recipe>("Recipe", recipeSchema)