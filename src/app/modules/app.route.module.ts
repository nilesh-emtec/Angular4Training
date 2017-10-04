import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'app/home/home.component';
import { UserComponent } from 'app/users/user/user.component';
import { ServersComponent } from 'app/servers/servers.component';
import { ServerComponent } from 'app/servers/server/server.component';
import { EditServerComponent } from 'app/servers/edit-server/edit-server.component';
import { PageNotFoundComponent } from 'app/page-not-found/page-not-found.component';
import { AuthGuard } from 'app/auth-guard/auth-guard.service';
import { CanDeactivateGuard } from 'app/auth-guard/can-deactivate-guard.service';
import { ErrorPageComponent } from 'app/error-page/error-page.component';
import { ServerResolver } from 'app/servers/server/server.resolver.service';
const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'users',
    component: UserComponent
  },
  {
    path: 'servers',
    component: ServersComponent,
    // canActivate: [AuthGuard], for top level
    canActivateChild: [AuthGuard],
    children: [{
      path: ':id',
      component: ServerComponent,
      resolve: { server: ServerResolver }
    },
    {
      path: ':id/edit',
      component: EditServerComponent,
      canDeactivate: [CanDeactivateGuard]
    }]
  },
  // { // should be at last 
  //   path: '**',
  //   component: PageNotFoundComponent
  // }
  { // should be at last 
    path: '**',
    component: ErrorPageComponent,
    data: { message: 'Something Went Wrong' }
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRouteModuleModule { }
