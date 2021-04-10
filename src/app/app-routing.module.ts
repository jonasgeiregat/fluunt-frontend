import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TopicComponent} from './topic/topic.component';
import {TopicAddComponent} from './topic/topic-add/topic-add.component';
import {TopicPublishComponent} from './topic/topic-publish/topic-publish.component';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {TopicRecordsComponent} from './topic/topic-records/topic-records.component';

const routes: Routes = [
  {
    path: '',
    data: {breadcrumb: 'home'},
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'topics',
        data: {breadcrumb: 'topics'},
        children: [
          {
            path: '',
            component: TopicComponent,
          },
          {
            path: 'new',
            component: TopicAddComponent,
            data: {breadcrumb: 'create'},
          },
          {
            path: ':name',
            data: {breadcrumb: ''},
            children: [
              {
                path: '',
                component: TopicRecordsComponent,
              },
              {
                path: 'publish',
                data: {breadcrumb: 'publish'},
                component: TopicPublishComponent
              }
            ]
          }
        ]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {relativeLinkResolution: 'legacy'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
