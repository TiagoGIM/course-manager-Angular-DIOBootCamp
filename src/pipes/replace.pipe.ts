import {Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name : 'replace'
})
export class ReplacePipe implements PipeTransform {

    // transforme é o metodo que aplica o pipe
    transform( value :string, char: string,valueToReplace: string) {
        // value é nossa variavel-interpolada em questao
        // char é nosso tokem de separação
        // VTR é pelo que queremos subistituir
        return value.replace(char, valueToReplace);
    }
}
