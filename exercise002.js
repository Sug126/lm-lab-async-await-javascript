import fetch from "node-fetch";

const jsonTypicode = "https://jsonplaceholder.typicode.com/todos/1";

const fetchData = (apiEndPoint) => {
  fetch(apiEndPoint)
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) => console.log(error));
};

fetchData(jsonTypicode);


const fetchDataNew = async(apiEndPoint) =>{
try{
  const fetchResponse = await fetch(apiEndPoint)
  const jsonResponse = await fetchResponse.json()
  console.log(`Yay! async successful with response`)
  console.log(jsonResponse)
}catch(error){
  console.log(`Booo! async failed!!`)
  console.log(error)
}
}


fetchData(jsonTypicode)
fetchDataNew(jsonTypicode)