// describe pass by value and pass by reference first

q = 3
w = 3
q === w

a = {}
b = {}
a === b // ??
a == b // also NO! but ruby will do a shallow equality here for you :))

function multBy2(poop) {
  poop *= 2
}

var x = 3
multBy2(x)
// what will the following log?
x
// 3 of course!

var myObj = {
  a: 3
}
multBy2(myObj.a)
// what will a be?
myObj
// 3 of course!


function multPropBy2(obj) {
  obj.a *= 2
}
multPropBy2(myObj)
// what will a be?
myObj
// 6 of course!



// SMALL DETOUR
// BUT! JavaScript is a fickle mistress! Let's see how cruel she can be
// how about this?
y = NaN
// what will this return?
y === NaN
// Huh? what about without hard equality/with coercian...
y == NaN
//...god no
// Maybe it's something with assigning a variable?
NaN == NaN
//...WOT
// well maybe we don't know what NaN really is...
typeof NaN // 'number'....


// and time for the ultimate gotcha...
typeof 3/0
// NO! Stop lying to me, NaN is not a type!
3/0 // return infinity
typeof Infinity // returns 'Number' (whew back to normal) then why!?
typeof (3/0) // 'Number'...im done
