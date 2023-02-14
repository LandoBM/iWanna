// const newFormHandler = async (event) => {
//     event.preventDefault()

//     const product_name = document.querySelector('#prodName').value.trim()
//     const condition = document.querySelector('#prodCond').value.trim()
//     const price = document.querySelector('#prodPrice').value.trim()
//     const image = document.querySelector('#prodimg').value.trim()
//     const image = document.querySelector('#prodimg')

//     console.log('--------PRODNAME', product_name)
//     console.log('--------CONDITION', condition)

//     if(product_name && condition && price){
//         const response = await fetch(`/api/product/img`, {
//             method: 'POST',
//             body: JSON.stringify ({product_name, condition, price}),
//             headers: {
//                 'Content-Type': 'application/json',
//             }
//             headers: {
//                 "Content-Type": "multipart/form-data"
//                }
//         })
        
//         console.log('RESPONSE',response)

//         if(response.ok){
//             document.location.replace('/addproduct')
//         } else {
//             alert('Failed to add item')
//         }
//     }
// }



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

//new
// const addimg = async (event) => {
//     event.preventDefault()
//    const upload_file = document.querySelector('#prodimg')
//    const response = await fetch('api/product/img', {
//     method: 'POST',
//     body: upload_file,
//     // headers: {
//     //   "Content-Type": "multipart/form-data"
//     // }
// })

// if(response.ok){
//     document.location.replace('/addproduct')
// } else {
//     alert('Failed to add img')
// }

// }


document.querySelector('.delete-prod')
    .addEventListener('click', delBtnHandler)

// document.querySelector('.new-prod')
//     .addEventListener('submit', newFormHandler)

// document.querySelector('#addimg')
//    .addEventListener('submit', addimg)