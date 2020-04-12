import { RouterModule, Routes } from '@angular/router';

import { Panel1Component } from './component/panel1/panel1.component';
import { Panel2Component } from './component/panel2/panel2.component';

const APP_ROUTES: Routes = [
  { path: 'instrucciones', component: Panel1Component },
  { path: 'investigadoras', component: Panel2Component },
 { path: '**', pathMatch: 'full', redirectTo: 'instrucciones' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash:true});
