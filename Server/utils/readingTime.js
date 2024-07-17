export const calculateReadingTime = (content) => {
    const wordsPerMinute = 200; // Average reading speed
    const textLength = content.split(' ').length; // Split by spaces to get word count
    // console.log("text length",textLength);
    const readingTime = Math.ceil(textLength / wordsPerMinute);
    return readingTime;
};