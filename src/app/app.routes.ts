import { RouterModule, Routes } from '@angular/router';

import { Panel1Component } from './component/panel1/panel1.component';
import { Panel2Component } from './component/panel2/panel2.component';

const APP_ROUTES: Routes = [
  { path: 'investigadoras', component: Panel1Component },
  { path: 'instrucciones', component: Panel2Component },
 { path: '**', pathMatch: 'full', redirectTo: 'investigadoras' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
