authForm.onsubmit = function (event){
    showItem(loading)
    event.preventDefault()
    if(authForm.submitAuthForm.innerHTML == 'Acessar'){
        firebase.auth().signInWithEmailAndPassword(authForm.email.value, 
            authForm.password.value ).catch(function (error) {
                console.log('Falha no Acesso')
                console.log(error)
            })
    } else {
        firebase.auth().createUserWithEmailAndPassword(authForm.email.value, 
            authForm.password.value ).catch(function (error) {
                console.log('Falha no Cadastro')
                console.log(error)
            })
    }
}
firebase.auth().onAuthStateChanged(function(user){
    hideItem(loading)
    if (user){
       showUserContent(user)
    }else{
        showAuth
    }
})

//função que parmitir o usurio sair da conta
function signOut(user){
    firebase.auth().sing

}
