import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AlertModule} from 'ngx-bootstrap/alert';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TopicComponent} from './topic/topic.component';
import {TopicService} from './topic/topic.service';
import {TopicListComponent} from './topic/topic-list/topic-list.component';
import {TopicAddComponent} from './topic/topic-add/topic-add.component';
import {TopicPublishComponent} from './topic/topic-publish/topic-publish.component';
import {PaginationComponent} from './pagination/pagination.component';
import { HomeComponent } from './home/home.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import {TopicRecordsComponent} from './topic/topic-records/topic-records.component';

@NgModule({
  declarations: [
    AppComponent,
    TopicListComponent,
    TopicComponent,
    TopicAddComponent,
    TopicRecordsComponent,
    TopicPublishComponent,
    PaginationComponent,
    HomeComponent,
    BreadcrumbComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    AlertModule,
    HttpClientModule
  ],
  providers: [TopicService],
  bootstrap: [AppComponent]
})
export class AppModule { }
