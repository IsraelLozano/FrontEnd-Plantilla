import { PortalAcademicoViews } from './portal-academico/portal-academico.views';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'portal',
        component: PortalAcademicoViews,
        data: {
          title: 'Portal Principal',
          urls: [
            {
              title: 'Home',
              url: '/home',
            },
            {
              title: 'Portal Principal',
            },
          ],
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
