// custom pipe

import { Pipe , PipeTransform} from "@angular/core";

// name is the identifier to this custom pipe
@Pipe({name:'append'})

export class AppendPipe implements PipeTransform{

transform(value: any, args?: any) {
    return "City Name: " + value;
}
}