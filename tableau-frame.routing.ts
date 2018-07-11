import { Routes } from '@angular/router';

import { TableauFrameComponent } from './tableau-frame.component';

export const TableauFrameRoutes: Routes = [
	{
	   path: '',
		  component: TableauFrameComponent,
		  data: {
			heading: 'TableauFrame',
			removeFooter: true
		  }
	 }
];
