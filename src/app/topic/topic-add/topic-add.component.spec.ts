import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {TopicAddComponent} from './topic-add.component';
import {TopicService} from '../topic.service';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';

describe('TopicAddComponent', () => {
  let component: TopicAddComponent;
  let fixture: ComponentFixture<TopicAddComponent>;
  let topicServiceStub: any;
  let routerStub: any;

  beforeEach(waitForAsync(() => {
    topicServiceStub = {};
    routerStub = {};
    TestBed.configureTestingModule({
      declarations: [TopicAddComponent, NgForm],
      providers: [
        {provide: TopicService, useValue: topicServiceStub},
        {provide: Router, useValue: routerStub},
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
