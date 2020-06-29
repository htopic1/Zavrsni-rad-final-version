import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'menuu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})

export class MenuComponent implements OnInit {

    turn90degMobile:object
    turn90degTablet:object
    turn90degMultimedia:object
    mobile90deg:object
    tablet90deg:object
    multimedia90deg:object

    turn90deg:object={
        "transform":"rotate(90deg)",
        "transition":".5s"
    }

    turn0deg={
        "transform":"rotate(0deg)",
        "transition":".5s"
    }

    menuTypes:object
    menuMobile:object
    menuTablet:object
    menuMultimedia:object
    menuMQhideShowMo:object
    menuMQhideShowT:object
    menuMQhideShowMu:object

    menuTypesHover:object
    menu2Hover:object
    darkMenu:object
    mobiteliHover:object
    tabletiHover:object
    multimediaHover:object
    mobiteli2Hover:object
    tableti2Hover:object
    multimedia2Hover:object
    darkModeMobiles:object
    darkModeTablets:object
    darkModeMultimedia:object

    menuShow:object={
        "display":"block"
    }

    menuHide:object={
        "display":"none"
    }

    brightnessOn:object={
        "filter":"brightness(.8)"
    }

    brightnessOff:object={
        "":""
    }

    borderBtnLogin1:object
    borderBtnLogin2:object
    borderBtnLogin3:object
    borderBtnLogin4:object
    borderBtnLogin5:object
    
    borderBtnSignup1:object
    borderBtnSignup2:object
    borderBtnSignup3:object
    borderBtnSignup4:object
    borderBtnSignup5:object

    loginSignupHide={
        "animation-name":"",
        "display":"none"
    }

    hideShowJustMenu:object

    constructor() { }

    ngOnInit() { }

    arrowTurnForward(turnName:string){
        switch(turnName){
            case('mobiles'):{
                this.mobile90deg=this.turn90deg
                this.darkModeMobiles=this.brightnessOn
                break;
            }
            case('tablets'):{
                this.tablet90deg=this.turn90deg
                this.darkModeTablets=this.brightnessOn
                break;
            }
            case('multimedia'):{
                this.multimedia90deg=this.turn90deg
                this.darkModeMultimedia=this.brightnessOn
                break;
            }
            case('typeOfMobileOnResize'):{
                this.menuMQhideShowMo=this.menuShow
                this.mobiteliHover=this.brightnessOn
                break;
            }
            case('typeOfTabletOnResize'):{
                this.menuMQhideShowT=this.menuShow
                this.tabletiHover=this.brightnessOn
                break;
            }
            case('typeOfMultimediaOnResize'):{
                this.menuMQhideShowMu=this.menuShow
                this.multimediaHover=this.brightnessOn
                break;
            }
            case('menuTypes'):{
                this.menuTypes=this.menuShow
                this.menuTypesHover=this.brightnessOn
                break;
            }
            case('turn90degMobiles'):{
                this.turn90degMobile=this.turn90deg
                this.mobiteli2Hover=this.brightnessOn
                this.menuMobile=this.menuShow
                break;
            }
            case('turn90degTablets'):{
                this.turn90degTablet=this.turn90deg
                this.tableti2Hover=this.brightnessOn
                this.menuTablet=this.menuShow
                break;
            }
            case('turn90degMultimedia'):{
                this.turn90degMultimedia=this.turn90deg
                this.multimedia2Hover=this.brightnessOn
                this.menuMultimedia=this.menuShow
                break;
            }
        }
    }

    arrowTurnBack(turnName:string){
        switch(turnName){
            case('mobiles'):{
                this.mobile90deg=this.turn0deg
                this.darkModeMobiles=this.brightnessOff
                break;
            }
            case('tablets'):{
                this.tablet90deg=this.turn0deg
                this.darkModeTablets=this.brightnessOff
                break;
            }
            case('multimedia'):{
                this.multimedia90deg=this.turn0deg
                this.darkModeMultimedia=this.brightnessOff
                break;
            }
            case('typeOfMobileOnResize'):{
                this.menuMQhideShowMo=this.menuHide
                this.mobiteliHover=this.brightnessOff
                break;
            }
            case('typeOfTabletOnResize'):{
                this.menuMQhideShowT=this.menuHide
                this.tabletiHover=this.brightnessOff
                break;
            }
            case('typeOfMultimediaOnResize'):{
                this.menuMQhideShowMu=this.menuHide
                this.multimediaHover=this.brightnessOff
                break;
            }
            case('menuTypes'):{
                this.menuTypes=this.menuHide
                this.menuTypesHover=this.brightnessOff
                break;
            }
            case('turn90degMobiles'):{
                this.turn90degMobile=this.turn0deg
                this.mobiteli2Hover=this.brightnessOff
                this.menuMobile=this.menuHide
                break;
            }
            case('turn90degTablets'):{
                this.turn90degTablet=this.turn0deg
                this.tableti2Hover=this.brightnessOff
                this.menuTablet=this.menuHide
                break;
            }
            case('turn90degMultimedia'):{
                this.turn90degMultimedia=this.turn0deg
                this.multimedia2Hover=this.brightnessOff
                this.menuMultimedia=this.menuHide
                break;
            }
        }
    }

    showBorder(nameBtn:string){
        if(nameBtn=='login'){
            this.borderBtnLogin1={
                "animation-name":"anTopRight",
                "display":"block"
            }
            this.borderBtnLogin2={
                "animation-name":"anTop",
                "display":"block"
            }
            this.borderBtnLogin3={
                "animation-name":"anRight",
                "display":"block"
            }
            this.borderBtnLogin4={
                "animation-name":"anBottom",
                "display":"block"
            }
            this.borderBtnLogin5={
                "animation-name":"anLeft",
                "display":"block"
            }
        }
        else{
            this.borderBtnSignup1={
                "animation-name":"anTopRight",
                "display":"block"
            }
            this.borderBtnSignup2={
                "animation-name":"anTop",
                "display":"block"
            }
            this.borderBtnSignup3={
                "animation-name":"anRight",
                "display":"block"
            }
            this.borderBtnSignup4={
                "animation-name":"anBottom",
                "display":"block"
            }
            this.borderBtnSignup5={
                "animation-name":"anLeft",
                "display":"block"
            }
        }
    }

    hideBorder(nameBtn:string){
        if(nameBtn=='login'){
            this.borderBtnLogin1=this.loginSignupHide
            this.borderBtnLogin2=this.loginSignupHide
            this.borderBtnLogin3=this.loginSignupHide
            this.borderBtnLogin4=this.loginSignupHide
            this.borderBtnLogin5=this.loginSignupHide
        }
        else{
            this.borderBtnSignup1=this.loginSignupHide
            this.borderBtnSignup2=this.loginSignupHide
            this.borderBtnSignup3=this.loginSignupHide
            this.borderBtnSignup4=this.loginSignupHide
            this.borderBtnSignup5=this.loginSignupHide
        }
    }

    justMenu(name){
        if(name=='menu500pxshow'){
            this.hideShowJustMenu={
                "display":"block"
            }
            this.darkMenu={
                "filter":"brightness(.8)"
            }
        }
        else{
            this.hideShowJustMenu={"":""}
            this.darkMenu={
                "filter":"brightness(1)"
            }
        }
    }
}