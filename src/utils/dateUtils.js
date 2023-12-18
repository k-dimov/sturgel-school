export const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    const transformedDate = date.toLocaleDateString('en-GB');
    return transformedDate;
};


export const sortByDate = (arr) => {
    return arr.sort((a, b) => a.data.createdOn < b.data.createdOn ? 1 : (a.data.createdOn > b.data.createdOn ? -1 : 0));
}