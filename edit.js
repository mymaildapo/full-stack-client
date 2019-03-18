const form =document.querySelector('form');
const errorMessage = document.querySelector('#errorMessage');

errorMessage.style.display = 'none';
const product_id = getIdFromQuery();

getProduct(product_id)
    .then(populateFormWithProduct);

    function populateFormWithProduct(product)
    {
        document.querySelector('#title').value = product.title;
        document.querySelector('#description').value = product.description;
        document.querySelector('#image').value = product.image;
        document.querySelector('#price').value = product.price;
        document.querySelector('#quantity').value = product.quantity;
  
    }

    form.addEventListener('submit',formSubmitted);

function formSubmitted(event)
{
    event.preventDefault();
    //validation same as in product.js

    const product = validFormGetProduct(form,errorMessage,updateProduct)
    if(product){
        updateProduct(product)
        .then(() => {
            window.location = '/product.html?id=' + product_id;
        });
    }
}

function updateProduct(product)
{
    return  fetch(`${API_URL}/${product_id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(product)
    })
        .then(res => res.json())

}