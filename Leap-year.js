/*var year = 2016;
if(year % 4 ==0)
{
    document.write(year+" is a leap year");
}
else
{
    document.write(year+" is a not leap year");
}*/
check_leapyear();
function check_leapyear(){
    var year = 2020;
    //three conditions to find out the leap year
    if( (year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0))
    {
        console.log(year+" is a leap year");  
    }
    else
    {
        console.log(year+" is not leap year");
    }
}