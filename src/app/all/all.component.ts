import { Component, Injectable, Input, OnInit } from '@angular/core';
import { AlbumTitle } from 'src/core/album-title.interface';
import { DescriptionAlbum } from 'src/core/description-album.interface';
import { AlbumService } from '../services/album/album.service';
import { UsuarioService } from '../services/usuario/usuario.service';
@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css'],
})
@Injectable()
export class AllComponent implements OnInit {
  title = 'album';
  photos: DescriptionAlbum[] = [];
  albums: AlbumTitle[] = [];
  p: number = 1;
  constructor(
    public usuarioService: UsuarioService,
    private albumService: AlbumService
  ) {}

  ngOnInit() {
    this.albumService
      .get()
      .subscribe((data) => console.log((this.albums = data)));
    this.usuarioService.get().subscribe((response) => (this.photos = response));
  }
}
