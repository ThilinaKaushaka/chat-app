let user="";

$("#user").change(function (e) { 
    
    user=$('#user').val();
    
    
});


function selectUser() {
    
    user=document.getElementById("user").value;
    
    
}


function sendMSG() {
    if($('.text').val()!=""){
        selectUser();
        if (user=="saman") {
            $('.c').append(`<p class="left">${$('.text').val()}</p>`);
        }else{
            $('.c').append(`<p class="right">${$('.text').val()}</p>`);
        }
    }


    $('.text').val("");





}