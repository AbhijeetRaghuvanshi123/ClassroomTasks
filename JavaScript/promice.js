async function fetchDta() {
    const data = await fetch("https://dummyjson.com/products");
    if(!data.ok){
        console.log("Data not avilable")
    }
    console.log(await data.json())
}

fetchDta();