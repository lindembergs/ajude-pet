import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";


import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { RouterModule } from "@angular/router";


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
  providers: [],
})
export class SharedModule {}



CommonModule
NgModule
