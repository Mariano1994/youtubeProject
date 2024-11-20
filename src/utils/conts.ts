export const MY_YOUTUBE_KEY = "AIzaSyACiM3hzVh_b35-dhP-2DBMDiF20qlGgsU";

export const YOUTUBE_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key=${MY_YOUTUBE_KEY}`;

export const YOUTUBE_SEARCH_SUGGESTIONS_API = `//corsproxy.io/?http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=`;

export const LiveCommentsLimit = 100;
