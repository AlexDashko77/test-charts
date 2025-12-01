import html2canvas from "html2canvas";

export function ExportChartAsPng() {
  const chartEl = document.getElementById("chart-export-container");
  if (!chartEl) return;

  html2canvas(chartEl, {
    backgroundColor: "#ffffff", 
    scale: 2,                   
  }).then((canvas) => {
    const link = document.createElement("a");
    link.download = "chart.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  });
}
