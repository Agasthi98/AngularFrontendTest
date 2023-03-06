import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  constructor(private http: HttpClient) {}

  AddEvent(event: any) {
    return this.http.post<any>(` http://localhost:8000/event`, event);
  }

  GetAllEvents() {
    return this.http.get<any>(`http://localhost:8000/event`);
  }

  deleteRecord(id: number): Observable<any> {
    const url = `http://localhost:8000/event/${id}`;
    return this.http.delete(url);
  }

  updateEventData(id: number, data: any): Observable<any>{
    return this.http.put(`http://localhost:8000/event/${id}`, data);
  }
}
