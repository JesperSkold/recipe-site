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
const express_1 = __importDefault(require("express"));
const recipe_1 = require("../db/recipe");
const router = express_1.default.Router();
router.get("/", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (req.query.search) {
            const searchQuery = req.query.search;
            const recipes = yield (0, recipe_1.getRecipesByQuery)(searchQuery);
            res.status(200).json(recipes);
        }
        else {
            const recipes = yield (0, recipe_1.getRecipes)();
            res.status(200).json(recipes);
        }
    }
    catch (err) {
        next(err);
    }
}));
router.get("/:recipeId/comments", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.recipeId;
        const comments = yield (0, recipe_1.getCommentsById)(id);
        res.status(200).json(comments[0].comments);
    }
    catch (err) {
        next(err);
    }
}));
router.get("/:recipeId", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.recipeId;
        const recipes = yield (0, recipe_1.getRecipesById)(id);
        if (!recipes.length) {
            const err = new Error(`Recipe with id ${id} not found`);
            err.status = 404;
            throw err;
        }
        res.status(200).json(recipes);
    }
    catch (err) {
        next(err);
    }
}));
router.post("/:recipeId/comments", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.recipeId;
        const updatedRecipe = yield (0, recipe_1.postRecipeComment)(id, req.body);
        res.status(200).json(updatedRecipe);
    }
    catch (err) {
        next(err);
    }
}));
router.post("/:recipeId/:rating", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.recipeId;
        const rating = Number(req.params.rating);
        if (rating !== 1 && rating !== 2 && rating !== 3 && rating !== 4 && rating !== 5) {
            const err = new Error(`Rating must be 1-5. Not ${rating}`);
            throw err;
        }
        const updatedRecipe = yield (0, recipe_1.postRecipeRating)(id, rating);
        res.status(200).json(updatedRecipe);
    }
    catch (err) {
        next(err);
    }
}));
exports.default = router;
