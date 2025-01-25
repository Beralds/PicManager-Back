import { IPhoto } from "./photo";

export interface IAlbum {
  userId: number;
  id: number;
  title: string;
  photos: IPhoto[];
}