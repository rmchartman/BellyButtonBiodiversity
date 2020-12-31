function init() {
    var selector = d3.select("#selDataset");
  
    d3.json("static/data/samples.json").then((data) => {
      var sampleNames = data.names;
      sampleNames.forEach((sample) => {
        selector
          .append("option")
          .text(sample)
          .property("value", sample);
      });
  })}
  
  init();

function optionChanged(newSample) {
  buildMetadata(newSample);
  buildCharts(newSample);
}

function buildMetadata(sample) {
    d3.json("static/data/samples.json").then((data) => {
      var metadata = data.metadata;
      var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
      var result = resultArray[0];
      var PANEL = d3.select("#sample-metadata");
      console.log(result.id);

      PANEL.html("");
      PANEL.append("h6").text(`${result.id}`);
      PANEL.append("h6").text(`${result.ethinicity}`);
      PANEL.append("h6").text(`${result.gender}`);
      PANEL.append("h6").text(`${result.age}`);
      PANEL.append("h6").text(`${result.location}`);
      PANEL.append("h6").text(`${result.bbtype}`);
      PANEL.append("h6").text(`${result.wfreq}`);
    });
  }