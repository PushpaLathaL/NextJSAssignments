import React from 'react';
import { useRouter } from 'next/router';

export const getServerSideProps = async (context) => {
  console.log('context', context);
  // const router = useRouter();
  // const {id} = router.query;
  const id = context.params.id;
  console.log('id' - id);

  //   console.log('id' - id);
    // console.log("props", props);
    // const { productData } = props;
    //const response = await fetch('https://fakestoreapi.com/products/'+id);
    const response = await fetch(process.env.API_URL+id);
    const data = await response.json();
    return{ 
      props: {productData: data}
    }
  }
  const ProductId = ({productData}) => {
    const router = useRouter();
    const {id} = router.query;
    console.log('id' - id);
    return (
      
      <div>
        <h2>This is a product page</h2>
        <h2>This is product page - {productData.title}</h2>
        {/* {productData.map((item) => (
          <div>{item.title}</div>
        ))} */}
      </div>
    )
  }
  
  export default ProductId