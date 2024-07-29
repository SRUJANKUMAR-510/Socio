// components/CompetitorBenchmarking.js

import React from 'react';
import { Bar } from 'react-chartjs-2';

function CompetitorBenchmarking({ data }) {
  const chartData = {
    labels: ['User', 'Competitor'],
    datasets: [
      {
        label: 'Average Engagement Rate',
        data: [data.user.averageEngagementRate, data.competitor.averageEngagementRate],
        backgroundColor: ['rgba(75,192,192,0.6)', 'rgba(153,102,255,0.6)']
      }
    ]
  };

  return (
    <div className="competitor-benchmarking">
      <h2>Competitor Benchmarking</h2>
      <Bar data={chartData} />
    </div>
  );
}

export default CompetitorBenchmarking;
