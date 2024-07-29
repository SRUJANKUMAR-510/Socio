// components/FollowerGrowth.js

import React from 'react';
import { Line } from 'react-chartjs-2';

function FollowerGrowth({ data }) {
  const chartData = {
    labels: data.map(item => item.date.toLocaleDateString()),
    datasets: [
      {
        label: 'Follower Growth Rate (%)',
        data: data.map(item => item.growthRate),
        fill: false,
        borderColor: 'rgba(75,192,192,1)'
      }
    ]
  };

  return (
    <div className="follower-growth">
      <h2>Follower Growth</h2>
      <Line data={chartData} />
    </div>
  );
}

export default FollowerGrowth;
