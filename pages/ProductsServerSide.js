import React from "react";
import Image from "next/image";
import style from "../styles/Product.module.css";

export const getServerSideProps = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json(); //To convert stringify json to parsed json
  return {
    props: { productData: data },
  };
};

const ProductsServerSide = (props) => {
  const { productData } = props;
  return (
    <div className="row">
      <ul className={style.product_list}>
        {productData.map((item) => (
          <li
            className={[style.product_list_item, "col-sm-3"].join(" ")}
            key={item.id}
          >
            <div className={style.product_wrap}>
              <Image
                className={style.product_img}
                src={item.image}
                width={150}
                height={200}
                alt={item.title}
              ></Image>
              <p className={style.product_title}>{item.title}</p>
              <p className={style.product_desc}>{item.description}</p>
              <p className={style.product_price}>{"Rs." + item.price}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsServerSide;
