"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postRecipeComment = exports.postRecipeRating = exports.getCommentsById = exports.getRecipesById = exports.getRecipesByQuery = exports.getRecipes = void 0;
const recipe_1 = __importDefault(require("../models/recipe"));
const getRecipes = () => __awaiter(void 0, void 0, void 0, function* () {
    const recipes = yield recipe_1.default.find({});
    return recipes;
});
exports.getRecipes = getRecipes;
const getRecipesByQuery = (searchQuery) => __awaiter(void 0, void 0, void 0, function* () {
    const recipes = yield recipe_1.default.find({ title: { $regex: `${searchQuery}`, $options: "i" } });
    return recipes;
});
exports.getRecipesByQuery = getRecipesByQuery;
const getRecipesById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const recipes = yield recipe_1.default.find({ _id: id });
    return recipes;
});
exports.getRecipesById = getRecipesById;
const getCommentsById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const comments = yield recipe_1.default.find({ _id: id }, { comments: true, _id: false });
    return comments;
});
exports.getCommentsById = getCommentsById;
const postRecipeRating = (id, rating) => __awaiter(void 0, void 0, void 0, function* () {
    return yield recipe_1.default.findByIdAndUpdate(id, { $push: { ratings: [rating] } }, { new: true });
});
exports.postRecipeRating = postRecipeRating;
const postRecipeComment = (id, comment) => __awaiter(void 0, void 0, void 0, function* () {
    return yield recipe_1.default.findByIdAndUpdate(id, { $push: { comments: comment } }, { new: true });
});
exports.postRecipeComment = postRecipeComment;
