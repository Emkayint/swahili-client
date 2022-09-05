import  { useState } from 'react'
import "./Upload.css"
import { uuidv4 } from '@firebase/util'
import Nav from '../Nav'


function Upload() {
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState('');
  const [name, setName] = useState("")
  const [amount, setAmount] = useState('')
  const [link, setLink] = useState('');
  const imageId = uuidv4(); 




  // const uploadImg = () => {
  // const imageRef = ref(storage, `swahili-spot/${imageId}`);
  // if (imgUpload == null) return;
  //   uploadBytes(imageRef, imgUpload);
  // };


  const handleSubmit = (e) => {
    e.preventDefault()
    fetch("/products", {
      method: "POST",
      headers: {
        "Content-Type" : "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        name: name,
        description: description,
        price: price,
        image: `${imageId}`,
        amount: amount
      })
    })
    .then(r => {
      if(r.ok){
        r.json().then(r => alert("Success"))
      } else {
        alert("an error occured")
      }
    })
  }

  return (
    <div className="Upload">
      <Nav />
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          className="input"
          value={name}
          placeholder="Food Name"
          onChange={(e) => setName(e.target.value)}
        />
        <span className="custom-hr"></span>

        <input
          className="input"
          type="text"
          value={description}
          placeholder="Description"
          required
          onChange={(e) => setDescription(e.target.value)}
        />
        <span className="custom-hr"></span>
        <input
          className="input"
          type="link"
          value={link}
          placeholder="Image Url"
          required
          onChange={(e) => setLink(e.target.value)}
        />
        <span className="custom-hr"></span>

        <input
          type="number"
          className="input"
          value={price}
          required
          placeholder="Price"
          onChange={(e) => setPrice(e.target.value)}
        />
        <span className="custom-hr"></span>

        <input
          className="input"
          type="number"
          placeholder="Amount Available"
          id=""
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <span className="custom-hr"></span>
        <button type="submit" className="button-submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Upload