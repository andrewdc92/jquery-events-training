$(document).ready(function(){
  $("span").on("click",function handleClick(event){
    console.log($(this).html());

     $("ul").append("<li>" + $(this).html() + "</li>")
   })
  })

  //line 5 does not need to be called in a variable since I don't reference it anywhere.
  // all line 3 does is print the result of the ($(this).html() which is the content of
  // the span tags (since ($)this) references the $("span")

  
