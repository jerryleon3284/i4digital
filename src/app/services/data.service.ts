import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ImagesAlbum } from '../models/albums/ImagesAlbum';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getImages() {
    return this.http.get<ImagesAlbum[]>(
      '/../../../assets/data/images.json'
    );
  }
}
