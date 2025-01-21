function Reverse(text) {
  let ch = "";
  for (let i = text.length - 1; i >=0; i--) {
    ch = ch + text[i];
  }
  return ch;
}
console.log(Reverse("text"));


function Count(text){
  let sum = 0;
  for (let i = 0; i < text.length; i++){
    
sum += 1;
      }
      return sum;

    }

  console.log(Count("text"));


function Capitalize(sentence){
    let ch = sentence.split(" ");
 for (let i=0; i < ch.length; i++){
 ch[i]= ch[i].charAt(0).toUpperCase()+ch[i].substring(1);
 }
  
   return ch.join(" ");
   }
   
   console.log(Capitalize("sentence"));
 
   function MaxMin(arr){
     let min=arr[0];
     let max=arr[0];
     for(let i =1; i<arr.length; i++){
       if(arr[i]>max){
         max=arr[i];
 
       }
       else if (arr[i]<min ){
          min=arr[i];
       }
     }
      return {min,max};
     
   }
 console.log(MaxMin([3,2,10,7]));
  
 function SumArray(arr){
     let sumarr=0
      for (let i=0 ; i < arr.length; i++){
       sumarr = arr[i]+sumarr;
      }
      return sumarr;
   }
 console.log(SumArray([4,6,4]));
 
 function FilterArray(array){
   let result=[];
   for (let i=0 ; i<array.length; i++){
     if(array[i]%2==0){
       result.push(array[i]);
     }
   }
   return result; 
 }
 console.log(FilterArray([2,7,8,10]));
 
 
 function Factorial(nbr){
   let f=1;
   for(let n=1 ; n<nbr; n++){
     f=f+(f*n);
   }
  return f;
 }
 console.log(Factorial(6));
 
  function PrimeNumber(num){
   
   for (i=2; i<= num;i++){
   if ( num % i === 0){
 return "is not a prime number" ;
   }
   
   }
   return "is a prime number" ;
 }
  
  console.log(PrimeNumber(15));
 
  function FibonacciSequence(k){
   let fib=[0,1]; 
 for (i=2; i <= k; i++){
 fib[i]=fib[i-1]+fib[i-2];
  
 }
 return fib; 
  }
  console.log(FibonacciSequence(5));
  

