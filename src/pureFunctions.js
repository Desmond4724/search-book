/**
 * @returns {string}
 * @param {Object} obj
 */
export const queryToUrl = (obj) => {
  let query = "?";
  Object.keys(obj).forEach((item) => {
    query += item + "=" + obj[item] + "&";
  });
  return query.substr(0, query.length - 1);
};

/**
 *
 * @param{string} token
 * @returns {boolean}
 */
export const isValidToken = (token) => {
  return new RegExp("[a-zA-Z]{16,}").test(token);
};
