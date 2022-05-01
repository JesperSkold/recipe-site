import { Categories } from "../interfaces/category"
import {Schema, model} from "mongoose"

const categorySchema = new Schema<Categories>({
  category: {type: String, required:true}
})

export default model<Categories>("Category", categorySchema)