import React from "react";

//Static site generation dynamic routing

export const getStaticPaths = async() =>{
    //const arr = [2022, 2021, 2020, 2019, 2018, 2017, 2016];
    const response = await fetch ('https://fakestoreapi.com/products');
    const arr = await response.json();
    const paths = arr.map((item) => {
        return {
            params : {year : item.id.toString()}
        }
    })
    return {
        paths,
        fallback: false  //if page is not found it will go to 404
    }
}

export const getStaticProps = async (context) => {
    console.log(context.params);
    const temp = context.params.year;
    const response = await fetch ('https://fakestoreapi.com/products/'+ temp);
    const data = await response.json()
    return{
        props : {
                res : data,
                notFound : true
        }
    }
}

const Year = ({res}) => {
    console.log('res-' - res);
   return(
    <div>
        <h2>Batch Page - {res.title}</h2>
    </div>
   )
}

export default Year;