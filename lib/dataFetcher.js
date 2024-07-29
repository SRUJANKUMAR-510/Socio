// lib/dataFetcher.js

import axios from 'axios';

export async function fetchFacebookData(token) {
  const apiUrl = `https://graph.facebook.com/v10.0/me?fields=id,name,posts{message,created_time,likes,comments}&access_token=${token}`;
  return fetchData(apiUrl);
}

export async function fetchTwitterData(token) {
  const apiUrl = 'https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=your_screen_name&count=100';
  return fetchData(apiUrl, token);
}

export async function fetchInstagramData(token) {
  const apiUrl = `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp&access_token=${token}`;
  return fetchData(apiUrl);
}

async function fetchData(apiUrl, token) {
  try {
    const response = await axios.get(apiUrl, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}
