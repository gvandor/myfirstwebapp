let nevem = "python"
let azEnkorom = 57
console.log("A javaScript betöltött.")
console.log(azEnkorom)
if (true) {
    console.log("Igaz volt a feltétel")
}
console.log("Ez itt a vége.")

// jQuery
//let szovegAzOldalon = $("h1").text()
//console.log('szovegAzOldalon')
/*console.log($('h1').text())
$("h1").text('Ezt javascriptbol valtoztattuk meg!')*/
if (azEnkorom >= 21) {
    $('h1').text("Amerikában is ihatok alkoholt")
} else if(azEnkorom >= 18) {
    $('h1').text("Európában már ihatok alkoholt")
}
else {
    $("h1").text("Még nem ihatok alkoholt")
}
//$('.sarga').css()
console.log($(".sarga").css('background'))
//$('.sarga').css('background-color','magenta')
//$('p').text('alma')
$('p').html('alma, ami <strong>nagyon</strong> fontos.')

/*$('button').click(function(){
    $('ul').append('<li>Újabb elem</li>')
})*/
/*$('button').click(function adjHozzaEgyLit() {
    $('ul').append('<li>Újabb elem</li>')
    })*/
/*function adjHozzaEgyLit() {
    $('ul').append('<li>Újabb elem</li>')
}*/
$('#hozzaado').click(function(){
    $('ul').append('<li>Újabb elem</li>')
})
$('#torlo').click(() => {
    $("li:last-of-type").remove()
})
//$('li').toggleClass('sarga')

/*for (let i=0; i < 100; i = i + 1) {
    $("ul").append("<li>${i+1}. Nem csalok a vizsgán.</li>")
}*/
/*for (let i=0; i < 11; i = i ++ ) {
    console.log(Number)
}*/
let szinek = ['orange',"magenta","red",'brown','green','blue','teal']
//$('.kontener').append('<div class="doboz"></div>')
//$('.kontener div:last-of-type').css('background-color',szinek[0])

function egySzinDoboz(szin) {
    $('.kontener').append('<div class="doboz"></div>')
    $('.kontener div:last-of-type').css('background-color',szin)
}
szinek.forEach(egySzinDoboz)
let name ="Mark";
let greeting = `Hello ${name}!`;
console.log(greeting)
let charCount = 'Hello'.length;
console.log(charCount)
let names = ['Ana','Roger',"Annamaria"];
console.log(names[2].length)
names.push("Steven");
console.log(names)
console.log(names.length)
/*egySzinDoboz('lime')
egySzinDoboz('pink')
egySzinDoboz('red')*/
let objektum = {colors:['red','blue','green'],};
/*objektum.hasManyColors = 
    if (colors.length > 3){
        console.log(true)
    }
    else {
        console.log(false)
    };
    */
   let variable = false;
   if (variable === true) {
       console.log("A feltétel teljesült")
   }
   else {
       console.log("A feltétel nem teljesült")
   }
   let a = 7;
   if (a < 5) {
     console.log(a / 2);
   } else {
     console.log(a * 2);
   }
