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
createCustomer('Simon', 1 , `Simon ipsum dolor sit amet consectetur adipisicing elit. Quis, autem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, autem.`)
createCustomer('Dave', 2 , `Dave ipsum dolor sit amet consectetur adipisicing elit. Quis, autem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, autem.`)
createCustomer('Bob', 3 , `Bob ipsum dolor sit amet consectetur adipisicing elit. Quis, autem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, autem.`)
createCustomer('Scott', 4 , `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, autem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, autem.`)


// Buttons 

document.querySelectorAll('.btn').forEach(function(item) {
    item.addEventListener('click', function (event) {
        event.preventDefault()

        if(event.target.parentElement.classList.contains('prevBtn')) {
            if ( index === 0) {
                index = customers.length
            }
            index --
            document.getElementById('customer-img').src =customers[index].img
            document.getElementById('customer-name').textContent =customers[index].name
            document.getElementById('customer-text').textContent =customers[index].text
        }
        if(event.target.parentElement.classList.contains('nextBtn')) {
            if ( index === customers.length -1) {
                index = -1
            }
            index ++
            document.getElementById('customer-img').src =customers[index].img
            document.getElementById('customer-name').textContent =customers[index].name
            document.getElementById('customer-text').textContent =customers[index].text
        }

    })
})

})()