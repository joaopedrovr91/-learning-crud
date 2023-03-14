import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ContatAlbum } from 'src/core/contat-album.interface';

@Injectable({
  providedIn: 'root',
})
export class ContatPhotoService {
  contatUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private httpCliente: HttpClient) {}

  getID(idEspecifico: number) {
    return this.httpCliente.get<ContatAlbum[]>(
      this.contatUrl + `/` + idEspecifico + `/comments`
    );
  }
}
