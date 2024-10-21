export interface VideoProps {
  video: {
    id: string;
    snippet: {
      title: string;
      channelTitle: string;
      descriptoin: string;
      publishedAt: string;
      thumbnails: {
        default: {
          height: number;
          url: string;
          width: number;
        };
        high: {
          height: number;
          url: string;
          width: number;
        };
        medium: {
          height: number;
          url: string;
          width: number;
        };
        standard: {
          height: number;
          url: string;
          width: number;
        };
      };
    };
    statistics: {
      commentCount: string;
      favoriteCount: string;
      likeCount: string;
      viewCount: string;
    };
  };
}

export interface VideoIDPros {
  snippet: {
    title: string;
    channelTitle: string;
    descriptoin: string;
    publishedAt: string;
    thumbnails: {
      default: {
        height: number;
        url: string;
        width: number;
      };
      high: {
        height: number;
        url: string;
        width: number;
      };
      medium: {
        height: number;
        url: string;
        width: number;
      };
      standard: {
        height: number;
        url: string;
        width: number;
      };
    };
  };
  statistics: {
    commentCount: string;
    favoriteCount: string;
    likeCount: string;
    viewCount: string;
  };
}
