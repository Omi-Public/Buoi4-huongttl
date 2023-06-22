const common = require("./common.js");

var soga;
var socho;

for (var soga = 1; soga <= 36; soga++) {
  for (var socho = 1; socho <= 36; socho++) {

const tongsocon = common.cong(soga, socho);
const sochancho = common.nhan(soga, 4);
const sochanga = common.nhan(socho, 2);
const tongsochan = common.cong(sochanga, sochancho);

if (tongsocon == 36 && tongsochan == 100) {
   console.log(soga, socho);
}}}