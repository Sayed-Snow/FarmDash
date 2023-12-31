import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js';

const Dashboard = () => {
  const myChartRef = useRef(null);

  useEffect(() => {
    const myChart = new Chart(myChartRef.current, {
      type: 'bar',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
          {
            label: 'Sales',
            data: [65, 59, 80, 81, 56, 55],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }, []);

  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center justify-center h-screen">
        <div className="bg-white rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold text-center mb-4">Dashboard</h2>
          <div className="px-4 py-8">
            {/* Display chart here */}
            <canvas ref={myChartRef} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;