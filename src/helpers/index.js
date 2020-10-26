export const generateUrl = (params) => {
    const category = params.category ? `topics/${params.category}`: ''
    const query = params.searchQuery ? `&query=${params.searchQuery}` : ''
    const url = `${ category || ( params.searchQuery ? 'search' : '') }/photos/?page=${params.lastLoadedPage}${query}`
    return url
}
