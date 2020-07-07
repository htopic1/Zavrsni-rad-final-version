import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'more',
    templateUrl: 'more.component.html',
    styleUrls: ['./more.component.scss']
})

export class MoreComponent implements OnInit {

    @Input() name: string;
    @Input() pictures:string[];


    constructor() { }

    ngOnInit() { }

    showLearnMore():void{
        document.getElementById('darkCurtainLearnMore').style.display="block"
        document.getElementById('more').style.display="block"
    }
    pokazi(){
        console.log(this.pictures);
    }

    sakrij(){
        document.getElementById('darkCurtainLearnMore').style.display="none"
        document.getElementById('more').style.display="none"
    }
}