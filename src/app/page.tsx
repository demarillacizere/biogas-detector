"use client";
import { useState, useEffect } from "react";
import Layout from "./Layout";
import LineChart from "./components/LineChart";

const IndexPage = () => {
  const [currentValue, setCurrentValue] = useState(50);
  const [optimumValue, setOptimumValue] = useState(65);
  const [history, setHistory] = useState<number[]>([]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newCurrentValue = Math.round(
        Math.random() * (optimumValue * 2 - 10) + 10
      );
      setCurrentValue(newCurrentValue);
      setHistory((prev) => [...prev, newCurrentValue]);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [optimumValue]);

  return (
    <Layout>
      <div className="flex flex-col space-y-4">
        <div className="bg-white shadow-md p-4 flex items-center justify-between">
          <div className="flex-1">
            <div className="text-gray-400 font-medium">Current Value</div>
            <div className="text-3xl font-bold text-black">{currentValue}</div>
          </div>
          <div className="flex-1">
            <div className="text-gray-400 font-medium">Optimum Value</div>
            <div className="text-3xl font-bold text-black">{optimumValue}</div>
          </div>
        </div>
        <div className="bg-white shadow-md p-4">
          <LineChart data={history} optimum={optimumValue} />
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
