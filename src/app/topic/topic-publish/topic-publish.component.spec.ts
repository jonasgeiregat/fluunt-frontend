import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicPublishComponent } from './topic-publish.component';

describe('TopicPublishComponent', () => {
  let component: TopicPublishComponent;
  let fixture: ComponentFixture<TopicPublishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicPublishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicPublishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
