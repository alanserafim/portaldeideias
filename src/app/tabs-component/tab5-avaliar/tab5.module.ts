import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from 'src/app/explore-container/explore-container.module';
import { Tab5PageRoutingModule } from './tab5-routing.module';
import { Tab5Page } from './tab5.page';




@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab5PageRoutingModule,
  ],
  declarations: [Tab5Page]
})
export class Tab5PageModule {}
