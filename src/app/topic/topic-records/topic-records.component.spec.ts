import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {TopicRecordsComponent} from './topic-records.component';
import {TopicService} from '../topic.service';
import {of} from 'rxjs';
import {ActivatedRoute, convertToParamMap, Router} from '@angular/router';
import {instance, mock, verify, when} from 'ts-mockito';

describe('TopicDetailsComponent', () => {
  let component: TopicRecordsComponent;
  let fixture: ComponentFixture<TopicRecordsComponent>;
  const mockedValue = mock(TopicService);

  let topicService: TopicService;
  beforeEach(waitForAsync(() => {
    when(mockedValue.viewRecords('topicName', 1)).thenReturn(of({contents: [], totalRecords: 1, page: 1, totalPages: 1}));
    topicService = instance(mockedValue);
    TestBed.configureTestingModule({
      declarations: [TopicRecordsComponent],
      providers: [
        {
          provide: TopicService,
          useValue: topicService
        },
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({
              name: 'topicName'
            }),
            queryParamMap: of(convertToParamMap({}))
          }
        },
        {
          provide: Router,
          useValue: {
          }
        }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should default to fetching first page if nu page number is given', () => {
    expect(true).toBeTruthy();
    verify(mockedValue.viewRecords('topicName', 1)).called();
  });
});
