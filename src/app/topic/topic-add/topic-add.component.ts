import { Component, OnInit, ViewChild, Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TopicService } from '../topic.service';

@Component({
  selector: 'app-topic-add',
  templateUrl: './topic-add.component.html',
  styleUrls: ['./topic-add.component.css']
})
@Injectable()
export class TopicAddComponent implements OnInit {
  @ViewChild('form') ngForm: NgForm;

  public model: TopicFormModel = new TopicFormModel();

  constructor(
    private topicService: TopicService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.topicService.addTopic(this.model)
      .subscribe(() => {
        this.router.navigate(['topics']);
      });
  }

  isValid(fieldName: string): string {
    if (this.ngForm && this.ngForm.form.get(fieldName)) {
      const field = this.ngForm.form.get(fieldName);
      return !field.valid && field.touched ? 'is-invalid' : field.touched ? 'is-valid' : '';
    }
  }

}

class TopicFormModel {
  public name: string;
  public numberOfPartitions: number;
  public replicationFactor: number;
}
