export const getAllCats = async (query) => {
  let url = `https://catfact.ninja/breeds?page=${query}`;
  try {
    let response = await fetch(
      `${query ? url : "https://catfact.ninja/breeds"}`
    );
    return response.json();
  } catch (error) {
    return error;
  }
};
