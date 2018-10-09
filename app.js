var width=parseInt(d3.select('#scatter').style('width'));
var height=width-width/3.9;
var margin=20;

//space for placing words
var labelArea=110;
//padding for the text at the bottom and left axes
var paddingBot=40;
var paddingTop=40;
//create canvas for the graph
var svg=d3
    .select('#scatter')
    .append("svg")
    .attr('width',width)
    .attr('height',height)
    .attr('class','chart')

//create circles
var circRadius; //var because it's global you can using it everywhere and it wouldnt be undefined if it was let it would have had to be introduced inside the function and the way it is it would not have worked
function cdGet(){
    if(width<=530){
        circRadius=5;
    }
    else{
        circRadius=10;
    }
}
crGet();

//labels for axes

//bottom axis
svg.append("g").attr("class","xText")
//referrence xText
var xText=d3.select(".xText");