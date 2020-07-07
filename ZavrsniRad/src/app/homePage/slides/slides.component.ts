import { Component, OnInit, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'slides',
    templateUrl: './slides.component.html',
    styleUrls: ['./slides.component.scss']
})

export class SlidesComponent implements OnInit, AfterViewInit {
    /////napraviti za klik da radi
    pictures1:string[]=['/assets/samsung-1.jpg','/assets/samsung-1.jpg','/assets/samsung-1.jpg']
    pictures2:string[]=['/assets/samsung-2.jpg','/assets/samsung-2.jpg','/assets/samsung-2.jpg']
    pictures3:string[]=['/assets/samsung-8.jpg','/assets/samsung-8.jpg','/assets/samsung-8.jpg']
    picture1=this.pictures1[0]
    picture2=this.pictures1[1]
    picture3=this.pictures1[2]

    p1:object={
        "width":"0%",
        "right": "-100%"
    }
    p2:object={
        "width":"0%",
        "right": "-100%"
    } 
    p3:object={
        "width":"0%",
        "right": "-100%"
    }

    c1:object={"":""}
    c2:object={"":""}
    c3:object={"":""}

    c21:object={"":""}
    c22:object={"":""}
    c23:object={"":""}

    text1:object={"":""}
    text2:object={"":""}
    text3:object={"":""}

    //allUsers:object[]=[]
    clear:any=""
    clearT1:any=""
    clearT2:any=""
    clearT3:any=""
    clearT4:any=""
    clearT5:any=""
    clearT6:any=""
    clearT7:any=""
    clearT8:any=""
    clearT9:any=""
    clearT10:any=""
    clearT11:any=""
    clearT12:any=""

    isActive:boolean=false;

    constructor(private http:HttpClient) { }

    ngAfterViewInit(): void {
        this.slideShowText()
        //this.slideShowMobiles()
        this.clear=setInterval(() => {
              this.slideShowText()
        }, 72000);
        //setInterval(()=>{
        //    this.slideShowMobiles()
        //}, 24000);

        //this.getAllUser()
        //console.log(this.allUsers);
        //this.addUser()
    }
    
    ngOnInit() { }
    
    /*getAllUser(){
        const serviceURL='http://localhost:4000/getAllUser'
        this.http.get(serviceURL).subscribe(response=>{
            //console.log(response);
            this.allUsers.push(response);
        })
    }

    addUser(){
        const serviceURL='http://localhost:4000/addUser'
        this.http.post(serviceURL, "'haris','topic','htopic1@gmail.com','11111'")
    }*/

    slideShowMobiles(){
        //this.picture1=png[0]
        this.c3={"background-color":"white"}
        this.c1={"background-color":"black"}
        this.p1={
            "width":"65%",
            "height":"90%",
            "right": "0%",
            "transition":"2s"
        }
        this.clearT1=setTimeout(() => {
            this.p1={
                "width":"0%",
                "right": "100%",
                "transition":"2s"
            }
            this.clearT2=setTimeout(() => {
                this.isActive=false
                this.p1={
                    "width":"0%",
                    "right":"-100%",
                    "transition":"0s"
                }
                //this.picture2=png[1]
                this.c1={"background-color":"white"}
                this.c2={"background-color":"black"}
                this.p2={
                    "width":"65%",
                    "height":"90%",
                    "right": "0%",
                    "transition":"2s"
                }
                this.clearT3=setTimeout(() => {
                    this.p2={
                        "width":"0%",
                        "right": "100%",
                        "transition":"2s"
                    }
                    this.clearT4=setTimeout(() => {
                        this.p2={
                            "width":"0%",
                            "right":"-100%",
                            "transition":"0s"
                        }
                        //this.picture3=png[2]
                        this.c2={"background-color":"white"}
                        this.c3={"background-color":"black"}
                        this.p3={
                            "width":"65%",
                            "height":"90%",
                            "right": "0%",
                            "transition":"2s"
                        }
                        this.clearT5=setTimeout(() => {
                            this.p3={
                                "width":"0%",
                                "right": "100%",
                                "transition":"2s"
                            }
                            this.clearT6=setTimeout(() => {
                                this.p3={
                                    "width":"0%",
                                    "right":"-100%",
                                    "transition":"0s"
                                }
                            }, 3000);
                        }, 5000);
                    }, 3000);
                }, 5000);
            }, 3000);
        }, 5000);

        this.clearT9=setInterval(this.slideShowMobiles, 24000);
    }

    slideShowText(){
        //this.reset()
        this.c23={"":""}
        this.c21={
            "border":"3px solid #85B3D1FF",
            "border-radius":"10px"
        }
        this.text3={"display":"none"}
        this.text1={"display":"flex","flex-direction":"column","justify-content":"center","align-item":"center"}
        this.picture1=this.pictures1[0]
        this.picture2=this.pictures1[1]
        this.picture3=this.pictures1[2]
        this.slideShowMobiles()
        this.clearT7=setTimeout(() => {
            this.c21={"":""}
            this.c22={
                "border":"3px solid #85B3D1FF",
                "border-radius":"10px"
            }
            this.text1={"display":"none"}
            this.text2={"display":"flex","flex-direction":"column","justify-content":"center","align-item":"center"}
            this.picture1=this.pictures2[0]
            this.picture2=this.pictures2[1]
            this.picture3=this.pictures2[2]
            this.slideShowMobiles()
            this.clearT8=setTimeout(() => {
                this.c22={"":""}
                this.c23={
                    "border":"3px solid #85B3D1FF",
                    "border-radius":"10px"
                }
                this.text2={"display":"none"}
                this.text3={"display":"flex","flex-direction":"column","justify-content":"center","align-item":"center"}
                
                this.picture1=this.pictures3[0]
                this.picture2=this.pictures3[1]
                this.picture3=this.pictures3[2]
                this.slideShowMobiles()
            }, 24000);
        }, 24000);
    }

    change(name){
        if(this.isActive==false)
        {
            this.reset()
            this.isActive=true
            
            switch(name){
                case('first'):{
                    this.text1={"display":"flex","flex-direction":"column","justify-content":"center","align-item":"center"}
                    this.c21={
                        "border":"3px solid #85B3D1FF",
                        "border-radius":"10px"
                    }
                    this.c22={"":""}
                    this.c23={"":""}
                    this.picture1=this.pictures1[0]
                    this.picture2=this.pictures1[1]
                    this.picture3=this.pictures1[2]
                    this.slideShowMobiles()
                    this.clearT10=setTimeout(() => {
                        this.c21={"":""}
                        this.slideShowText()
                        this.clear=setInterval(() => {
                            this.slideShowText()
                        }, 72000);
                    }, 24000);
                    
                    break;
                }
                case('second'):{
                    this.text2={"display":"flex","flex-direction":"column","justify-content":"center","align-item":"center"}
                    this.c22={
                        "border":"3px solid #85B3D1FF",
                        "border-radius":"10px"
                    }
                    this.c23={"":""}
                    this.c21={"":""}
                    this.picture1=this.pictures2[0]
                    this.picture2=this.pictures2[1]
                    this.picture3=this.pictures2[2]
                    this.slideShowMobiles()
                    this.clearT11=setTimeout(() => {
                        this.c22={"":""}
                        this.slideShowText()
                        this.clear=setInterval(() => {
                            this.slideShowText()
                        }, 72000);
                    }, 24000);
                    break;
                }
                case('third'):{
                    this.text3={"display":"flex","flex-direction":"column","justify-content":"center","align-item":"center"}
                    this.c23={
                        "border":"3px solid #85B3D1FF",
                        "border-radius":"10px"
                    }
                    this.c21={"":""}
                    this.c22={"":""}
                    this.picture1=this.pictures3[0]
                    this.picture2=this.pictures3[1]
                    this.picture3=this.pictures3[2]
                    this.slideShowMobiles()
                    this.clearT12=setTimeout(() => {
                        this.c23={"":""}
                        this.slideShowText()
                        this.clear=setInterval(() => {
                            this.slideShowText()
                        }, 72000);
                    }, 24000);
                    break;
                }
            }
        }
    }

    reset(){
        clearInterval(this.clear)
        clearTimeout(this.clearT1)
        clearTimeout(this.clearT2)
        clearTimeout(this.clearT3)
        clearTimeout(this.clearT4)
        clearTimeout(this.clearT5)
        clearTimeout(this.clearT6)
        clearTimeout(this.clearT7)
        clearTimeout(this.clearT8)
        clearInterval(this.clearT9)
        clearTimeout(this.clearT10)
        clearTimeout(this.clearT11)
        clearTimeout(this.clearT12)

        this.text1={"display":"none"}
        this.text2={"display":"none"}
        this.text3={"display":"none"}

        this.p1={
            "width":"0%",
            "right":"-100%",
            "transition":"0s"
        }
        this.p2={
            "width":"0%",
            "right":"-100%",
            "transition":"0s"
        }
        this.p3={
            "width":"0%",
            "right":"-100%",
            "transition":"0s"
        }
        
        this.c1={"background-color":"white"}
        this.c2={"background-color":"white"}
        this.c3={"background-color":"white"}
        
    }
}