export const formatDate = (isoDate) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(isoDate);
    const transformedDate = date.toLocaleDateString('en-US', options);
    return transformedDate;
};