
import YTSearch from 'youtube-api-search';
import { API_KEY } from './../config'


export const videosLoaded = (videos) => {
    console.log('videosLoaded action', videos);
    return{
        type: 'VIDEOS_LOADED',
        payload: videos
    }
}
export const addVideos =(text) => {
    console.log('add videos text=', text);
    return {
        type: 'ADD_VIDEO',
        payload: text
    }
}

//Async action
export const searchVideo = (text) => {
    return (dispatch) => {
        YTSearch({key: API_KEY, term: text}, (videos) => {
            console.log('api youtobe', videos);
            dispatch(videosLoaded(videos));
        });
    }
}