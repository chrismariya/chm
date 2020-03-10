var x=121;
var y=x;
var rev=0;
var rem=0;
while(x>0)
{
    rem=x%10;
    rev=rev*10+rem;
    x=parseInt(x/10);
}
if (rev==y)
{
    
    console.log("this number is a pallindrom");
}
else
{
    console.log("this number is not a pallindrom");
}