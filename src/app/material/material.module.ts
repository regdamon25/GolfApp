import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatBadgeModule } from '@angular/material/badge';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatSliderModule } from "@angular/material/slider";
import { LayoutModule } from '@angular/cdk/layout';


const material = [
  MatButtonModule,
  MatDividerModule,
  MatIconModule,
  MatButtonToggleModule,
  MatProgressSpinnerModule,
  MatBadgeModule,
  MatToolbarModule,
  MatSidenavModule,
  MatMenuModule,
  MatListModule,
  MatGridListModule,
  MatExpansionModule,
  MatCardModule,
  LayoutModule,
  MatDialogModule,
  MatSnackBarModule,
  MatSlideToggleModule,
  MatSliderModule,
]


@NgModule({
  declarations: [],
  exports: [material],
  imports: [material]
})
export class MaterialModule { }

