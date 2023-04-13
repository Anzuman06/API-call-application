 // API for get requests
 const GETCallButton = document.getElementById('GET');
 async function getData(url = "https://jsonplaceholder.typicode.com/posts") {
 const response = await fetch(url,{method: "GET"});
 const jsonData = await response.json();
console.log(jsonData);
 }
 GETCallButton.onclick = () => getData();
