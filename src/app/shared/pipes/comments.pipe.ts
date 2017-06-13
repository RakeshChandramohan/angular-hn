import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'comments'
})
export class CommentsPipe implements PipeTransform {

  transform(CommentNum:number): string {
     if(CommentNum>0){
       return `${CommentNum} ${(CommentNum >1) ?"Comments":"Comment"}`
     }
     else {return  "Discuss"; }
    //  return `${CommentNum}${CommentNum >0  ?  : "Discuss"}`
  }

}
