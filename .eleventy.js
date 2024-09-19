

module.exports = function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy("assets");
    eleventyConfig.addPassthroughCopy("data");
    eleventyConfig.addFilter("datefmt", (dateStr) => {
        const date = new Date(dateStr);
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
        return `${monthNames[date.getMonth()]} ${date.getDate() + 1}, ${date.getFullYear()}`;
    });

};
