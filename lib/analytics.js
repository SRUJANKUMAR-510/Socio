// lib/analytics.js

// Calculate engagement metrics for posts
export function calculateEngagementMetrics(posts) {
    const engagementData = posts.map(post => ({
      id: post.id,
      message: post.message,
      likes: post.likes ? post.likes.data.length : 0,
      comments: post.comments ? post.comments.data.length : 0,
      created_time: new Date(post.created_time)
    }));
  
    const totalEngagement = engagementData.reduce((acc, post) => acc + post.likes + post.comments, 0);
    const averageEngagement = totalEngagement / engagementData.length;
  
    return {
      engagementData,
      averageEngagement
    };
  }
  
  // Calculate follower growth rate over time
  export function calculateFollowerGrowth(followers) {
    if (followers.length < 2) return [];
  
    const growthData = [];
    for (let i = 1; i < followers.length; i++) {
      const previous = followers[i - 1];
      const current = followers[i];
      const growthRate = ((current.count - previous.count) / previous.count) * 100;
      growthData.push({
        date: new Date(current.date),
        growthRate
      });
    }
    return growthData;
  }
  
  // Analyze post performance based on engagement and reach
  export function analyzePostPerformance(posts) {
    return posts.map(post => ({
      id: post.id,
      message: post.message,
      likes: post.likes ? post.likes.data.length : 0,
      comments: post.comments ? post.comments.data.length : 0,
      engagementRate: (post.likes ? post.likes.data.length : 0) + (post.comments ? post.comments.data.length : 0),
      created_time: new Date(post.created_time)
    })).sort((a, b) => b.engagementRate - a.engagementRate); // Sort by engagement rate in descending order
  }
  
  // Compare user metrics with competitor metrics
  export function compareWithCompetitors(userMetrics, competitorMetrics) {
    const userEngagementRate = userMetrics.reduce((acc, metric) => acc + metric.likes + metric.comments, 0) / userMetrics.length;
    const competitorEngagementRate = competitorMetrics.reduce((acc, metric) => acc + metric.likes + metric.comments, 0) / competitorMetrics.length;
  
    return {
      user: {
        metrics: userMetrics,
        averageEngagementRate: userEngagementRate
      },
      competitor: {
        metrics: competitorMetrics,
        averageEngagementRate: competitorEngagementRate
      }
    };
  }
  