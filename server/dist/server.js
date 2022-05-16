"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = require("mongoose");
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const recipe_1 = __importDefault(require("./routes/recipe"));
const category_1 = __importDefault(require("./routes/category"));
//import types to req and res?
dotenv_1.default.config({ path: path_1.default.resolve(__dirname, '../config/local.env') });
(0, mongoose_1.connect)(`${process.env.DB_URI}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).catch(err => console.log(err));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
const port = process.env.PORT || 3000;
app.use('/api/recipes', recipe_1.default);
app.use('/api/category', category_1.default);
if (process.env.NODE_ENV === "production") {
    app.use(express_1.default.static(path_1.default.join(__dirname, "../dist/build")));
    app.get("*", (req, res) => {
        res.sendFile(path_1.default.join(__dirname, "../dist/build/index.html"));
    });
}
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "index.html"))
// })
// app.use('/public', express.static(path.join(__dirname, 'public')));
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "public")))
// }
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "../../client/build/")))
//   app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "client", "build", "index.html"))
//   })
// }
app.use((err, _req, res, _next) => {
    console.error(err.message);
    res.status(err.status || 500);
    res.json({
        error: {
            status: err.status || 500,
            message: err.message
        }
    });
});
app.use((_req, res) => {
    res.status(404).send("404 not found");
});
app.listen(port, () => {
    console.log(`[server]: Server is running at https://localhost:${port}`);
});
