import axios from "axios";

axios.defaults.baseURL = "https://dummyjson.com/products";

export async function getAll(skip = 0) {
  try {
    const { data } = await axios.get(`?limit=5&skip=${skip}`);
    const result = await data.products;
    console.log(result, "result");
    return result;
  } catch (error) {
    console.log(error);
  }
}

export async function getById(id) {
  try {
    const { data } = await axios.get(`/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getByCategory(category) {
  try {
    const { data } = await axios.get(`/${category}`);
    return data;
  } catch (error) {
    console.log(error);
  }
}
