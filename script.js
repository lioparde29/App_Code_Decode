var areatext=document.getElementById(`text`);
var result=document.getElementById(`result`);
var select_option=document.getElementById(`select_option`);

areatext.addEventListener('input',()=>{
    get_result();
})

select_option.addEventListener(`change`,()=>{
    get_result();
})

function get_result() {
    if (select_option.value==`decode`) {
        result.value=window.atob(areatext.value);
    }else{
        result.value=window.btoa(areatext.value);
    }
}





