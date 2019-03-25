var place = document.getElementsByClassName("place");
var save = 0;
var tab = [];
var win = 0;
var tab2 = new Array(3);
var move = true;

for(var i = 0; i <= 8; i++)
{
    tab[i] = 0;
}

for (var i=0; i < 3; i++) 
{
   tab2[i] = new Array(3);
   for (var j=0; j < 3; j++) 
   {
      tab2[i][j] = 0;
   }
}

/*for(var i = 0; i < 9; i++)
{
    place[i].addEventListener("click", function()
    {
        draw(i);
    });
}*/

place[0].addEventListener("click", function()
{
    draw(0);
});
place[1].addEventListener("click", function()
{
    draw(1);
});
place[2].addEventListener("click", function()
{
    draw(2);
});
place[3].addEventListener("click", function()
{
    draw(3);
});
place[4].addEventListener("click", function()
{
    draw(4);
});
place[5].addEventListener("click", function()
{
    draw(5);
});
place[6].addEventListener("click", function()
{
    draw(6);
});
place[7].addEventListener("click", function()
{
    draw(7);
});
place[8].addEventListener("click", function()
{
    draw(8);
});

function draw(i)
{
    if(win == 0)
    {
        var place = document.getElementsByClassName("place");
        var circle = document.getElementsByClassName("circle");
        var cross = document.getElementsByClassName("cross");

        if(move == true && tab[i] == 0)
        {
            circle[i].style.display = "block";
            tab[i] = 1;

            if(i < 3)
            {
                tab2[0][i] = 1;
            }
            else if(i < 6)
            {
                tab2[1][i - 3] = 1;
            }
            else
            {
                tab2[2][i - 6] = 1;
            }

            save++;
            move = false;
        }

        if(move == false && tab[i] == 0)
        {
            cross[i].style.display = "block";
            tab[i] = 2;

            if(i < 3)
            {
                tab2[0][i] = 2;
            }
            else if(i < 6)
            {
                tab2[1][i - 3] = 2;
            }
            else
            {
                tab2[2][i - 6] = 2;
            }

            save++;
            move = true;
        }

        check(tab2);
    }
}

function check(tab2)
{
    for(var i = 0; i < 3; i++)
    {
        var finish = document.getElementsByClassName("finish");      
        
        if(tab2[0][i] == tab2[1][i] && tab2[0][i] == tab2[2][i] && tab2[0][i] != 0)
        {
            if(tab2[0][i] == 1)
            {
                win = 1;
                finish.innerHTML = "Nie działa";
                finish[i + 3].style.height = "100%";
            }
            else
            {
                win = 2;
                finish[i + 3].style.height = "100%";
            }
        }
        
        if(tab2[i][0] == tab2[i][1] && tab2[i][1] == tab2[i][2] && tab2[i][0] != 0)
        {
            if(tab2[i][0] == 1)
            {
                win = 1;
                finish[i].style.width = "100%";
            }
            else
            {
                win = 2;
                finish[i].style.width = "100%";
            }
        }
       
    }
    
    if(tab2[0][0] == tab2[1][1] && tab2[0][0] == tab2[2][2] && tab2[1][1] != 0 )
    {
            if(tab2[1][1] == 1)
            {
                win = 1;
                finish[7].style.display = "block";
                finish[7].style.height = "100%";
            }
            else
            {
                win = 2;
                finish[7].style.display = "block";
                finish[7].style.height = "100%";
            }
    }
    
    if(tab2[1][1] == tab2[2][0] && tab2[1][1] == tab2[0][2] && tab2[0][2] != 0)
    {
            if(tab2[1][1] == 1)
            {
                win = 1;
                finish[8].style.display = "block";
                finish[8].style.height = "100%";
            }
            else
            {
                win = 2;
                finish[8].style.display = "block";
                finish[8].style.height = "100%";
            }
    }
    
    var text__end = document.getElementsByClassName("text");
    var end = document.getElementsByClassName("end");
    
    if(win == 1)
    {
        text__end[0].style.display = "block";
        text__end[1].style.display = "block";
        
        text__end[0].innerHTML = "Wygrał gracz pierwszy";
        end[0].style.display = "block";
    }
    
    if(win == 2)
    {
        text__end[0].style.display = "block";
        text__end[1].style.display = "block";
        
        text__end[0].innerHTML = "Wygrał gracz drugi";
        end[0].style.display = "block";
    }
    
    if(save == 9 && win == 0)
    {
        text__end[0].style.display = "block";
        text__end[1].style.display = "block";
        
        text__end[0].innerHTML = "Remis";
        end[0].style.display = "block";
    }  
}




