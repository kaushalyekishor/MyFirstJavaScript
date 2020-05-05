
    //var number = document.getElementById("number").value;
    var number = 10;
    var headCount = 0;
    var tailCount = 0;

    for(i=0;i<number;i++)
    {
        if(Math.random()<0.5)
        {
            tailCount++;
        }else
        {
            headCount++;
        }
    }
    console.log("percentageOfHeads:",headCount/number*100);
    console.log("percentageOfTails:",tailCount/number*100);

    //document.getElementById('percentageOfHeads').innerHTML = headCount/number*100;
    //document.getElementById('percentageOfTails').innerHTML = tailCount/number*100;