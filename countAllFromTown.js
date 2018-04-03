var countAllFromTown = function(isFromTown,satrts){
   var fromTown = isFromTown.split(',');
   var platesNum =[];

  for(var i=0; i < fromTown.length; i++){
      console.log(fromTown)
  if (fromTown[i].trim().startsWith(satrts) ){
      platesNum.push(fromTown[i])
   	}
  }
  return platesNum.length;
}
var fromStellies = countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL');
console.log(fromStellies);
