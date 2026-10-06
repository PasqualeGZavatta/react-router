import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router";

export default function Prodotti() {
  const [prodotti, setProdotti] = useState([]);

  useEffect(() => {
    async function fetchProdotti() {
      try {
        const response = await fetch("https://dummyjson.com/products");

        if (!response.ok) {
          throw new Error("error fetching");
        }

        const data = await response.json();
        setProdotti(data.products);
      } catch {
        console.log("error");
      }
    }
    fetchProdotti();
  }, []);

  return (
    <div>
      <h1>Prodotti</h1>
      <div className="row row-cols-3 g-4">
        {prodotti.map((item) => (
          <div
            key={item.id}
            className="col">
            <div className="card">
              <h3 className="text-center">{item.title}</h3>
              <img
                className=""
                src={item.thumbnail}
                alt=""
              />
              <h6 id="tags">{item.tags.join(" , ")}</h6>
              <div>
                <Link to={`/products/${item.id}`}>More info</Link>
                <span className="d-flex justify-content-end pe-2 pb-1">
                  {item.price}$
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
