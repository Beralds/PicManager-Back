import { IAlbum } from '../../../models/album';
import { IUser } from '../../../models/user';
import { UsersRepo } from './../../repos/usersRepo';
import { PhotosRepo } from './../../repos/photosRepo';

export const getAll = async (): Promise<IUser[]> => {
  return await UsersRepo.getAll();
}

export const getAlbums = async (userId: string): Promise<IAlbum[]> => {
  const photos = await PhotosRepo.getAll();
  const albums = await UsersRepo.getAlbums(userId);

  albums.forEach(album => {
    const albumPhotos = photos.filter((photo) => photo.albumId === album.id);
    album.photos = albumPhotos;
  });

  return albums;
}