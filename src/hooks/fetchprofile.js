import { useEffect, useState } from "react";
import { storage } from "../firebase"
import {ref, getDownloadURL} from "firebase/storage"

function useFetch(path){
  let [profile, setProfile] = useState("")
  const imageRef = ref(storage, `profile-picture/${path}`)

  useEffect(() => {
    getDownloadURL(imageRef)
      .then((url) => {
        setProfile(url);
      })
      .catch((error) => {
        switch (error.code) {
          case "storage/object-not-found":
            break;
          case "storage/unauthorized":
            break;
          case "storage/canceled":
            break;
          case "storage/unknown":
            break;
          default:
        }
      });
  }, [])
  

  return(
    profile
  )
}

export default useFetch