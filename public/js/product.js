const newFormHandler = async (event) => {
    event.preventDefault()

    const prodName = document.querySelector('#prodName').value.trim()
    const prodCond = document.querySelector('#prodCond').value.trim()

    console.log('--------PRODNAME', prodName)
    console.log('--------CONDITION', prodCond)

    if(prodName && prodCond){
        const response = await fetch(`/api/product`, {
            method: 'POST',
            body: JSON.stringify ({prodName, prodCond}),
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
            document.location.replace('/addproduct', {

            })
        } else {
            alert('Failed to delete item')
        }
    }
}


document.querySelector('.delete-prod')
    .addEventListener('click', delBtnHandler)

document.querySelector('.new-prod')
    .addEventListener('submit', newFormHandler)