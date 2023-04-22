import { Chart} from 'chart.js/auto';
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from 'chart.js/auto'
import {CategoryScale} from 'chart.js'; 
Chart.register(CategoryScale);

type Props = {
  data: number[];
  optimum: number;
};

const LineChart = ({ data, optimum }: Props) => {
  const chartData = {
    labels: data.map((_, index) => index + 1),
    datasets: [
      {
        label: "Current Value",
        data: data,
        fill: false,
        borderColor: "rgba(75,192,192,1)",
        tension: 0.1,
      },
      {
        label: "Optimum Value",
        data: new Array(data.length).fill(optimum),
        fill: false,
        borderColor: "rgba(255,99,132,1)",
        tension: 0.1,
      },
    ],
  };

  const chartOptions = {
    scales: {
      x: {
        display: true,
      },
      y: {
        display: true,
        suggestedMin: 0,
        suggestedMax: Math.max(...data, optimum) + 10,
      },
    },
  };

  return (
    <div className="h-96">
      <Line data={chartData} options={chartOptions} />
    </div>
  );
};

export default LineChart;
