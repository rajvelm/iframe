import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsonpModule } from '@angular/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

import { DragulaModule } from 'ng2-dragula/ng2-dragula';

import { TableauFrameComponent } from './tableau-frame.component';
import { TableauFrameRoutes } from './tableau-frame.routing';
import { SafePipe } from './safe.pipe';


@NgModule({
  imports: [NgbTooltipModule,
			NgbModule,
			CommonModule,
			RouterModule.forChild(TableauFrameRoutes),
			FormsModule,
			ReactiveFormsModule,
			JsonpModule,
			DragulaModule],
  declarations: [TableauFrameComponent,SafePipe]
})

export class TableauFrameModule {

}
