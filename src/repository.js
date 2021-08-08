import { isValidToken, queryToUrl } from "@/pureFunctions";

export const login = (token) => {
  const API_DELAY = 3 * 1000;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isValidToken(token)) {
        resolve({
          data: { success: true },
        });
      } else {
        reject({
          message: "Token is not valid",
        });
      }
    }, API_DELAY);
  });
};

/**
 * @param {Object} query
 * @returns {Promise<unknown>}
 */
export const getBooks = (query) => {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await fetch(
        `https://www.googleapis.com/books/v1/volumes${queryToUrl(query)}`
      );
      const json = await data.json();
      resolve(json);
    } catch (e) {
      reject(e);
    }
  });
};
