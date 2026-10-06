import { Star } from "lucide-react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router";

export default function SingleProduct() {
  const { id } = useParams();
  const [prodotto, setProdotto] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchSingleProduct() {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        console.log(response);

        if (!response.ok) {
          console.log(response);
          navigate("/404");
        }
        const data = await response.json();
        setProdotto(data);
      } catch {
        navigate("/*");
        console.log("Errore di rete");
      }
    }
    fetchSingleProduct();
  }, [id, navigate]);

  //   if (!prodotto) {
  //     return <p>Rendering</p>;
  //   }

  return (
    <section>
      {prodotto !== null && (
        <>
          <div className=" d-flex   gap-5 justify-content-between">
            {/*Item Card */}
            <div className="card h-75 w-75">
              <h3>{prodotto.title}</h3>
              <a
                href=""
                className="text-decoration-none">
                Visita lo store di {prodotto.brand}
              </a>
              <div className="d-flex">
                <img
                  className="h-50 w-50"
                  src={prodotto.thumbnail}
                  alt=""
                />
                <div className="m-3">
                  <p>
                    <strong>Rating: </strong>
                    {prodotto.rating} / 5{" "}
                    <Star
                      size={15}
                      className="mb-1"
                    />
                  </p>
                  <p>
                    <strong>Categories: </strong>
                    {prodotto.tags.join(" , ")}
                  </p>
                  <div className="d-flex  justify-content-between">
                    <p>
                      <strong>Dim: </strong>
                      {prodotto.dimensions.width}x{prodotto.dimensions.height}x{" "}
                      {prodotto.dimensions.depth}
                    </p>
                  </div>
                </div>
              </div>
              <p>{prodotto.description}</p>
            </div>

            {/* Right-Card */}
            <div className="card text-center ">
              <h4 className="mt-3">{prodotto.price} $</h4>
              <span className="text-decoration-line-through">
                {(
                  prodotto.price /
                  (1 - prodotto.discountPercentage / 100)
                ).toFixed(2)}
                $
              </span>
              <hr />
              <p className="">
                <strong>Avaiable: </strong>
                {prodotto.stock}{" "}
              </p>
              <div className="d-flex flex-column">
                <h5>Shipping time</h5>
                <p>{prodotto.shippingInformation}</p>
              </div>
              <p>{prodotto.warrantyInformation}</p>
              <hr />

              <div className="text-center">
                <button className="btn btn-warning w-75 mb-1">
                  <span>Aggiungi al carrello</span>
                </button>
                <button className="btn btn-danger w-75">
                  <span>Acquista Ora</span>
                </button>
              </div>
            </div>
          </div>
          <div className="mt-4 ">
            {prodotto.reviews.map((recensione, index) => (
              <div
                key={index}
                className="card p-2">
                <div className="d-flex justify-content-between">
                  <h4>{recensione.reviewerName}</h4>
                  <h4>
                    {" "}
                    {recensione.rating} / 5 <Star className="mb-1 " />
                  </h4>
                </div>

                <span>{recensione.reviewerEmail}</span>
                <br />

                <p>"{recensione.comment}"</p>

                <span className="text-end fs-6">
                  {recensione.date.slice(0, 10)}
                </span>
              </div>
            ))}
          </div>
        </>
      )}
    </section>
  );
}
