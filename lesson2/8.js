let arr = [1,2,3,4];
let sum=0
for(i of arr){
    if (i%2==0){
        if (i>3) {
            sum+=i
        }   
    }
}
console.log(sum)