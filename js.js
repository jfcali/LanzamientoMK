$( document ).ready(function() {
	var dataset = [ 95429, 103815, 106020, 123200, 138929, 153943, 169979, 188329 ,1000,10000,10001,40000,50000,123000,123773];
	var datasetFinal = [ [2012,95429], [2013,103815], [2014,106020], [2015,123200], [2016,138929], [2017,153943], [2018,169979], [2019,188329] ];
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
	var h = 500;
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

var scaleY = d3.scale.linear()
.domain([0, d3.max(dataset, function(d){
	return d;
})]).range([0, h/2]);

	var barPadding = 1;
	var svg2 = d3.select("body")
            .append("svg")
            .attr("width", w)
            .attr("height", h)
   .style("float", "left");

   	svg2.selectAll("rect")
   .data(dataset)
   .enter()
   .append("rect")
   .attr("x", function(d,i){
   	return i*(w/dataset.length);
   })
   .attr("y", function(d){
   	return h-scaleY(d);
   })
   .attr("width", function(d,i){
   	return w/dataset.length-barPadding;
   })
   .attr("height", function(d){
   	return scaleY(d);
   })
   .attr("fill", "teal");

   svg2.selectAll("text")
   .data(dataset)
   .enter()
   .append("text")
   .text(function(d){
   		return d;
   })
   .attr("x", function(d,i){
   	return i*(w/dataset.length) + (w/dataset.length-barPadding)/2;
   })
   .attr("y", function(d){
   	return h-scaleY(d) + 10;
   })
   .attr("font-family", "sans-serif")
   .attr("font-size", "9px")
   .attr("fill", "white")
   .attr("text-anchor", "middle");


//tercer intento mas bonito
	var svg3 = d3.select("body")
            .append("svg")
            .attr("width", w)
            .attr("height", h);

	var sX = d3.scale.linear()
			.domain([0, datasetFinal.length])
			.range([0, w]);

	var sY = d3.scale.linear()
			.domain([0, d3.max(datasetFinal, function(d){return d[1];})])
			.range([0, h/2]);

   var xAxis = d3.svg3.axis()
   			.scale(sX)
   			.orient(bottom);
   var yAxis = d3.svg3.axis()
   			.scale(sY)
   			.orient(bottom);

   	svg3.selectAll("rect")
   .data(datasetFinal)
   .enter()
   .append("rect")
   .attr("x", function(d,i){
   	return i*(w/datasetFinal.length);
   })
   .attr("y", function(d){
   	return h-sY(d[1]);
   })
   .attr("width", function(d,i){
   	return w/datasetFinal.length-barPadding;
   })
   .attr("height", function(d){
   	return scaleY(d[1]);
   })
   .attr("fill", "black");

   svg3.selectAll("text")
   .data(datasetFinal)
   .enter()
   .append("text")
   .text(function(d){
   		return d[1];
   })
   .attr("x", function(d,i){
   	return i*(w/datasetFinal.length) + (w/datasetFinal.length-barPadding)/2;
   })
   .attr("y", function(d){
   	return h-sY(d[1]) + 10;
   })
   .attr("font-family", "sans-serif")
   .attr("font-size", "9px")
   .attr("fill", "white")
   .attr("text-anchor", "middle");

   svg3.append("g")
   		.attr("class","axis")
   		.call(xAxis);
   svg3.append("g")
   		.attr("class","axis")
   		.call(yAxis);
});