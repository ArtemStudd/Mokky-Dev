// регистрация

const nameReg = document.querySelector('.name')
const emailReg = document.querySelector('.email-reg') 
const passwordReg = document.querySelector('.password-reg')
const submitReg = document.querySelector('.submit-reg')


async function register (){
    try{
    const res = await fetch ("https://0007e0d42e40ae66.mokky.dev/register", {
        method:"POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            fullName: nameReg.value,
            email: emailReg.value,
            password: passwordReg.value
        })
    });
    const data = await res.json()
    localStorage.setItem('token', data.token)
    
   window.location.href = 'main.html'
}  catch(error) {
   console.error (`Упс произошла ошибка${error}`)
} 
}
submitReg.addEventListener('click', (event) => {
event.preventDefault()
register()    
})
// вxод
const emailLogin = document.querySelector('.email')
const passwordLogin = document.querySelector('.password')
const submitLogin = document.querySelector('.submit')
