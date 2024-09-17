export const getErrorMessage = (response) => {
  if (response.message) {
    if (Array.isArray(response.message)) {
      return response.message[0];
    } else {
      return response.message;
    }
  } else {
    return "Unknown error occured.";
  }
};
