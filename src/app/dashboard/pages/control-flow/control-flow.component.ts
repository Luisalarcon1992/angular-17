import { Component, signal } from '@angular/core';
import { TitleComponent } from '../../../shared/title/title.component';


type Grade = 'A' | 'B' | 'F';


@Component({
  selector: 'dashboard-control-flow',
  standalone: true,
  imports: [ TitleComponent],
  templateUrl: './control-flow.component.html',
  styles: ``
})
export default class ControlFlowComponent {

  public showContent = signal(false);
  public grade = signal<Grade>('A')
  public framworks = signal<string[]>(['Angular', 'React', 'Vue']);
  public framworks2 = signal<string[]>([]);


  public toggleContent() {
    this.showContent.update( value => !value);
  }

}
