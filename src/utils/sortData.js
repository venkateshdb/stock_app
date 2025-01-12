export const sortData = (data, type, sortOrder) => {

    const sorted = [...data].sort((a, b) => {
        if (sortOrder === "asc") {
            return new Date(a[type]) - new Date(b[type]);
        } else {
            return new Date(b[type]) - new Date(a[type]);
        }
    });

    return sorted;
};