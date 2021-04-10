import {Component, Injectable, OnInit, Output} from '@angular/core';
import {TopicService} from '../topic.service';
import {ActivatedRoute, Router} from '@angular/router';
import {map} from 'rxjs/operators';
import {Record} from './record';
import {Page} from '../../page';


@Component({
  selector: 'app-topic-records',
  templateUrl: './topic-records.component.html',
  styleUrls: ['./topic-records.component.css']
})
@Injectable()
export class TopicRecordsComponent implements OnInit {
  @Output() page: Page<Record>;
  private name: string;

  constructor(private topicService: TopicService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.pipe(map(p => p.name))
      .subscribe(name => {
        this.activatedRoute.queryParamMap.pipe(map(p => p.get('page'))).subscribe(page => {
          this.name = name;
          this.topicService.viewRecords(name, page == null ? 1 : Number(page))
            .subscribe(messages => this.page = messages, error => console.log(error));
        });
      });
  }

  loadPage(pageNumber: number): void {
    this.router.navigate(['/topics/' + this.name], {queryParams: {page: pageNumber}});
  }
}
