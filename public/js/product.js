const newFormHandler = async (event) => {
    event.preventDefault()

    const product_name = document.querySelector('#prodName').value.trim()
    const Condition = document.querySelector('#prodCond')
    var value = Condition.value;
    var condition = Condition.options[Condition.selectedIndex].text;

    console.log('--------PRODNAME', product_name)
    console.log('--------CONDITION', condition)

    if(product_name && condition){
        const response = await fetch(`/api/product`, {
            method: 'POST',
            body: JSON.stringify ({product_name, condition}),
            headers: {
                'Content-Type': 'application/json',
            }
        })
        
        console.log('RESPONSE',response)

        if(response.ok){
            document.location.replace('/addproduct')
        } else {
            alert('Failed to add item')
        }
    }
}



const delBtnHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id')
        const response = await fetch(`api/product/${id}`, {
            method: 'DELETE',
        })

        if (response.ok) {
            document.location.replace('/addproduct')
        } else {
            alert('Failed to delete item')
        }
    }
}


document.querySelector('.delete-prod')
    .addEventListener('click', delBtnHandler)

document.querySelector('.new-prod')
    .addEventListener('submit', newFormHandler)