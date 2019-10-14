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
createCustomer('Simon', 1 , `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, autem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, autem.`)
createCustomer('Dave', 2 , `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, autem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, autem.`)
createCustomer('Bob', 3 , `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, autem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, autem.`)
createCustomer('Scott', 4 , `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, autem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, autem.`)
})