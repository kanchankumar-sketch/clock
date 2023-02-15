import { Component, ElementRef } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'clock-tab';
  toggle=true;
  private _time$: Observable<Date> = timer(0, 1000).pipe(
    map(tick => new Date())
  );

  constructor(private elementRef: ElementRef) { }
  get time() {
    return this._time$;
  }
  hoverColorVar1(){
    if(this.toggle){
      this.elementRef.nativeElement.style.setProperty('--hoverColorVar', 'green');
      this.toggle=false;
    }else{
      this.elementRef.nativeElement.style.setProperty('--hoverColorVar', 'red');
      this.toggle=true;
    }
    
  }
}
