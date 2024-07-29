// app/dashboard.js

import axios from 'axios';
import { useSession } from 'next-auth/client';
import { useEffect, useState } from 'react';
import CompetitorBenchmarking from '../components/CompetitorBenchmarking';
import EngagementMetrics from '../components/EngagementMetrics';
import FollowerGrowth from '../components/FollowerGrowth';
import PostPerformance from '../components/PostPerformance';

export default function Dashboard() {
  const [session, loading] = useSession();
  const [data, setData] = useState(null);

  useEffect(() => {
    if (session) {
      async function fetchData() {
        const result = await axios.get('/api/data/facebook'); // Replace with actual API endpoint
        setData(result.data);
      }
      fetchData();
    }
  }, [session]);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="dashboard">
      {data && (
        <>
          <EngagementMetrics data={data.engagementMetrics} />
          <FollowerGrowth data={data.followerGrowth} />
          <PostPerformance data={data.postPerformance} />
          <CompetitorBenchmarking data={data.competitorBenchmarking} />
        </>
      )}
    </div>
  );
}
