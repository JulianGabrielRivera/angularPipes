import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppendPipe } from './Pipes/append.pipe';
import { AppendCLIPipe } from './Pipes/append-cli.pipe';
import { SummaryPipe } from './Pipes/summary.pipe';
import { PostComponent } from './post/post.component';
import { PostlistComponent } from './postlist/postlist.component';
import { PostService } from './services/post.service';
import { BetterformComponent } from './betterform/betterform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
@NgModule({
  declarations: [
    AppComponent,AppendPipe, AppendCLIPipe, SummaryPipe, PostComponent, PostlistComponent, BetterformComponent, ReactiveformComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  // creates instance in the memory once, no matter how many times we use it throughout our app
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
