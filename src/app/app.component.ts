import {Component, OnInit} from '@angular/core';
import {AppService} from './app.service';
import {Question} from './models/question.model';
import {Observable} from 'rxjs';
import {debounce} from './utils/debounce.utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  questions$!: Observable<Question[]>;
  search = '';
  debounceSearchChange = debounce(this.searchChange.bind(this), 300);

  constructor(private readonly appService: AppService) {
  }

  ngOnInit() {
    this.questions$ = this.appService.fetchQuestions();
  }

  searchChange(v: any): void {
    this.search = v;
  }
}
