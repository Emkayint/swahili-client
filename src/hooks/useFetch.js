import  { useEffect, useState } from "react";

const useFetch = (path) => {

  const [response, setResponse] = useState([])

   useEffect(() => {
    fetch(`${path}`)
    .then(res => res.json())
    .then(setResponse)
   }, [path])

   return response
}

export default useFetch