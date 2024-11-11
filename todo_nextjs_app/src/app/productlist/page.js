import Product from './product'
async function productList(){
    let data=await fetch(`https://dummyjson.com/products`);
    data=await data.json();
    return data.products;
}

export default async function Page(){
    let products=await productList();
    // console.log(products); 
    return (
        <>
            <h2>Product List</h2>
            {
                products.map((item)=>{
                    return (
                        <>
                            <h2 key={item.id}>Name:{item.title}</h2>
                            <Product key={item.id} price={item.price} />
                        </>
                    )
                }
            )}
        </>
    )
}