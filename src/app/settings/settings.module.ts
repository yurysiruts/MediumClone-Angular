import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { SettingsComponent } from './components/settings/settings.component';
import { settingsReducer } from './store/reducers';

const routes: Routes = [
  {
    path: 'settings',
    component: SettingsComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('settings', settingsReducer),
  ],
  declarations: [SettingsComponent],
})
export class SettingsModule {}
