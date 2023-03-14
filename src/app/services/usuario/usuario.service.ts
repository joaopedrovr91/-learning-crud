import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DescriptionAlbum } from 'src/core/description-album.interface';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  baseUrl = 'https://jsonplaceholder.typicode.com/photos';
  constructor(private httpCliente: HttpClient) {}

  get() {
    return this.httpCliente.get<DescriptionAlbum[]>(this.baseUrl);
  }
  getID(idEspecifico: number) {
    return this.httpCliente.get<DescriptionAlbum>(
      this.baseUrl + `/` + idEspecifico
    );
  }
}
