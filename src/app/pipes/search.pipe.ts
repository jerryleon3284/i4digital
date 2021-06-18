import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'userFilter'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!args) {
      return value;
    }
    return value.filter((val:any) => {
      let result = (val.name.toLowerCase().indexOf(args.toLowerCase()) !== -1) ||
                   (val.username.toLowerCase().indexOf(args.toLowerCase())!== -1)                         ||
                   (val.email.toLowerCase().indexOf(args.toLowerCase()) !== -1);
      return result;
    })

  }

}
