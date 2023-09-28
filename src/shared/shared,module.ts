import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";


import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";

import { RouterModule } from "@angular/router";
import { QrcodeComponent } from "./qrcode/qrcode.component";


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    QrcodeComponent
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    HeaderComponent,
    FooterComponent,
    QrcodeComponent
  ],
  providers: [],
})
export class SharedModule {}



CommonModule
NgModule
