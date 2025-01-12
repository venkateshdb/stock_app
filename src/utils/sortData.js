export const sortData = (data, type, sortOrder) => {
    const sorted = [...data].sort((a, b) => {

        if (sortOrder === "asc") {
            // setSortOrder("asc");
            return new Date(a[type]) - new Date(b[type]);
        } else {
            // setSortOrder("desc");
            return new Date(b[type]) - new Date(a[type]);
        }
    });
    return sorted;
};