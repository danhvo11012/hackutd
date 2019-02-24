
var svg = d3.select(".line-chart")
  .attr("width", svgWidth)
  .attr("height", svgHeight)
  .attr("class", "line-chart")
  .append("g")


d3.json("data.json", function(error, data) {
  if(error) throw error;

  //format data
  data.forEach(function(d) {

  });
})
