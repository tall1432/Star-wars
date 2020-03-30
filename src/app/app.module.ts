import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StarWarsService } from './star-wars.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabsComponent } from './tabs/tabs.component';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import { LogService } from './log.service';
import { CreateCharacterComponent } from './create-character/create-character.component';
import { FormsModule  } from "@angular/forms";
@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    ListComponent,
    ItemComponent,
    CreateCharacterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   FormsModule
  ],
  providers:[StarWarsService,LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
