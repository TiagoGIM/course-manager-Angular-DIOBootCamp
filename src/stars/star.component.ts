import {Component, Input, OnChanges} from '@angular/core';
@Component({
    selector: 'app-star',
    templateUrl:'./star.component.html'
})

export class StartComponent implements OnChanges {
    @Input()//vai tornar rating e starWith atrr do componente <app-star>
    rating  :number =0;
    // vai ocultar as estrelas que ficarão atras da div.
    starWidth : number;
    ngOnChanges(): void{

        this.starWidth = this.rating * 94 / 5;
    } 

}
