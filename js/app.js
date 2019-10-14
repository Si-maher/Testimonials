// immediately invoked function 

(function() {
// customers 
let customers = []
let index = 0

// object constructor function 

function Customer(name, img, text){
    this.name = name;
    this.img = img;
    this.text = text 
}

// customer function 
function createCustomer (name, img, text) {
    let fullImg = `img/customer-${img}.jpg`

    // new customer instance 

    const customer = new Customer(name, fullImg, text)

    // add instance to customers array 
    customers.push(customer)
}
})