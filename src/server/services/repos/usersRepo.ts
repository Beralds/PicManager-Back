import axios from "axios";
import { IAlbum } from "../../models/album";
import { IUser } from "../../models/user";

export const getAll = async (): Promise<IUser[]> => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users/');
    const processedData = response.data;
    return processedData;
  } catch {
    return [];
  }
};

export const getAlbums = async (userId: string): Promise<IAlbum[]> => {
  try {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}/albums`);
    const processedData = response.data;
    return processedData;
  } catch {
    return [];
  }
};

export const UsersRepo = {
  getAll,
  getAlbums,
};