import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { HeaderModule } from './header/header.module';
import { SidebarModule } from './sidebar/sidebar.module';

@NgModule({
  declarations: [LayoutComponent],
  imports: [CommonModule, HeaderModule, SidebarModule],
  exports: [LayoutComponent],
})
export class LayoutModule {}
