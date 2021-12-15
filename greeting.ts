export default function greeting(name = "stranger") {
  const coachNames = ["Lara", "Jerry", "Marwin", "Philipp"];
  if (coachNames.includes(name)) {
    return "Hello, coach!";
  }
  return `Hello, ${name}!`;
}