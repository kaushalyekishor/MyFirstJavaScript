var n = 10;
if(n>=1)
{
    var harmonicNumber = 0;
    for(i=1; i<=n;i++)
    {
        harmonicNumber += (1.0/i);
    }
    console.log("Harmonic is: "+harmonicNumber);
}
else
{
    console.log("Please Enter Nth Value is grater than 1");
}