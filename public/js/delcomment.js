const delComHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
        const id = document.querySelector('.btn').getAttribute('data-id')
        const response = await fetch(`/api/comment/${id}`, {
            method: 'DELETE',
        })

        if (response.ok) {
            document.location.replace('/')
        } else {
            alert('Failed to delete item')
        }
    }
}

// const newComForm = async (event) => {
//     event.preventDefault()

//     const comment = document.querySelector('#addcom').value
    

//     console.log('--------COMMENT', comment)

//     if(comment){
//         const response = await fetch(`/api/comment/${id}`, {
//             method: 'POST',
//             body: JSON.stringify ({comment}),
//             headers: {
//                 'Content-Type': 'application/json',
//             }
//         })
        
//         console.log('RESPONSE',response)

//         if(response.ok){
//             document.location.replace('/addproduct')
//         } else {
//             alert('Failed to add item')
//         }
//     }
// }


const newComForm = async (event) => {
    event.preventDefault()
    //if (event.target.hasAttribute('data-id')) {
    const id = document.querySelector('.btn').getAttribute('data-id')
    const comment = document.querySelector('#addcom').value
    //console.log('--------COMMENT', comment)

    if(comment){
        const response = await fetch(`/api/comment`, {
            method: 'POST',
            body: JSON.stringify ({comment}),
            headers: {
                'Content-Type': 'application/json',
            }
        })
        
        console.log('RESPONSE',response)

        if(response.ok){
            document.location.replace(`/product/${id}`)
        } else {
            alert('Failed to add item')
        }
    //}
    }
}

document.querySelector('#delcom')
    .addEventListener('click', delComHandler)

document.querySelector('.addCom')
    .addEventListener('submit', newComForm)