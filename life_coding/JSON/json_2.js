

var param = { 
    "hi" : "its me", 
    "your_name?" :"dont mind"

};

var _ = new Object(param);



var info = JSON.stringify(_);
var parsed = JSON.parse(info);

console.log('info', info);
console.log('77777');

for(var key in parsed){
    console.log(key, parsed[key]);
}

console.log('hi');
console.log('bye');