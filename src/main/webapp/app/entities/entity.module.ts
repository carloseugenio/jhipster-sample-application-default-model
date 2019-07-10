import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'region',
        loadChildren: './region/region.module#JhipsterSampleApplicationDefaultModelRegionModule'
      },
      {
        path: 'country',
        loadChildren: './country/country.module#JhipsterSampleApplicationDefaultModelCountryModule'
      },
      {
        path: 'location',
        loadChildren: './location/location.module#JhipsterSampleApplicationDefaultModelLocationModule'
      },
      {
        path: 'department',
        loadChildren: './department/department.module#JhipsterSampleApplicationDefaultModelDepartmentModule'
      },
      {
        path: 'task',
        loadChildren: './task/task.module#JhipsterSampleApplicationDefaultModelTaskModule'
      },
      {
        path: 'employee',
        loadChildren: './employee/employee.module#JhipsterSampleApplicationDefaultModelEmployeeModule'
      },
      {
        path: 'job',
        loadChildren: './job/job.module#JhipsterSampleApplicationDefaultModelJobModule'
      },
      {
        path: 'job-history',
        loadChildren: './job-history/job-history.module#JhipsterSampleApplicationDefaultModelJobHistoryModule'
      }
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ])
  ],
  declarations: [],
  entryComponents: [],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterSampleApplicationDefaultModelEntityModule {}
