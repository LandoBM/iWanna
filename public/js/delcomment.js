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

document.querySelector('#delcom')
    .addEventListener('click', delComHandler)