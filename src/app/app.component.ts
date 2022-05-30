import {
  Component,
  ComponentFactoryResolver,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';

import { NewPersonComponent } from './new-person/new-person.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  personInRoomCount: number = 0;
  personsInRoom: { input: number; component: any }[] = [];

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  @ViewChild('container', { read: ViewContainerRef })
  container!: ViewContainerRef;

  onAddPerson(): void {
    if (this.personInRoomCount < 9) {
      this.personInRoomCount++;
      this.personsInRoom.push({
        input: this.personInRoomCount,
        component: NewPersonComponent,
      });

      // create component factory
      const dynamicComponentFactory =
        this.componentFactoryResolver.resolveComponentFactory(
          NewPersonComponent
        );
      // add component to the view
      const componentRef = this.container.createComponent(
        dynamicComponentFactory
      );
      // pass the index to the component
      componentRef.instance.index = this.personInRoomCount;
    }
  }
}
