import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpecificComponent } from './specific/specific.component';
import { AllComponent } from './all/all.component';
import { UsuarioService } from './services/usuario/usuario.service';
import { PostComponent } from './post/post/post.component';

@NgModule({
  declarations: [AppComponent, SpecificComponent, AllComponent, PostComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
  ],
  providers: [UsuarioService],
  bootstrap: [AppComponent],
})
export class AppModule {}
