// Script file for Assignment 1 Part B

// Declare global variables

const veggiePricePerKg = 1.5;
const fruitPricePerKg = 2;
const chickenPricePerKg = 4;
const porkPricePerKg = 5;

const vegOutput = document.getElementById("veggie_cost");
const fruitOutput = document.getElementById("fruit_cost");
const chickenOutput = document.getElementById("chicken_cost");
const porkOutput = document.getElementById("pork_cost");

// Function to print the cost of the hamper based on the user input - calls the printTotalCost method
function printItemCost(id) {
    let itemCost = 0;
    if (id === 'veggie_cost') {
        itemCost = getItemCost('veg');
    } else if (id === 'fruit_cost') {
        itemCost = getItemCost('fruit');
    } else if (id === 'chicken_cost') {
        itemCost = getItemCost('chicken');
    } else if (id === 'pork_cost') {
        itemCost = getItemCost('pork');
    }
    document.getElementById(id).textContent = `$${itemCost}`;
    printTotalCost();
}

// Prints the running total of the order every time the user changes the input
function printTotalCost() {
    let totalCost = getItemCost('veg') + getItemCost('fruit') + getItemCost('chicken') 
        + getItemCost('pork');
    const totalOutput = document.getElementById("total_cost");
    totalOutput.textContent = `$${totalCost}`;
}


// Returns the item cost
function getItemCost(item) {
    if (item === 'veg') {
        return veggiePricePerKg * parseFloat(document.getElementById("vegQuantity").value);
    } else if (item === 'fruit') {
        return fruitPricePerKg * parseFloat(document.getElementById("fruitQuantity").value);
    } else if (item === 'chicken') {
        return chickenPricePerKg * parseFloat(document.getElementById("chickenQuantity").value);
    } else if (item === 'pork') {
        return porkPricePerKg * parseFloat(document.getElementById("porkQuantity").value);
    }
}

// Prints a formatted order confirmation on submit
function printOrder() {
    let currentDate = document.getElementById("current-date").value;
    let firstName = document.getElementById("first-name").value;
    let lastName = document.getElementById("last-name").value;
    let address = document.getElementById("address").value;
    let postCode = document.getElementById("post-code").value;
    let phone = document.getElementById("phone").value;
    let phoneType = document.querySelector('input[name=phone-type]:checked').value;
    let email = document.getElementById("email").value;
    let orderMethod = document.querySelector('input[name=order-type]:checked').value;
    let pickupTime = document.getElementById("pickup-time").value;
    let totalCost = getItemCost('veg') + getItemCost('fruit') + getItemCost('chicken') 
        + getItemCost('pork');
    let orderConfirmationElement = document.getElementById("orderConfirmation");

    let orderSummary = `<h3>Order Confirmed!</h3>
                        <p>Order date: ${currentDate}</p>
                        <p>Name: ${firstName} ${lastName}</p>
                        <p>Address: ${address} ${postCode}</p>
                        <p>Contact no: ${phone} (${phoneType})</p>
                        <p>Order method: ${orderMethod}</p>
                        <p>Date of ${orderMethod}: ${pickupTime}</p>
                        <br>
                        <h4>Your order</h4>
                        <table>`;

    if (getItemCost('veg') > 0) {
        orderSummary += `<tr><td>Vegetable</td><td>$${getItemCost('veg').toFixed(2)}</td></tr>`;
    }

    if (getItemCost('fruit') > 0) {
        orderSummary += `<tr><td>Fruit</td><td>$${getItemCost('fruit').toFixed(2)}</td></tr>`;
    }

    if (getItemCost('chicken') > 0) {
        orderSummary += `<tr><td>Chicken</td><td>$${getItemCost('chicken').toFixed(2)}</td></tr>`;
    }

    if (getItemCost('pork') > 0) {
        orderSummary += `<tr><td>Pork</td><td>$${getItemCost('pork').toFixed(2)}</td></tr>`;
    }

    orderSummary += `<tr></tr><tr><td></td><td>Total Cost: </td><td>$${totalCost.toFixed(2)}</td></tr></table>`;
    orderConfirmationElement.innerHTML = orderSummary;
}


// Changes the wording in the form depending on the user's chosen method
function printOrderMethod() {
    let orderMethod = document.querySelector('input[name=order-type]:checked').value;
    if (orderMethod === 'delivery') {
        document.getElementById('order-method-label').textContent = 'Delivery time and date';
    } else if (orderMethod === 'pickup') {
        document.getElementById('order-method-label').textContent = 'Pickup time and date';
    }
}