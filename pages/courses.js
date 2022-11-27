import React from "react";

// ssg - build
export const getStaticProps = async () => {
    //api call
    const response = await fetch('https://fakestoreapi.com/products');
    // console.log(response);
    const data = await response.json(); //to convert stringified json to parsed json
    // console.log(data);
    return {
        props: {productData: data}
    }
}

const Courses = (props) => {
    console.log('props', props);
    const {productData} = props;
    return(
        <div>
            <h2>This is courses file.</h2>
            {productData.map(item => (
                <div>{item.title}</div>
            ))}
        </div>
    )
}


export default Courses;
