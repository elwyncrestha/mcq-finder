import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { Question } from './models/question.model';
import { Observable } from 'rxjs';
import { debounce } from './utils/debounce.utils';
import { PlatformQuestionMapping } from './constants/platform-question-mapping';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  questions$!: Observable<Question[]>;
  toggleFilter = false;
  filterOptionsState: { [key: string]: boolean } = {};
  filterOptions: string[] = [];
  search = '';
  debounceSearchChange = debounce(this.searchChange.bind(this), 300);

  constructor(private readonly appService: AppService) {
  }

  ngOnInit() {
    Object.keys(PlatformQuestionMapping).forEach((m) => this.filterOptionsState[m] = false);
    this.filterOptions = Object.keys(this.filterOptionsState);
    this.setAll(true);
  }

  searchChange(v: any): void {
    this.search = v;
  }

  setAll(flag: boolean): void {
    Object.keys(this.filterOptionsState).forEach((k) => this.filterOptionsState[k] = flag);
    this.fetchQuestions();
  }

  setOne(platform: string, flag: boolean): void {
    this.filterOptionsState[platform] = flag;
    this.fetchQuestions();
  }

  private fetchQuestions(): void {
    const platforms = this.filterOptions.filter((o) => this.filterOptionsState[o]);
    this.questions$ = this.appService.fetchQuestions(platforms);
  }
}
