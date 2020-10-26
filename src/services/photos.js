import Api from './Api'
import {generateUrl} from "../helpers";

export const getRandomPhoto = () => {
    return Api({count: 1,}).get('photos/random')
}

export const getPhotos = (option) => {
    const url = generateUrl(option)
    return Api({per_page: 15,}).get(url)
}

export const getPhotoById = (id) => {
    return Api().get(`photos/${id}`)
}
