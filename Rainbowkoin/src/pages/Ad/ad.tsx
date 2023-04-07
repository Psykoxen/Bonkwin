import "./ad.css";
import { useState, useEffect } from "react";

function Ad() {
  const [data, setData] = useState<
    {
      id: number;
      title: string;
      description: string;
      price: number;
      userId: number;
    }[]
  >([]);

  useEffect(() => {
    fetch(`http://localhost:8080/api/ad`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h1>All ADs</h1>
      <div className="ads">
        {data !== null &&
          data.map((ad: any) => (
            <div className="ad-item" key={ad.id}>
              <h2>{ad.title}</h2>
              <p>{ad.description}</p>
              <p>{ad.price} €</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Ad;
