"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ingredientSchema = new mongoose_1.Schema({
    ingredient: { type: String, required: true },
    amount: { type: String, required: true },
    unit: { type: String, required: true }
});
const commentsSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    comment: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});
const recipeSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String, required: true },
    timeInMins: { type: String, required: true },
    ratings: [{ type: Number, required: true }],
    category: [{ type: String, required: true }],
    ingredients: { type: [ingredientSchema], required: true },
    instructions: [{ type: String, required: true }],
    comments: { type: [commentsSchema], required: true }
});
exports.default = (0, mongoose_1.model)("Recipe", recipeSchema);
