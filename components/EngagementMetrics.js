// components/EngagementMetrics.js

import React from 'react';
import { Bar } from 'react-chartjs-2';

function EngagementMetrics({ data }) {
  const chartData = {
    labels: data.map(item => item.message),
    datasets: [
      {
        label: 'Likes',
        data: data.map(item => item.likes),
        backgroundColor: 'rgba(75,192,192,0.6)'
      },
      {
        label: 'Comments',
        data: data.map(item => item.comments),
        backgroundColor: 'rgba(153,102,255,0.6)'
      }
    ]
  };

  return (
    <div className="engagement-metrics">
      <h2>Engagement Metrics</h2>
      <Bar data={chartData} />
    </div>
  );
}

export default EngagementMetrics;
