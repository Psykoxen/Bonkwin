import { json } from "stream/consumers";
import "./create.css";
import React, { useEffect, useState } from "react";

function Create() {
  const [data, setData] = useState(null);
  function handleSubmit(event: React.FormEvent) {
    if (sessionStorage.getItem("userid") != null) {
      event.preventDefault();
      const target = event.target as typeof event.target & {
        title: { value: string };
        description: { value: string };
        price: { value: number };
      };
      const title = target.title.value;
      const description = target.description.value;
      const price = target.price.value.valueOf();
      const userid = sessionStorage.getItem("userid")?.valueOf();
      fetch(`http://localhost:8080/api/ad/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title,
          description: description,
          price: price,
          userId: userid,
        }),
      }).catch((error) => console.log(error));
      window.location.href = "/ad";
    }
  }
  return (
    <div className="form-page">
      <h1>Create your own ad</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" />
        <label htmlFor="description">Description</label>
        <input type="text" id="description" />
        <label htmlFor="price">Price</label>
        <input type="number" id="price" />
        <input type="submit" value="Register" />
      </form>
    </div>
  );
}

export default Create;
