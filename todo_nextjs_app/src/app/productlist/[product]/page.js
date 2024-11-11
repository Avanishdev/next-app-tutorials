async function productList(id){
    let data=await fetch(`https://dummyjson.com/products/${id}`);
    data=await data.json();
    // console.log(data);
    return data;
}

export default async function Page({params}){
    // console.log(params); 
    let product=await productList(params.id);
    return (
        <>
            <h2>Product Details</h2>
            <h3>Name: {product}</h3>
        </>
    )
}