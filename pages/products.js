import React from "react";
import Image from "next/image";
import style from "../styles/Product.module.css";
import Link from "next/link";

export const getStaticProps = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json(); //To convert stringify json to parsed json
  return {
    props: { productData: data },
  };
};

const Product = (props) => {
  const { productData } = props;
  return (
    <div className="row">
      <h1 className="text_nextjs">Categories Page</h1>
      {productData.map((item) => (
        // <div>{item.title}</div>
        <div className="col-3 mb-3">
          <div className="card">
            <div className="card-body">
              <img
                className="card-img-top mb-2"
                height="200"
                src={item.image}
                title="Product Image"
                alt="Product Image"
              />
              <h6>
                Rating: <span className="text-success">{item.rating.rate}</span>
              </h6>
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text">{item.category}</p>
              <strong>
                Price: <span className="text-danger">${item.price}</span>
              </strong>
              <div className="mt-2">
                <Link
                  href={`/products/${item.id}`}
                  className="btn btn-outline-dark"
                >
                  Product Detail
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
