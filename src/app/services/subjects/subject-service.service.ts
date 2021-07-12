import { Injectable } from "@angular/core";
import { Subject } from "./subject.model";

@Injectable({
  providedIn:'root'
})

export class SubjectService {
  Subjects: Subject[] = [];
}
