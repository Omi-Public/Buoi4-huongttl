const cong = function(a, b) {
    const tong = a + b;
    return tong;
   }
   
const tru = function(a, b) {
    const hieu = a - b;
    return hieu;
   }
  
const nhan = function(a, b) {
    const tich = a * b;
    return tich;
   }

   const chia = function(a, b) {
    const thuong = a / b;
    return thuong;
   }
  
module.exports = {    
    cong: cong,
    tru: tru,
    nhan: nhan,
    chia: chia,
  };