export interface VideoProps {
  video: {
    id?: string;
    snippet: {
      title: string;
      channelTitle: string;
      description: string;
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
    channelId: string;
    title: string;
    channelTitle: string;
    description: string;
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

export interface ChannelProps {
  id: string;
  snippet: {
    title: string;
    description: string;
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
    };
  };
  statistics: {
    subscriberCount: string;
    videoCount: string;
    viewCount: string;
  };
}

export interface CommentProps {
  comment: {
    id: string;
    username: string;
    userimage: string;
    comment: string;
    replies?: {
      id: string;
      username: string;
      userimage: string;
      comment: string;
    }[];
  };
  size?: number;
}
