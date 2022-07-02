import { useEffect, useState } from "react";
import axios from "axios";

export const useFetch = (url) => {
  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState(false);

  const getdata = () => {
    axios
      .get("https://employee-632dc-default-rtdb.firebaseio.com/posts.json")
      .then((res) => {
        setdata(res.data);
        setloading(false);
      })
      .catch((err) => {
        setloading(false)
        seterror(true)
      });
  };

  useEffect(() => {
    getdata(url);
  }, [url]);

  return {data,loading,error};
};
