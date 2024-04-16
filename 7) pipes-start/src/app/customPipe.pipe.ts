import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'shortString'
})
export class CustomPipePipe implements PipeTransform {

  transform(value: any, limit:number): any {
    // const timePattern = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/;
    // if(timePattern.test(value)){
    //   return value
    // }else{
    //   const date = new Date(value);
    //   const hours = this.pad(date.getHours());
    //   const minutes = this.pad(date.getMinutes());
    //   const seconds = this.pad(date.getSeconds());
    //   return `${hours}:${minutes}:${seconds}`;
    // }
    if(value.length > limit){
      return value.substring(0,limit) + '...';
    }else{
      return value;
    }
  }

}
