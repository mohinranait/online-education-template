

$("#toggleIcon").on('click',function(e){
    $("#navBar").toggleClass('hidden')
})

$(".subMenuIcon").on('click', function(e){
    let parentElement = $(this).parent();
    parentElement.next().slideToggle('show');
})
