const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
export const data = await res.json();

// fetch("https://jsonplaceholder.typicode.com/posts/1")
//   .then((res) => res.json())
//   .then((data) => console.log(data));
