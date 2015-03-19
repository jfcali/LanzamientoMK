$( document ).ready(function() {
	var dataset = [ 95429, 103815, 106020, 123200, 138929, 153943, 169979, 188329 ];
	var dataset2 = [ 9, 10, 10, 12, 13, 15, 16, 18 ];
	d3.select("body").append("ul");
	d3.select("body").select("ul").selectAll("li").data(dataset).enter().append("li").text(function(d) { return d; })
	.style("color", function(d) {
    if (d > 105000) {   //Threshold of 15
        return "red";
    } else {
        return "black";
    }
	});
	d3.select("body").selectAll("div").data(dataset).enter().append("div").attr("class","bar").style("height", function(d) {return d/1000 + "px";});
	//Width and height
	var w = 500;
	var h = 50;
	var svg = d3.select("body").append("svg")
            .attr("width", w)
            .attr("height", h);

    var circles = svg.selectAll("circle")
    .data(dataset)
    .enter()
    .append("circle");

    circles.attr("cx", function(d, i) {
            return (i * 50) + 25;
        })
       .attr("cy", h/2)
       .attr("r", function(d) {
            return d/10000;
       });
});