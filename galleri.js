//current image
var currentValue = 1;
//amount of images
var imgCount;
//image folder
var dir;
//array of images
var images = new Array;

//from .html
function galleri () 
{
    list();
    settBg();
    teller();
    key();
    gestures();
}
function setTeller(i)
{
    currentValue = i;   
}
//css image cover / fill browser
function cover()
{
    document.body.style.backgroundSize = "cover";
}
//css image containt/show the full image
function contain()
{
    document.body.style.backgroundSize = "contain";   
}
//current image of the total amount of images
function teller()
{
    var txt1 = currentValue;
    var txt2 = imgCount;
    document.getElementById("count").innerHTML=txt1 + '/' + txt2;
}
//set background
function settBg()
{
   document.body.style.backgroundImage = "url(../" + images[currentValue] + ")"; 
};
//keyboard evnt
function key()
{
    $(document).keydown(function(e)
    {
        if (e.keyCode == 37)
        { 
            prev();
            return false;
        }
        else if(e.keyCode == 39)
        {
            next();
            return false;
        }
    });
}
//Gestures // Hammerjs//
function gestures(){
    document.body.style.margin = 0;
        $(window).load(function() 
    {                     
        $('body').css('width', window.innerWidth);
        $('body').css('height', window.innerHeight);
    });
    $(window).resize(function()
    {
        $('body').css('width', window.innerWidth);
        $('body').css('height', window.innerHeight);
    }); 
    var element = document.body;
    var hammertime = Hammer(element).on("swipeleft ", function(event) {
        next();
    });
    var hammertime = Hammer(element).on("swiperight", function(event) {
        prev();
    });
};
//Next image
function next()
{
    if(currentValue < imgCount)
    {
        currentValue++;
        settBg();
        teller();
    }
    else
    {
        currentValue = 1;
        settBg();
        teller();
    }
};
//Prev image
function prev()
{
    if(currentValue > 1)
	{
        currentValue--;
        settBg();
        teller();
    }
    else
    {
        currentValue = imgCount;
        settBg();
        teller();
    }
};
//fills the image array
function list(){
    for(var i = 1; i<=imgCount; i++)
    {
        images[i] = "galleri/" + dir + "/medium-" + i + ".jpg";
    }
}