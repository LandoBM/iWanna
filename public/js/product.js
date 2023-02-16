const newFormHandler = async (event) => {
    setTimeout(function () {
        event.preventDefault()
    console.log('TEST')
            document.location.replace('/')
    }, 5000)
    // event.preventDefault()
    // console.log('TEST')
    //         document.location.replace('/')
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

document.querySelector('.new-prod')
    .addEventListener('submit', newFormHandler)

// document.querySelector('#addimg')
//    .addEventListener('submit', addimg)