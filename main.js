const token = localStorage.getItem('token')

if(!token) {
    window.location.href = 'index.html'
}

const exitBtn = document.querySelector('.exit')

exitBtn.addEventListener('click', (event) => {
    event.preventDefault()
    localStorage.removeItem('token')
    window.location.href = 'index.html'
})