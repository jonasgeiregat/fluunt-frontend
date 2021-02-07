import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class TopicService {
  constructor(private httpClient: HttpClient) {}

  public listTopics(internal: boolean) {
    return this.httpClient.get("http://localhost:8080/topics?internal=" + internal);
  }

  public addTopic(
    topicResoruce: { 
      name: string, 
      numberOfPartitions: number, 
      replicationFactor: number
    }) {
    return this.httpClient.post("http://localhost:8080/topics", topicResoruce)
  }
}
