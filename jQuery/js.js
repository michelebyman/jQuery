// Övning jQuery


// 2.Skapa och lägg till ett element till webbplatsen. & 3.Skapa och lägg till ett element med append och after.

// skapar en p-tagg med text inuti
$('body').append('<p>hello world!</p>');
//skapar attribute
$('p').attr('id', 'para1');
//skapar en p-tagg med text
$('p').after('<p>My name is Michele!</p>');

// $("p").mouseenter(function(event) {
//   console.log(event.target.innerHTML);
// });

// 1. Retunera innehållet från en p tag med html() och text():
$("p#para1").text("Hello world!");

console.log($("p").html());
console.log($("p").text());

// $("p#para1").mouseenter(function(event) {
//   console.log(event.target.innerHTML);
// });

// 4.Ta nu bort ett element med remove

$("p#para1").remove();

// 5.Sätt bakgrundsfärg och textfärg på textelementet. Använd css()

$("p").css("background-color", "teal").css("color", "red");

// 6.Skapa en klass i din css fil. Använd sen toggleClass() på valfritt element.

$(window).hover(function() {
  $("body").toggleClass('background');
});




// 7.Använd click() på en submit knapp för att få upp en alert.
$('p').after('<button>Submit</button>');
$("button").attr("type", "submit")
$("button").click(function(e) {
  alert(e.target.type);
});
