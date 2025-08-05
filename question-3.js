// เริ่มเขียนโค้ดตรงนี้
async function getUsers() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    
    const longNames = users
      .map(user => user.name) 
      .filter(name => name.length > 17); 
    console.log(longNames);
  } catch (error) {
    console.error('Error', error);
  }
}

getUsers()