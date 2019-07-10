import { NgModule } from '@angular/core';

import { JhipsterSampleApplicationDefaultModelSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [JhipsterSampleApplicationDefaultModelSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [JhipsterSampleApplicationDefaultModelSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class JhipsterSampleApplicationDefaultModelSharedCommonModule {}
