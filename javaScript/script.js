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
            
            $('.c').append(`
                <div class="row">
                    <p class="left">${$('.text').val()}</p>
                </div>
            `);
        }else{
            $('.c').append(`
            <div class="row">
                <p class="right">${$('.text').val()}</p>
                
            </div>
            `);
        }
    }


    $('.text').val("");





}