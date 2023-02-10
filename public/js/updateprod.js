const updateBtnHandler = async (event) => {
    let prodName = document.querySelector('.p-name').value
    let prodCond = document.querySelector('.p-cond').value
    if(event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id')

      const response = await fetch(`/api/product/${id}`,{
        method:'PUT',
        body: JSON.stringify({
          prodName,
          prodCond
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      if (response.ok){
        document.location.replace('/')
      } else {
        alert(response.statusText)
      }
    }
  }

  document
  .querySelector('.update-prod')
  .addEventListener('click', updateBtnHandler)