
const productsArray = [
    {
        id: "1",
        title: "Ash Soap",
        description: "",
        price: 8
    },
    {
        id: "2",
        title: "Turmeric Soap",
        description: "",
        price: 6
    },
    {
        id: "3",
        title: "Rose Clay Soap",
        description: "",
        price: 8
    },
    {
        id: "4",
        title: "Jade Soap",
        description: "",
        price: 7
    },
]
function getProductData(id) {
    let productData = productsArray.find(product => product.id === id);

    if (productData === undefined) {
        console.log("Product data does not exist for ID: " + id);
        return undefined;
    }

    return productData;
}

export { productsArray, getProductData };