// components/PostPerformance.js

import React from 'react';
import { Bar } from 'react-chartjs-2';

function PostPerformance({ data }) {
  const chartData = {
    labels: data.map(item => item.message),
    datasets: [
      {
        label: 'Engagement Rate',
        data: data.map(item => item.engagementRate),
        backgroundColor: 'rgba(75,192,192,0.6)'
      }
    ]
  };

  return (
    <div className="post-performance">
      <h2>Post Performance</h2>
      <Bar data={chartData} />
    </div>
  );
}

export default PostPerformance;
