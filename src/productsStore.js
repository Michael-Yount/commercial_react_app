// Ash soap : price_1N2M4KDSVY8bNK9QdP6TxY9s
// Turmeric Soap : price_1N2M6uDSVY8bNK9QczQiXH9z
// Rose Clay Soap : price_1N2M90DSVY8bNK9QgFRrtt7Q
// Jade Soap : price_1N2MABDSVY8bNK9QvpSDmHrp

const productsArray = [
    {
        id: "price_1N2M4KDSVY8bNK9QdP6TxY9s",
        title: "Ash Soap",
        description: "",
        price: 8
    },
    {
        id: "price_1N2M6uDSVY8bNK9QczQiXH9z",
        title: "Turmeric Soap",
        description: "",
        price: 6
    },
    {
        id: "price_1N2M90DSVY8bNK9QgFRrtt7Q",
        title: "Rose Clay Soap",
        description: "",
        price: 8
    },
    {
        id: "price_1N2MABDSVY8bNK9QvpSDmHrp",
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