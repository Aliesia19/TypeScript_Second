
let userName: string = "Alieska";
let age: number = 20;
let isAdmin: boolean = false;

function greet(name: string, admin: boolean): string {
  return `Користувач: ${name} | Адмін: ${admin}`;
}

console.log(greet(userName, isAdmin));
console.log(`Вік: ${age}`);
export {};