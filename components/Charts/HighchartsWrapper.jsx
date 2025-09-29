"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Dynamically import Highcharts components to avoid SSR issues
const HighchartsReact = dynamic(() => import("highcharts-react-official"), {
  ssr: false,
});

const HighchartsWrapper = ({ options, type = "pie" }) => {
  const [Highcharts, setHighcharts] = useState(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    const loadHighcharts = async () => {
      try {
        console.log("Loading Highcharts for type:", type);
        const HighchartsModule = await import("highcharts");
        const HighchartsInstance = HighchartsModule.default;
        console.log("Highcharts loaded:", HighchartsInstance);
        
        // Load Funnel module if needed
        if (type === "funnel") {
          console.log("Loading Funnel module...");
          const FunnelModule = await import("highcharts/modules/funnel");
          console.log("Funnel module:", FunnelModule);
          FunnelModule.default(HighchartsInstance);
          console.log("Funnel module initialized");
        }
        
        setHighcharts(HighchartsInstance);
        console.log("Highcharts state set");
      } catch (error) {
        console.error("Error loading Highcharts:", error);
      }
    };
    
    loadHighcharts();
  }, [type]);

  if (!isClient) {
    return <div style={{ height: "300px", width: "100%" }}>Loading client...</div>;
  }
  
  if (!Highcharts) {
    return <div style={{ height: "300px", width: "100%" }}>Loading Highcharts...</div>;
  }

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
    />
  );
};

export default HighchartsWrapper;
