import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContatAlbum } from 'src/core/contat-album.interface';
import { DescriptionAlbum } from 'src/core/description-album.interface';
import { ContatPhotoService } from '../services/contat/contat-photo.service';
import { UsuarioService } from '../services/usuario/usuario.service';

@Component({
  selector: 'app-specific',
  templateUrl: './specific.component.html',
  styleUrls: ['./specific.component.css'],
})
export class SpecificComponent {
  photoPorId: DescriptionAlbum = {
    albumId: 1,
    id: 1,
    title: 'accusamus beatae ad facilis cum similique qui sunt',
    url: 'https://via.placeholder.com/600/92c952',
    thumbnailUrl: 'https://via.placeholder.com/150/92c952',
  };

  contatPorPhoto: ContatAlbum[] = [];
  newIdContat: number = 101;

  constructor(
    private usuarioService: UsuarioService,
    private routes: ActivatedRoute,
    private contatPhotoService: ContatPhotoService
  ) {
    this.routes.queryParams.subscribe((params) => {
      this.listarProdutoPorId(+params['id']);
    });
    this.routes.queryParams.subscribe((params) => {
      this.listarComentarioPorId(+params['id']);
    });
  }
  listarProdutoPorId(id: number) {
    this.usuarioService.getID(id).subscribe((data) => (this.photoPorId = data));
  }
  listarComentarioPorId(id: number) {
    this.contatPhotoService
      .getID(id)
      .subscribe((data) => (this.contatPorPhoto = data));
  }
}
