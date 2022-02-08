//Global objects
//console.log(global);

//run once after specific time
global.setTimeout(() => {
  console.log("Run inside timeout function");
  clearInterval(int);
}, 3000);

//runs every interval
const int = setInterval(() => {
  console.log("Run inside interval function");
}, 1000);

console.log(__dirname);
console.log(__filename);
