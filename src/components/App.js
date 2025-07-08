import { response } from "msw";
import { useEffect,useState } from "react";

// create your App component here

function App(){
const [image, setImage]=useState("")
const [isloaded,setIsloaded]=useState(false)

useEffect (()=>{
fetch("https://dog.ceo/api/breeds/image/random")
.then((res)=> res.json())
.then ((data)=> {
    setImage(data.message)
    setIsloaded(true);
}) 

},[])

if (!isloaded) return <p>Loading...</p>;
return <img alt="A Random Dog" src={image}></img>;
}

export default App;