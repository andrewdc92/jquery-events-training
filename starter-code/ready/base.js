/*
  What needs to change so that the page says "Go!"?
*/
//selecting the entire document with $document, the .ready refers to the event
// when the page is ready, and then the function tells it what to do. it's blank here
// because the function does not need to be referenced later
$(document).ready(function() {
  $("h1").text("Go!");

  if ( $("h1").text() === "Go!" ){
    console.log( "The page says:", $("h1").text());
    console.log("Success!");
  } else {
    console.log( 'Can you make it say "Go!"?' );
  }
});
