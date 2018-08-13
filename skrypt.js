/*var name = "Kamil"; var number = 50;

alert("BIIIIIIIIIIIITCHHHHH PPPPPLLLLLEEEEEEASSSSEEEEE");
var pytanie = prompt("niga u mad?");
console.log(pytanie);
console.log(typeof pytanie);

var year = 2018;
var data =1985;
var full = 18;

var alkochol = year - data >= full;
console.log("Mozna chlac?  - "+alkochol);
*/
 // BMR = 66.5 + ( 13.75 × weight in kg ) + ( 5.003 × height in cm ) — ( 6.755 × age in years )
/*
 var kg;
 var cm;
 var age;
 var bmr,tdr;

kg = 82;
cm = 185;
age = 33;

bmr = 66.5 +(13.75*kg)+(5.003*cm)-(6.755*age);
tdr = bmr*1.55;

console.log('Twoje bmr wynosi ' +bmr+ ' dodajac aktywnosc fizyczna spalasz '+tdr);
*/

//////////////////Funkcje//////////////////////
/*

function obliczWiek(rokUrodzenia){
  return 2018-rokUrodzenia;
}

var wiek = obliczWiek(1985);
var wiek1 = obliczWiek(1949);
console.log(wiek);
console.log(wiek1);


function wiekDoEmerytury(rok, imie){
  var rok = obliczWiek(rok);
  var emerytura = 65-rok;
  console.log(imie+' odchodzi an emeryture za '+emerytura+' lata');
}

wiekDoEmerytury(1985,'Kamil');

*/
//////////////Function Expression//////////////////////
/*

var coRobisz = function(praca, imie){
  switch(praca){
    case 'smieciarz':
    return imie + ' pracuje na wysypisku';
    case 'magik':
    return imie + ' wyciaga krolikki z kapelusza';
    case 'astronauta':
    return imie + ' krazy po orbicie';
    default:
    return  imie + 'jest na bezrobociu';
  }
}

console.log(coRobisz('smieciarz', 'John'));
console.log(coRobisz('what', 'Mark'));
console.log(coRobisz('magik', 'Tom'));
*/

/////////////////////////////Arrays///////////////////////////////////////

/*

var names = ['John', 'Ralf', 'Steave'];
var years = new Array(1990, 1969, 1948);

console.log(names[0]);
console.log(names);
console.log(names.length);

/////Mutate array/////////

names[1] = 'Ben';
names[names.length-1 ] = 'Mary';
console.log(names);

//Different data types

var john = ['John', 'Smith', 1990, 'teaecher', false];

john.push('blue');   //adds to an end of array
john.unshift('mr.'); //adds to begining
console.log(john);
john.pop();    //remove from end
john.shift();  //remove from front
console.log(john);

console.log(john.indexOf(1990));
*/

/////////////////////CODING CHALLANGE/////////////////
/*
var a=125,b=48,c=268;
var paidTips = [];
function tip(ammountPaid){
  if(ammountPaid<50){
    paidTips[0]=(ammountPaid*0.2);
  }else if(ammountPaid >= 50 && ammountPaid < 200){
    paidTips[1]=(ammountPaid*0.15)
  }else{
    paidTips[2]=(ammountPaid*0.1)
  }
}

tip(a);
tip(b);
tip(c);

console.log(paidTips);
console.log(a+paidTips[0],b+paidTips[1],c+paidTips[2]);
*/

///////////////////Objects//////////////////////
/*

var name = ['alfred'];

console.log(name[0]);


var names = ['John'];

console.log(names[0]);

*/
///////////////////////////////////////////////////////////

var wycieczka ={

  paidMoney: [124,48,268,18,42],
  a:[],
  b:[],
  calculateTip: function(){

    for(i=0;i<paidMoney.length;i++)
  {
      a.push(paidMoney[i]* 0.2);
      b.push(paidMoney[i] + a);

    }
  return a,b;
                          }

}

console.log(wycieczka.calculateTip);
