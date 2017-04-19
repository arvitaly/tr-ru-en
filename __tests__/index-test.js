"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("./..");
it("translit", () => {
    expect(__1.default("Козырёв")).toBe("Kozyrev");
});
