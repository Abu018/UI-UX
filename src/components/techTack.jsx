import React from "react";
import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const TechStack = () => {
  const languagesAndWeb = {
    labels: [
      "C",
      "C++",
      "Java",
      "Python",
      "HTML",
      "JavaScript",
      "TypeScript",
      "CSS",
    ],
    values: [80, 75, 85, 90, 95, 90, 85, 90],
  };

  const frameworksAndTools = {
    labels: [
      "React",
      "Redux",
      "Tailwind",
      "Express",
      "Socket.IO",
      "NumPy",
      "Node.js",
      "MongoDB",
    ],
    values: [85, 80, 75, 80, 70, 75, 85, 80],
  };

  const createGradient = (ctx) => {
    const gradient = ctx.createLinearGradient(0, 0, 0, 450);
    gradient.addColorStop(0, "rgba(0, 0, 0, 0.2)"); // Start color
    gradient.addColorStop(1, "rgba(0, 0, 0, 0.2)"); // End color
    return gradient;
  };

  const chartOptions = {
    maintainAspectRatio: false,
    scales: {
      r: {
        angleLines: {
          display: true,
        },
        suggestedMin: 0,
        suggestedMax: 100,
        ticks: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const createChartData = (skillsData) => ({
    labels: skillsData.labels,
    datasets: [
      {
        label: "My Skills",
        data: skillsData.values,
        backgroundColor: (context) => createGradient(context.chart.ctx),
        borderColor: "rgba(0, 0, 0, 1)", // Black border color
        borderWidth: 2,
        pointBackgroundColor: "rgba(0, 0, 0, 1)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(0, 0, 0, 1)",
      },
    ],
  });

  return (
    <div className="w-full max-w-[1200px] mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center text-black">Skills</h1>
      <div className="flex flex-wrap justify-center gap-4">
        <div className="w-full xs:w-[300px] sm:w-[400px] md:w-[450px] h-[300px] xs:h-[350px] sm:h-[400px] md:h-[450px]">
          <Radar
            data={createChartData(languagesAndWeb)}
            options={chartOptions}
          />
        </div>
        <div className="w-full xs:w-[300px] sm:w-[400px] md:w-[450px] h-[300px] xs:h-[350px] sm:h-[400px] md:h-[450px]">
          <Radar
            data={createChartData(frameworksAndTools)}
            options={chartOptions}
          />
        </div>
      </div>
    </div>
  );
};

export default TechStack;
