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
exports.getCategoryCount = exports.getRecipeByCategoryQuery = exports.getRecipeByCategoryName = exports.getCategories = void 0;
const recipe_1 = __importDefault(require("../models/recipe"));
const getCategories = () => __awaiter(void 0, void 0, void 0, function* () {
    const categories = yield recipe_1.default.find().distinct("category");
    return categories;
});
exports.getCategories = getCategories;
const getRecipeByCategoryName = (categoryName) => __awaiter(void 0, void 0, void 0, function* () {
    const recipes = yield recipe_1.default.find({ category: categoryName });
    return recipes;
});
exports.getRecipeByCategoryName = getRecipeByCategoryName;
const getRecipeByCategoryQuery = (searchQuery, categoryName) => __awaiter(void 0, void 0, void 0, function* () {
    const recipes = yield recipe_1.default.find({ category: categoryName, title: { $regex: `${searchQuery}`, $options: 'i' } });
    return recipes;
});
exports.getRecipeByCategoryQuery = getRecipeByCategoryQuery;
const getCategoryCount = (categoryName) => __awaiter(void 0, void 0, void 0, function* () {
    const categoryCount = yield recipe_1.default.find({ category: categoryName }, { category: true, "_id": false });
    return categoryCount;
});
exports.getCategoryCount = getCategoryCount;
//abstrahera ut till recipecategory directory?