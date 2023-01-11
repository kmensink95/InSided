import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersOverviewComponent } from './users-overview.component';

@NgModule({
  declarations: [UsersOverviewComponent],
  imports: [CommonModule],
  exports: [UsersOverviewComponent],
})
export class UsersOverviewModule {}
