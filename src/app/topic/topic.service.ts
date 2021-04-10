import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Page} from '../page';
import {Record} from './topic-records/record';

@Injectable()
export class TopicService {
  constructor(private httpClient: HttpClient) {
  }

  public listTopics(internal: boolean): Observable<any> {
    return this.httpClient.get('http://localhost:8080/topics?internal=' + internal);
  }

  public addTopic(
    topicResoruce: {
      name: string,
      numberOfPartitions: number,
      replicationFactor: number
    }): Observable<any> {
    return this.httpClient.post('http://localhost:8080/topics', topicResoruce);
  }

  public viewRecords(name: string, page: number = 1): Observable<Page<Record>> {
    return this.httpClient.get<Page<Record>>(`http://localhost:8080/topics/${name}/records?page=${page}`);
  }
}
