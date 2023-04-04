// $("h1").css("color","orange");
// //(document).ready(function){
//  $("h1").css("color","orange"); when cdn is on head.
// })
// $("button").addClass("jquery");
// $("button").removeClass("jquery");
// $("a").attr("href","https://www.yahoo.com");
// $("h1").click(function() {
//     $("h1").css("color","red")
// });
//
// $("input").keydown(function(event){
//   console.log("event.key");
//
// });
// $("document").keypress(function(event){
//     $("h1").text("event.key");
// });
// $("h1").on("mouseover",function( ) {
//   $("h1").css("color","red")
//
// });

// BEFORE,AFTER,PREPREND,APPEND METHODS

// $("button").on("mouseover",function( ) {
//   $("h1").toggle() //.show() and toggle() to view
// });

// $("button").on("click",function( ) {
//   $("h1").fadeOut() // fadeIN(),slideUp(),slideDown()
// });

$("button").on("click",function( ) {
  $("h1").slideUp().slideDown().animate({opacity : 0.5}) //only numeric values
});
