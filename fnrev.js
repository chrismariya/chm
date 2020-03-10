function reverce(x)
{
   var rev=0;
   var rem=0;
   while (x>0)
       {
rem= x%10;
rev= rev*10+rem;
x=parseInt(x/10);
       } 
       console.log(rev);
}
reverce(1504);