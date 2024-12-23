console.log("Script running...")
document.querySelector('.cross').style.display = 'none';
document.querySelector('.navbar').addEventListener("click", ()=>{
    document.querySelector('.sidebar').classList.toggle('sidebarGo');
    if(document.querySelector('.sidebar').classList.contains('sidebarGo')){
        document.querySelector('.ham').style.display = 'inline';
        document.querySelector('.cross').style.display = 'none';
    }
    else{
        setTimeout(() => {
            document.querySelector('.cross').style.display = 'inline';
        }, 300);
        document.querySelector('.ham').style.display = 'none';
    }
})


function contact() {
    console.log("redirected to contact page");
    window.location.href = "./contact"
}
function resume() {
    console.log("redirected to resume page");
    window.location.href = "./resume"
}




