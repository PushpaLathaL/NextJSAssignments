import React from "react";
import Image from "next/image";
import style from "../../styles/Product.module.css";

//Server side rendering dynamic routing

export const getServerSideProps = async (context) => {
  const id = context.params.id;
  console.log("id" - id);
  const response = await fetch("https://fakestoreapi.com/products/" + id);
  const data = await response.json(); //To convert stringify json to parsed json
  return {
    props: { productData: data },
  };
};

const ProductId = ({ productData }) => {
  return (
    <div className="row">
      <div class="d-flex justify-content-center align-items-center vh-100">
        <div className="col-sm-6">
          <Image
            src={productData.image}
            alt={productData.title}
            width={500}
            height={500}
          ></Image>
        </div>
        <div className="col-sm-6">
          <h3>Products : {productData.title} </h3>
          <p className={style.product_detail_rating}>
            Ratings: {productData.rate}{" "}
            <i className="fa fa-star text-success"></i>
          </p>
          <p className={style.product_detail_desc}>{productData.description}</p>
          <p className={style.product_detail_price}>
            {"Rs." + productData.price}
            <span>(inclusive of all taxes)</span>
          </p>
          <h5>
            Rating : {productData.rating.rate}, Count :{" "}
            {productData.rating.count}
          </h5>
          <p>
            <strong>Price:</strong> ${productData.price}
          </p>
          <p>
            <strong>Category:</strong> {productData.category}
          </p>
          <p>
            <strong>Descriptions:</strong> {productData.description}
          </p>
          <button type="button" className={style.add_to_cart}>
            Add to Bag
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductId;
