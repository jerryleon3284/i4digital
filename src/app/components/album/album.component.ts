import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ImagesAlbum } from '../../models/albums/ImagesAlbum';
import { Store } from '@ngrx/store';
import * as fromStore from 'src/app/store';
import { Album } from '../../models/albums/album';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {
  images: ImagesAlbum[] = [];
  albums: Album[]= [];
  constructor(private dataService: DataService,
    public store: Store<fromStore.AppState>) {
      store.select(fromStore.getAlbums).subscribe((res) => {
        this.albums = res;
        console.log(this.albums);
      });
    }

  ngOnInit(): void {
    this.dataService.getImages().subscribe(Oimages => {
      this.images = Oimages;
    });

  }

}
