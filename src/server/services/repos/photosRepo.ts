import axios from "axios";
import { IPhoto } from "../../models/photo";

export const getAll = async (): Promise<IPhoto[]> => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/photos/');
    const processedData = response.data;
    return processedData;
  } catch {
    return [];
  }
};

export const PhotosRepo = {
  getAll,
};