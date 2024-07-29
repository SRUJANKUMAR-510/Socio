// app/api/data/[platform].js

import { getSession } from "next-auth/client";
import { fetchData } from "../../../lib/dataFetcher";

export default async (req, res) => {
  const session = await getSession({ req });
  if (!session) {
    return res.status(401).json({ message: "Not authenticated" });
  }

  const { platform } = req.query;
  let apiUrl;

  switch (platform) {
    case 'facebook':
      apiUrl = 'https://graph.facebook.com/v10.0/me?fields=id,name,posts{message,created_time,likes,comments}';
      break;
    case 'twitter':
      apiUrl = 'https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=your_screen_name&count=100';
      break;
    case 'instagram':
      apiUrl = 'https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp';
      break;
    default:
      return res.status(400).json({ message: "Invalid platform" });
  }

  const data = await fetchData(apiUrl, session.accessToken);
  res.json(data);
};
