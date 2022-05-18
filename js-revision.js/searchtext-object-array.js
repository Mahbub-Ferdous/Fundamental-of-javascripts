/// search a product form an object array by using includes function and search parameter

const products = [
    {name: 'lenovo laptop', price: 20000},
    {name: 'asus laptop', price: 20000},
    {name: 'macbook laptop', price: 20000},
    {name: 'apple smart watch', price: 20000},
    {name: 'oneplus watch', price: 20000},
    {name: 'dell gaming Laptop', price: 20000},
    {name: 'wristfit watch', price: 20000},
];

function searchProducts(products, searchText){
    for(const product of products){
        if(product.name.includes(searchText.toLowerCase())){         /// why we use includes function cause we want to searcvh some specific text with property name so we includes than and pass the parameter in searchText parameter with something
            console.log(product.name);
        }
    }
}
let matchedOutput = searchProducts(products, 'laptop');
console.log(matchedOutput);



/// if we want to matched item with an arrays:

function searchProducts(products, searchText){
    let result = [];
    for(const product of products){
        if(product.name.includes(searchText)){         /// why we use includes function cause we want to searcvh some specific text with property name so we includes than and pass the parameter in searchText parameter with something
            result.push(product);
        }
    }
    return result;
}

let matched = searchProducts(products, 'watch');
console.log(matched);