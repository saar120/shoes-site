import axios from "axios";

const store = axios.create({
  baseURL: "https://61c2f39f9cfb8f0017a3e7d9.mockapi.io/",
});

export default class api {
  static getItems = async () => {
    const { data } = await store.get("/ShoesItem");
    return data;
  };
  static getItem = async (id) => {
    const { data } = await store.get("/ShoesItem/" + id);
    return data;
  };

  static deleteItem = async (id) => {
    return await store.delete("/ShoesItem/" + id);
  };

  static addItem = async (item) => {
    const post = await store.post("/ShoesItem/", item);
    return post;
  };

  static editItem = async (item, id) => {
    await store.put(`/ShoesItem/${id}`, item);
  };
}
