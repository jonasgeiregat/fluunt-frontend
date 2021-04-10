import { Component, OnInit, Output, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TopicService } from './topic.service';
import { Topic } from './topic';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
@Injectable()
export class TopicComponent implements OnInit {

  public showInternalTopics = false;

  @Output() topics: Array<Topic>;

  constructor(private topicService: TopicService, private router: Router) {
    topicService.listTopics(this.showInternalTopics)
      .subscribe((topics: Array<Topic>) => this.topics = topics);
  }

  ngOnInit(): void {
  }

  refreshTopics(): void {
    this.topicService.listTopics(this.showInternalTopics)
      .subscribe((topics: Array<Topic>) => this.topics = topics);
  }

}
