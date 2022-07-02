import "./App.css";
import { useFetch } from "./Function/useFetch";
import { useTimeout } from "./Function/useTimeout";
import { useState } from "react";

function App() {
  const [url, seturl] = useState();
  // console.log(url);
  const { loading, data, error } = useFetch(url);
  

  const ready = useTimeout(5000);
  // console.log(loading, data, error);

  const handleOnClick = () => {
    seturl("https://employee-632dc-default-rtdb.firebaseio.com/posts.json");
    // console.log("Getdata", data);
  };

  
  return (
    <div className="App">
      {ready ? "Ready" : "Not Ready"}
      <br />
      <h3>Data</h3>
      {loading && "Loading.."}
      {error && "Error..!"}

      {data?.length>0 && data.map((item)=>{
        return (<p key={item.id}>{item.Address}</p>)
      })}
      <br/>
      <button onClick={handleOnClick}>Get Data</button>
    </div>
  );
}

export default App;
