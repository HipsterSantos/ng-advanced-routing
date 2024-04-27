import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'increment'
})
export class PipeIncrement  implements PipeTransform{
    transform(value: number, ...args: any[]) {
        return ++value
    }
}