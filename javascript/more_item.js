function more_item(){
    $('.lds-ring').css('display','inline-block');
    $('.more button').css('display','none');


    setTimeout(function() {
        $('.shop_card').css('display','block');
        $('.lds-ring').css('display','none');
        $('.more button').css('display','block');
     },1000);
    
}