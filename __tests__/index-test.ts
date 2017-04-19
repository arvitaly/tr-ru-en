import translit from "./..";
it("translit", () => {
    expect(translit("Козырёв")).toBe("Kozyrev");
});
it("translit with other symbols", () => {
    expect(translit("Михаил_$")).toBe("Mikhail_$");
});
