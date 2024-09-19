async function csvToJson(url) {
  // Step 1: Fetch the CSV from the provided URL
  const response = await fetch(url);
  const csvText = await response.text();

  // Step 2: Parse the CSV text
  const csvLines = csvText.split("\n");
  const headers = csvLines[0].split(","); // First row is the header

  // Step 3: Convert each row into an object
  const jsonArray = csvLines.slice(1).map((line) => {
    const values = line.split(",");
    const obj = {};
    headers.forEach((header, index) => {
      obj[header.trim()] = values[index] ? values[index].trim() : null;
    });
    return obj;
  });

  // Step 4: Return or log the JSON array
  return jsonArray;
}

const SANS_SERIF = '"SF Pro Display", -apple-system, system-ui, "system-ui", Inter, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';
const SERIF = '"Noto Serif", Georgia, Cambria, "Times New Roman", Times, serif';
const TAB20_COLORS = [
  "#1f77b4",
  "#aec7e8",
  "#ff7f0e",
  "#ffbb78",
  "#2ca02c",
  "#98df8a",
  "#d62728",
  "#ff9896",
  "#9467bd",
  "#c5b0d5",
  "#8c564b",
  "#c49c94",
  "#e377c2",
  "#f7b6d2",
  "#7f7f7f",
  "#c7c7c7",
  "#bcbd22",
  "#dbdb8d",
  "#17becf",
  "#9edae5",
];

const TAB20B_COLORS = [
  "#393b79",
  "#5254a3",
  "#6b6ecf",
  "#9c9ede",
  "#637939",
  "#8ca252",
  "#b5cf6b",
  "#cedb9c",
  "#8c6d31",
  "#bd9e39",
  "#e7ba52",
  "#e7cb94",
  "#843c39",
  "#ad494a",
  "#d6616b",
  "#e7969c",
  "#7b4173",
  "#a55194",
  "#ce6dbd",
  "#de9ed6",
];

const TAB20C_COLORS = [
  "#3182bd",
  "#6baed6",
  "#9ecae1",
  "#c6dbef",
  "#e6550d",
  "#fd8d3c",
  "#fdae6b",
  "#fdd0a2",
  "#31a354",
  "#74c476",
  "#a1d99b",
  "#c7e9c0",
  "#756bb1",
  "#9e9ac8",
  "#bcbddc",
  "#dadaeb",
  "#636363",
  "#969696",
  "#bdbdbd",
  "#d9d9d9",
];

function toggleAllSeriesOff(chart) {
  chart.series.forEach(function (series) {
    series.setVisible(false, false); // Hide series without animation
  });
  chart.redraw();
}

function toggleAllSeriesOn(chart) {
  chart.series.forEach(function (series) {
    series.setVisible(true, false); // Show series without animation
  });
  chart.redraw();
}

function chartWatermark() {
    const chart = this;

    chart.renderer.image(
        "/assets/logo.png", // URL to the watermark image
        chart.plotLeft + chart.plotWidth - 100, // X position
        chart.plotTop + chart.plotHeight - 100, // Y position
        80,
        80
    )
    .css({
        opacity: 0.2  // Set transparency
    })
    .add();

    // Add a custom watermark (text)
    chart.renderer.text(
        'Blind Squirrel Macro',  // Text for the watermark
        chart.plotWidth - 225,  // X position
        chart.plotTop + chart.plotHeight - 50  // Y position
    )
    .css({
        fontFamily: SANS_SERIF,  // Font family
        color: 'rgb(55, 82, 93)',   // Text color
        fontSize: '20px',   // Font size
        fontWeight: 'bold',
        opacity: 0.1        // Text transparency
    })
    .add();
}
