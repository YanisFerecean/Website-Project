function input()
{
    let name = document.getElementById('nameIn');
    let email = document.getElementById('emailIn');
    let age = document.getElementById('ageIn');

    document.getElementById('textOut').innerHTML = createString(name.value,email.value,age.value);
}
function createString(name,email,age)
{
    return `${name} is your name. ${email} is your email.${age} is your age`
}
function init()
{
    document.getElementById('buttonC').addEventListener('click', () => {
        input();
    });
}
function shopInit()
{
    document.getElementById('add').addEventListener('click', () => {
        calculatePrice();
    });
}
function calculatePrice()
{
    let cartPrice = document.getElementById("priceAll");
    let addedPrice = document.getElementById("price1");
    let newCartPriceNumber = parseInt(cartPrice.value) + parseInt(addedPrice.value);
    document.getElementById("priceAll").innerHTML = newCartPriceNumber +"";
    let newCartCount = parseInt(document.getElementById("cartCount").value) + 1;
    document.getElementById("cartCount").innerHTML = newCartCount +"";
}
document.addEventListener('DOMContentLoaded', (event) => {
    shopInit();
});