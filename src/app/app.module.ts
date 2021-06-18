import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { reducers,effects } from './store';
import { UsersComponent } from './components/users/users.component';
import { AlbumComponent } from './components/album/album.component';
import { PostsComponent } from './components/posts/posts.component';
import { SearchPipe } from './pipes/search.pipe';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';




@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    AlbumComponent,
    PostsComponent,
    SearchPipe,
    MenuComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 10
    }),
    HttpClientModule,
    EffectsModule.forRoot(effects),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
