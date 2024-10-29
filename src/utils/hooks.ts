import { YOUTUBE_SEARCH_SUGGESTIONS_API } from "./conts";

export async function useYoutubeSuggest(query: string) {
    const suggetions = await fetch(`${YOUTUBE_SEARCH_SUGGESTIONS_API}${query}`)
    const suggetionsInfo = await suggetions.json()

    return suggetionsInfo[1]
}