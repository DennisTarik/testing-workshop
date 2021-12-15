import greeting from "./greeting";

describe("greeting", () => {
  it('should return "Hello, #name! for a #name"', () => {
    const result = greeting("Dennis");
    expect(result).toBe("Hello, Dennis!");
  });
  it('should return "Hello, stranger!" if called without arguments', () => {
    const result = greeting();
    expect(result).toBe("Hello, stranger!");
  });
  it('should return "Hello, coach!" if called with a coach name', () => {
    expect(greeting("Lara")).toBe("Hello, coach!");
    expect(greeting("Jerry")).toBe("Hello, coach!");
    expect(greeting("Marwin")).toBe("Hello, coach!");
    expect(greeting("Philipp")).toBe("Hello, coach!");
  });
});