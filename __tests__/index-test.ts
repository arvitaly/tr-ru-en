import translit from "./..";
it("translit", () => {
    expect(translit("Козырёв")).toBe("Kozyrev");
});
