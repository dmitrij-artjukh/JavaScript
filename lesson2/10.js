let arr = [6,5,4,3,2,1];;
let buf
for (let n=0; n<5; n++){
    for(let i=0; i<5;i++){
        if (arr[i] > arr[i+1]){
             buf=arr[i]
            arr[i]=arr[i+1]
            arr[i+1]=buf
        }
    }
}
console.log(arr)