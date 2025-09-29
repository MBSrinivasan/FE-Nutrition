"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Dynamically import ECharts to avoid SSR issues
const ReactECharts = dynamic(() => import("echarts-for-react"), {
  ssr: false,
});

const EChartsWrapper = ({ options, type = "pie" }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <div style={{ height: "300px", width: "100%" }}>Loading chart...</div>;
  }

  return (
    <ReactECharts
      option={options}
      style={{ height: "300px", width: "100%" }}
    />
  );
};

export default EChartsWrapper;
