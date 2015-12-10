var margin = {top: 20, right: 20, bottom: 60, left: 80},
    width = 1500 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

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
    .ticks(10, "%");

var svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

d3.json("../data files/json/arableAfrica2010.json", function(error, data) {
  if (error) throw error;

  x.domain(data.map(function(d) { return d["Country Name"]; }));
  y.domain([0, d3.max(data, function(d) { return d[2010]; })]);

  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)
      .selectAll("text")
      .attr("transform", "rotate(-90)")
      .style("text-anchor", "end")
      .attr("dx", "-.71em")
      .attr("dy", "-.71em");

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text(2010);

  svg.selectAll(".bar")
      .data(data)
    .enter().append("rect")
      .attr("class", "bar")
      .attr("x", function(d) { return x(d["Country Name"]); })
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return y(d[2010]); })
      .attr("height", function(d) { return height - y(d[2010]); });
});

function type(d) {
  d[2010] = +d[2010];
  return d;
}
