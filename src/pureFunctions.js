/**
 * @returns {string}
 * @param {Object} obj
 */
export const queryToUrl = (obj) => {
  let query = "?";
  Object.keys(obj).forEach((item) => {
    query += item + "=" + obj[item] + "&";
  });
  return query;
};
