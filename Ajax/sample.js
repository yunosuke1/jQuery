'use strict'
$(function(){
    $(document).on('click','#get_address_btn',function(){
        $.ajax({
            url:'https://zipcoda.net/api',
            dataType:"jsonp",
            data:{
                zipcode:$('#zipcode').val(),
            },
            async:true
        }).done(function(data){
            console.dir(JSON.stringify(data));
            $('#address').val(data.items[0].address);
        }).fail(function(XMLHttpRequest,textStatus,errorThrown){
        alert('正しい結果を得られませんでした');
        console.log("XMLHttpRequest : " + XMLHttpRequest.status);
        console.log("textStatus : " + textStatus.textStatus);
        console.log("errorThrown : " + errorThrown.message); 
        })
    })
})