"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.post("/", async (req, res) => {
    const data = req.body;
    console.log("-----------------------------");
    console.log(data);
    console.log("-----------------------------");
    return res.status(202).json({ data });
});
app.listen(3000);
//# sourceMappingURL=index.js.map