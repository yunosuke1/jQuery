'use strict'
$(function(){
    $("#hobby").on('change',function(){
        let hobby = $('option:selected').val();
        if(hobby=="none"){
            $('.optiontr').hide();
            $('.optionelse').hide();
        }
        else if(hobby=="tr"){
            $('.optiontr').show();
            $('.optionelse').hide();
        }
        else if(hobby=="else"){
            $('.optionelse').show();
            $('.optiontr').hide();
        }
    })
})