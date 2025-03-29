const getShippingCost = (country) => {
    let message;
    let price;
    
    switch (country.toLowerCase()) {
        case 'china':
        price = 100;
        message = `Shipping to ${country} will cost ${price} credits`;
        break;
    
        case 'chile':
        price = 250;
        message = `Shipping to ${country} will cost ${price} credits`;
        break;
    
        case 'australia':
        price = 170;
        message = `Shipping to ${country} will cost ${price} credits`;
        break;
    
        case 'jamaica':
        price = 120;
        message = `Shipping to ${country} will cost ${price} credits`;
        break;
    
        default:
        message = 'Sorry, there is no delivery to your country';
    }
    
    return message;
};

console.log(getShippingCost('Australia')); 
console.log(getShippingCost('Germany')); 
console.log(getShippingCost('China'));
console.log(getShippingCost('Chile'));
console.log(getShippingCost('Jamaica'));
console.log(getShippingCost('Sweden'));