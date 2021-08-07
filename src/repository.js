const API_DELAY = 500;

export const isValidToken = (token) => {
  return new RegExp("[a-zA-Z]{16,}").test(token);
};

export const login = (token) => {
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
