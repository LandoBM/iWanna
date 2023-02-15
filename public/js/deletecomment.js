const deleteComment = async (event) => {
    event.preventDefault()

    let deleteComment = document.querySelector('.delComments').value
    let comBody = document.querySelector('.commentBody').value

    if(event.target.hasAttribute('data-id')) {
        const id = document.querySelector('.btn').getAttribute('data-id')

        const response = await fetch(`/api/product/${id}`, {
            method: 'DELETE',
            // body: JSON.stringify({
            //     comment_id,
            //     comment
            // }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if (response.ok){
            document.location.replace(`/api/product/${id}`)
            alert(`Comment Deleted`)
        } else {
            alert(`Cannot Delete Comment`)
        }
    }
}

document.querySelector('.delComments')
.addEventListener('click', deleteComment)

// const updateBtnHandler = async (event) => {
//     let product_name = document.querySelector('.p-name').value
//     let condition = document.querySelector('.p-cond').value
//     if(event.target.hasAttribute('data-id')) {
//       const id = document.querySelector('.btn').getAttribute('data-id')
//       //const id = event.target.getAttribute('data-id')

//       const response = await fetch(`/api/product/${id}`,{
//         method:'PUT',
//         body: JSON.stringify({
//           product_name,
//           condition
//         }),
//         headers: {
//           'Content-Type': 'application/json'
//         }
//       })
//       if (response.ok){
//         document.location.replace('/')
//       } else {
//         alert(response.statusText)
//       }
//     }
//   }

//   document
//   .querySelector('.updateComments')
//   .addEventListener('submit', updateBtnHandler)