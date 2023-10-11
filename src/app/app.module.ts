import { NgModule } from '@angular/core';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThyButtonModule } from 'ngx-tethys/button';
import { ThyLayoutModule } from 'ngx-tethys/layout';
import { ThyInputModule } from 'ngx-tethys/input';
import { ThySwitchModule } from 'ngx-tethys/switch';
import { ThyDividerModule } from 'ngx-tethys/divider';
import { ThyIconModule, ThyIconRegistry } from 'ngx-tethys/icon';
import { TodoListComponent } from './todo-list/todo-list.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { OldTodoComponent } from './old-todo/old-todo.component';
import { TodoListItemComponent } from './todo-list-item/todo-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    AboutComponent,
    OldTodoComponent,
    TodoListItemComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ThyButtonModule,
    ThyDividerModule,
    ThySwitchModule,
    ThyIconModule,
    ThyLayoutModule,
    ThyInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(iconRegistry: ThyIconRegistry, sanitizer: DomSanitizer) {
    // 注册 defs SVG 雪碧图
    iconRegistry.addSvgIconSet(
      sanitizer.bypassSecurityTrustResourceUrl(
        `assets/icons/defs/svg/sprite.defs.svg`
      )
    );
    // 注册 symbol SVG 雪碧图
    iconRegistry.addSvgIconSet(
      sanitizer.bypassSecurityTrustResourceUrl(
        `assets/icons/symbol/svg/sprite.defs.svg`
      )
    );
  }
}
