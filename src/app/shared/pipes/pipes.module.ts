import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsPipe } from './comments.pipe';

@NgModule({
  imports: [
    CommonModule
    
  ],
  declarations: [CommentsPipe],
  exports:[CommentsPipe]
})
export class PipesModule { }
