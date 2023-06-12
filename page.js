const pass = document.getElementById("pass");
const show = document.getElementById('show');

show.addEventListener("click" , function(){
    if(pass.type === "password"){
        pass.type = "text"
    }
    else{
        pass.type = "password"
    }
})