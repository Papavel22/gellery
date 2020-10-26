import Api from "./Api";

export const getUserByName = (name) => {
    return Api().get(`users/${name}`)
}
