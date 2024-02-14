const arr=[1,2,3,4]
const result=arr.reduce((acc,item)=>{
      console.log(acc,item)
      return (acc+item)
},0)
console.log("result",result)