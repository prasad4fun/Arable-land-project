function FormatYaxis(d){console.log(d);return d;}
var margin = {top: 20, right: 20, bottom: 30, left: 40},
    width = 1500 - margin.left - margin.right,
    height = 600 - margin.top - margin.bottom;

var x = d3.scale.ordinal()
    .rangeRoundBands([0, width], .1);

var y = d3.scale.linear()
    .range([height, 0]);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    .tickFormat(FormatYaxis);

var svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

d3.json("../data files/json/arableIndiaPercent.json", function(error, data) {
  if (error) throw error;

  x.domain(data.map(function(d) { return d.Year; }));
  y.domain([52, d3.max(data, function(d) { return d.Value; })]);

  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("Arable land %");

  svg.selectAll(".bar")
      .data(data)
    .enter().append("rect")
      .attr("class", "bar")
      .attr("x", function(d) { return x(d.Year); })
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return y(d.Value); })
      .attr("height", function(d) { return height - y(d.Value); });
});

function type(d) {
  d.Value = +d.Value;
  return d;
}
