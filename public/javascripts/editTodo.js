const title = document.querySelector('#title')
const details = document.querySelector('#details')
const form = document.querySelector('#form')

const edit = document.querySelector('#edit')

edit.addEventListener('click', (e) => {
    if(e.target.value === 'edit'){
        e.preventDefault()
        e.target.value = "update"
        title.removeAttribute('readOnly')
        details.removeAttribute('readOnly')
    }
})