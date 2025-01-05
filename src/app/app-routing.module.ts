import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  {
    path: 'home',
    // component: LayoutComponent,
    // canActivate: [AuthGuard, ParamedisGuard],
    // data: {
    //   layout: 'menu'
    // },
    children: [
      // { path: '', loadChildren: () => import('./modules/headers/headers.module').then(m => m.HeadersModule) },
      { path: '', loadChildren: () => import('./modules/body/body.module').then(m => m.BodyModule) },
    ]
  },
];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
