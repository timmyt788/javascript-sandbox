// synchronous /blocking
// console.log("a");
// console.log("b");
// console.log("c");

// // nonblockingt commit
// console.log(1);

// setTimeout(() => {
//   console.log(2);
// }, 5000);
// console.log(3);

// ASYNCHRONOUS JS

// synchronous /blocking

const url = "https://jsonplaceholder.typicode.com/users";

// async

// PROMISES - fulfilled, rejected, pending
//.then method / .catch
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

//async/ await

const getUser = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
getUser();

// REQUEST METHOD

// GET - retrieve data, 
// POST - creating a data,
// PATCH - updating data, 
//DELETE - removing data ,
 // PUT - updating (total overhaul)


 

