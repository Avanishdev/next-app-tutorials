export async function getUsers(){
    let data=await fetch("https://dummyjson.com/products");
    data=await data.json();
    return data;
}