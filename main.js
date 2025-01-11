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

const post = document.querySelector('.post')
const addPost = document.querySelector('.add-post')

async function creatPost () {
    try{
    await fetch ("https://0007e0d42e40ae66.mokky.dev/posts", {
        method:"POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization:`Bearer ${token}` 
        },
        body: JSON.stringify({
            content: post.value
        })
    });
    
}  catch(error) {
   console.error (`Упс произошла ошибка${error}`)
} 
}
addPost.addEventListener('click', (event) => {
event.preventDefault()
login()    
})