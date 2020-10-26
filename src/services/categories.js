import Api from "./Api";

export const getCategories = () => {
   return  Api().get('topics')
}
