import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {forkJoin, Observable} from "rxjs";
import {Question} from "./models/question.model";
import {PlatformQuestionMapping} from "./constants/platform-question-mapping";
import {reduce} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private readonly http: HttpClient) { }

  fetchQuestions(): Observable<Question[]> {
    const questions$ = Object
      .values(PlatformQuestionMapping)
      .reduce((p, c) => [...p, ...c], [])
      .map((json) => this.http.get<Question[]>(json));
    return forkJoin(questions$).pipe(
      reduce<Question[][], Question[]>((p, c, i) => {
        return [
          ...p,
          ...c.reduce((p, c) => [...p, ...c], [])
        ]
      }, [])
    );
  }
}
