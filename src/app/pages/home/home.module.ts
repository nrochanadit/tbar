﻿import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeRoutingModule } from './home.routing';
import { ComponentsModule } from '../../components/components.module';

import { HomeComponent } from './home.component';
import { MenuComponent } from './menu/menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        RouterModule,
        ComponentsModule,
        HomeRoutingModule
    ],
    declarations: [
        HomeComponent,
        MenuComponent,
        DashboardComponent
    ]
})
export class HomeModule { }
