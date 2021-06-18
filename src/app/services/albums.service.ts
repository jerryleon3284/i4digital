import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Album } from '../models/albums/album';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  constructor(private http: HttpClient) { }


  getAlbums(){
    return this.http.get<Album[]>(`${environment.url}/albums`)
  }
}
