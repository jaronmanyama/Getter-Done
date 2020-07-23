//MARK LIST ITEM AS COMPLETE
$('ul').on("click","li",function(){//APPLY LISTENER FIRST TO ENTIRE UL; WHEN LI IS CLICKED INSIDE THE UL, FIRE CODE
    $(this).toggleClass("completed");
});

//CLICK ON X IN <SPAN> TO DELETE LIST ITEM
$('ul').on("click","span",function(event){//APPLY LISTENER FIRST TO ENTIRE UL; WHEN SPAN IS CLICKED INSIDE THE UL, FIRE CODE
    $(this).parent().fadeOut(function(){
        $(this).remove();
    });//APPLIES TO THE PARENT LIST ITEM IN THE <LI>, NOT THE SPAN ITSELF; FADE FIRST THEN REMOVE
    event.stopPropogation();//RESTRICT CLICK TO SPANS ONLY, AND NOT TO THEIR PARENT ELEMENTS
});

//ADD NEW ITEMS TO LIST
$("input[type='text']").keypress(function(event){//INPUT SYNTAX MUST BE EXACT
    if(event.which === 13){//WHEN ENTER KEY IS PRESSED
      var todoItem = $(this).val();//GRABBING ENTERED LIST VALUE
      $(this).val("");//CLEARING INPUT FIELD
     $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoItem + "</li>")//ADDING HTML ITEM TO END OF LIST
    }
});

//TOGGLE ADD TO-DO INPUT FIELD
$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
});