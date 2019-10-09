import { NgModule } from "@angular/core";
import { NZ_ICONS } from "ng-zorro-antd";

import {
  BulbOutline,
  BorderInnerOutline,
  FireOutline,
  CalculatorOutline
} from "@ant-design/icons-angular/icons";

const icons = [BulbOutline, BorderInnerOutline, FireOutline, CalculatorOutline];

@NgModule({
  providers: [{ provide: NZ_ICONS, useValue: icons }]
})
export class IconsProviderModule {}
