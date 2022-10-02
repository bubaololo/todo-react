export const getTodos = async () => {
  const response = await fetch("https://rockandrolla.tk/read.php");
  const responseData = await response.json();

  return responseData;
};
