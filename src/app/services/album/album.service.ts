import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlbumTitle } from 'src/core/album-title.interface';

@Injectable({
  providedIn: 'root',
})
export class AlbumService {
  albumURL = 'https://jsonplaceholder.typicode.com/albums';
  constructor(private httpCliente: HttpClient) {}
  get() {
    return this.httpCliente.get<AlbumTitle[]>(this.albumURL);
  }
}
