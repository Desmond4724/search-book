/**
 * @typedef {Object} ImageBook
 * @property {string} small - image of books in imageLinks smallThumbnail
 * @property {string} normal - image of books in imageLinks thumbnail
 */

/**
 * @typedef {Object} Book
 * @property {string} title - title of books
 * @property {string} description - description of books
 * @property {ImageBook} images _images
 * @property {string} authors authors
 */

/**
 * @param books
 * @returns {Array<Book>}
 */
const parseBooks = (books) => {
  return books.map((item) => {
    const { volumeInfo } = item;
    return {
      title: volumeInfo.title,
      description: volumeInfo.description || "No description",
      authors: (volumeInfo.authors || []).join(", "),
      images: {
        small: volumeInfo.imageLinks && volumeInfo.imageLinks.smallThumbnail,
        normal: volumeInfo.imageLinks && volumeInfo.imageLinks.thumbnail,
      },
    };
  });
};

/**
 * @typedef {Object} Result
 * @property {number} totalItems
 * @property {Array<Book>} items
 * @param data
 * @returns {Result}
 */
export const parseJsonDataFromGoogle = (data) => {
  return {
    items: parseBooks(data.items),
    totalItems: data.totalItems,
  };
};
