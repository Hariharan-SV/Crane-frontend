import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WorkspaceComponent} from '../app/pages/workspace/workspace.component';
import { DialogBoxComponent } from './components/dialog-box/dialog-box.component';

const routes: Routes = [{
    path:'workspace',
    component: WorkspaceComponent
},{
    path:'',
    component: DialogBoxComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
