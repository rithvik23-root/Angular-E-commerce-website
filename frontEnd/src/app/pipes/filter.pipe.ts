import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value:any[],filterString:string,property:string) {

            const result:any=[];
            if(!value || filterString=="" || property==""){
              return value;
            }
            value.forEach(a=>{
              if(a[property].trim().toLowerCase().includes(filterString.toLowerCase())){
                result.push(a)
              }
            })

            return result;
  }

}
