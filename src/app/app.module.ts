import { BrowserModule } from '@angular/platform-browser';
import { NgModule, SecurityContext } from '@angular/core'; // add securityContext

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

// Add both of these:
import { MarkdownModule } from 'ngx-markdown'; // add this
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { PostsComponent } from './home/posts/posts.component'; // add this

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    NavbarComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, // add this
    MarkdownModule.forRoot({ loader: HttpClient, sanitize: SecurityContext.NONE }) // add this
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
