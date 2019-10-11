import { NgModule } from '@angular/core';
import { NZ_ICONS } from 'ng-zorro-antd';

import {
  BulbOutline,
  BorderInnerOutline,
  FireOutline,
  CalculatorOutline,
  HomeOutline,
  CodeOutline
} from '@ant-design/icons-angular/icons';

const icons = [
  BulbOutline,
  BorderInnerOutline,
  FireOutline,
  CalculatorOutline,
  HomeOutline,
  CodeOutline
];

@NgModule({
  providers: [{ provide: NZ_ICONS, useValue: icons }]
})
export class IconsProviderModule {}
