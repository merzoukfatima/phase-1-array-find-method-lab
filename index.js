// code your solution here
const record = [
    { year: "2015", result: "L"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ]
  const superbowlWin= (array)=>{
    const win=array.find(item=>item.result==="W") 
    return win ? win.year: win
  }
    


console.log(superbowlWin(record))
  