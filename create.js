
const errorMessage = document.querySelector('#errorMessage');
const form = document.querySelector('form');
errorMessage.style.display = 'none'; //hide error mesage when page load,start
form.addEventListener('submit',formSubmitted);

function formSubmitted(event)
{
    event.preventDefault();
    //validation same as in product.js

    const product = validFormGetProduct(form,errorMessage,createProduct)
    
    if(product){
        createProduct(product)
        .then(result => {
            window.location = '/product.html?id=' + result.id;
        });
    }
}

function createProduct(product)
{
    return fetch(API_URL,{
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(product)
    })
        .then(res => res.json())

}






