const techupPeople = [
  { name: "Alice", age: 17 },
  { name: "Bob", age: 22 },
  { name: "Charlie", age: 16 },
];

const techcoolPeople = [
  { name: "David", age: 25 },
  { name: "Eve", age: 19 },
];

// เริ่มเขียนโค้ดตรงนี้
let allPeople = [...techupPeople, ...techcoolPeople];

function findPeople(allPeople) {
  return allPeople.filter(allPeople => allPeople.age < 20) 
}

const result = findPeople(allPeople);
console.log(result);


 