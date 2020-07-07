import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
    selector: 'loading',
    templateUrl: 'loading.component.html',
    styleUrls: ['./loading.component.scss']
})

export class LoadingComponent implements OnInit, AfterViewInit {

    time1:any; time2:any; time3:any; time4:any; time5:any; time6:any;

    constructor() { }

    ngAfterViewInit(): void {
        this.animation3Point()
        this.time6=setInterval(()=>{
            this.animation3Point()
        },4000)
    }

    ngOnInit() { }

    animation3Point(){
        //document.body.style.overflowY='hidden'
        this.time1=setTimeout(() => {
            document.getElementById('point1').style.visibility='hidden'
            document.getElementById('point2').style.visibility='hidden'
            document.getElementById('point3').style.visibility='hidden'
            this.time2=setTimeout(()=>{
                document.getElementById('point1').style.visibility='visible'
                this.time3=setTimeout(()=>{
                    document.getElementById('point2').style.visibility='visible'
                    this.time4=setTimeout(() => {
                        document.getElementById('point3').style.visibility='visible'
                    },1000);
                },1000)
            },1000)
        },1000);
        this.time5=setTimeout(()=>{
            document.getElementById('loadingPage').style.display='none'
            //document.body.style.overflowY='scroll'
            clearTimeout(this.time1)
            clearTimeout(this.time2)
            clearTimeout(this.time3)
            clearTimeout(this.time4)
            clearTimeout(this.time5)
            clearTimeout(this.time6)
        },10000)
    }
}