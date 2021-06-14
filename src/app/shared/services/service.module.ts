import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrewService } from './shipcrew/crew.service';



@NgModule({
  imports: [
    CommonModule
  ],
  providers:[CrewService]
})
export class ServiceModule { }
