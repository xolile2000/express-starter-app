module.exports = function shoppingCart(){
  let small = 35.00
  let medium = 65.00
  let large = 85.00
  var smallTotal = 0
  var mediumTotal = 0
  var largeTotal= 0
  var totalPrice =0

  function buy(pizza){
    
     if(pizza === "small"){
       orderSmall();
     } else if (pizza ==="medium"){
       orderMedium();
     }else if(pizza ==='large'){
       orderLarge();
     }
     
    
  }
  function orderSmall(){
    smallTotal += small;
  }
  function orderMedium(){
    mediumTotal += medium;
  }
  function orderLarge(){
    largeTotal += large;
  }



  function getSmallTotal (){
    return smallTotal
  }
  function getMediumTotal (){
    return mediumTotal
  }
  function getLargeTotal (){
    return largeTotal
  }
  function pricetotal(){
   return smallTotal  + mediumTotal + largeTotal

  }

  return {
    buy,
    orderLarge,
    orderMedium,
    orderSmall,
    getSmallTotal,
    getMediumTotal,
    getLargeTotal,
    pricetotal
    
  
  }
}