  import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AlertModule } from 'ngx-bootstrap/alert';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopicComponent } from './topic/topic.component';
import { TopicService } from './topic/topic.service';
import { TopicListComponent } from './topic/topic-list/topic-list.component';
import { TopicAddComponent } from './topic/topic-add/topic-add.component';
import { TopicDetailsComponent } from './topic/topic-details/topic-details.component';
import { TopicPublishComponent } from './topic/topic-publish/topic-publish.component';

const routes: Routes = [
  {
    path: 'topics',
    component: TopicComponent
  },
  {
    path: 'topics/new',
    component: TopicAddComponent
  },
  {
    path: 'topics/:name',
    component: TopicDetailsComponent
  },
  {
    path: 'topics/:name/publish',
    component: TopicPublishComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    TopicListComponent,
    TopicComponent,
    TopicAddComponent,
    TopicDetailsComponent,
    TopicPublishComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    AlertModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [TopicService],
  bootstrap: [AppComponent]
})
export class AppModule { }
