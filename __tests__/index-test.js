"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("./..");
it("translit", () => {
    expect(__1.default("Козырёв")).toBe("Kozyrev");
});
it("translit with other symbols", () => {
    expect(__1.default("Михаил_$")).toBe("Mikhail_$");
});
