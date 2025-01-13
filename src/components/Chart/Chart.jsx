import Chart from "react-apexcharts";
const options = {
  labels: ["expence", "income"],
  colors: ["#FD5E53", "#21BF73"],
  chart: {
    width: "50px",
  },
  states: {
    hover: {
      filter: {
        type: "none",
      },
    },
  },
  legend: {
    show: false,
  },
  datalabels: {
    enabled: false,
  },
  hover: { mode: null },
  plotOptions: {
    donut: {
      expandOnClick: false,
      donut: {
        labels: {
          show: false,
        },
      },
    },
  },
  fill: {
    colors: ["#FD5E52", "#21BF73"],
  },
  tooltip: {
    enabled: true,
    theme: "dark",
    style: {
      fontSize: "12px",
      fontFamily: undefined,
      backgroundColor: "#000000",
    },
  },
};
export default function TransactionChartSummary({
  income = 100,
  expence = 100,
}) {
  return (
    <Chart
      options={options}
      series={[income, expence]}
      type="pie"
      width={"100%"}
      height={"100%"}
    />
  );
}
