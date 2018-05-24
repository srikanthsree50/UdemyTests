module.exports.Add = (a,b) =>  a + b;
module.exports.Square = (a) => a * a;

module.exports.asyncAdd = (a,b,cb) => {
setTimeout(() => {
cb(a+b);
},1000);
};


module.exports.asyncSquare = (a,cb) => {
    setTimeout(() => {
    cb(a*a);
    },1000);
    };
    

module.exports.SetName = (user,fullName) => {
var names = fullName.split(' ');
user.firstName = names[0];
user.lastName = names[1];
return user;
};

