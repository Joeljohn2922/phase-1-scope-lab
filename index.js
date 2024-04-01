// Write your solution in this file!
var customerName = "bob"; 
function getCustomerName() {
    return customerName;
}
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}
function setBestCustomer(customer) {
    bestCustomer = "not bob";
} 
var bestCustomer; 
function overwriteBestCustomer(newCustomer) {
    bestCustomer = newCustomer;
} 
 const leastFavoriteCustomer = { value: "Bob" };
    function changeLeastFavoriteCustomer(newCustomer) {
        leastFavoriteCustomer = newCustomer;

}

