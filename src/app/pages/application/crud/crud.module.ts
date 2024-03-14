import { NgModule } from '@angular/core';
import { CrudComponent } from './crud.component';
import { CommonModule } from '@angular/common';
import { CrudRoutingModule } from './crud-routing.module';

@NgModule({
  declarations: [CrudComponent],
  imports: [CommonModule, CrudRoutingModule],
  exports: [CrudComponent],
})
export class CrudModule {}
