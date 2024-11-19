import { createContext, useContext, useEffect, useState } from "react";
import { YOUTUBE_API } from "../utils/conts";

interface ChildrenProps {
  children: React.ReactNode;
}

interface VideoProps {
  videos: {
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
  }[];
  isLoading: boolean;
}

export const VideoContext = createContext<VideoProps>({
  videos: [
    {
      id: "",
      snippet: {
        title: "",
        channelTitle: "",
        description: "",
        publishedAt: "",
        thumbnails: {
          default: {
            height: 0,
            url: "",
            width: 0,
          },
          high: {
            height: 0,
            url: "",
            width: 0,
          },
          medium: {
            height: 0,
            url: "",
            width: 0,
          },
          standard: {
            height: 0,
            url: "",
            width: 0,
          },
        },
      },
      statistics: {
        commentCount: "",
        favoriteCount: "",
        likeCount: "",
        viewCount: "",
      },
    },
  ],
  isLoading: false,
});

export function VideoContextProvider({ children }: ChildrenProps) {
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getVideos() {
      setIsLoading(true);
      const response = await fetch(YOUTUBE_API);
      const data = await response.json();
      setVideos(data.items);

      setIsLoading(false);
    }

    getVideos();
  }, []);

  return (
    <VideoContext.Provider value={{ videos, isLoading }}>
      {children}
    </VideoContext.Provider>
  );
}

export function useVideos() {
  return useContext(VideoContext);
}
