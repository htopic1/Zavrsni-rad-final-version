import { Component, OnInit, Output, EventEmitter } from '@angular/core';
//import { EventEmitter } from 'protractor';

@Component({
    selector: 'login',
    templateUrl: 'login.component.html',
    styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

    //@Input() public state:object;
    //@Input() public state2:object;

    /*@Output() showMenu:EventEmitter<object>=new EventEmitter()
    @Output() hideMenu:EventEmitter<object>=new EventEmitter()
    show:object={
        "display":"block"

    }
    hide:object={
        "display":"none"
    }*/   

    public borderBtnLogin1:object
    public borderBtnLogin2:object
    public borderBtnLogin3:object
    public borderBtnLogin4:object
    public borderBtnLogin5:object

    loginSignupHide={
        "animation-name":"",
        "display":"none"
    }

    public login:object
    public darkCurtainOpacity:object

    constructor() { }

    ngOnInit() { }

    showBorder(){
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
    hideBorder(){
        this.borderBtnLogin1=this.loginSignupHide
        this.borderBtnLogin2=this.loginSignupHide
        this.borderBtnLogin3=this.loginSignupHide
        this.borderBtnLogin4=this.loginSignupHide
        this.borderBtnLogin5=this.loginSignupHide
    }

    showLogin(){
        document.body.style.overflow='hidden';
        this.darkCurtainOpacity={
            "display":"flex"
        }
        setTimeout(()=>{
            this.darkCurtainOpacity={
                "filter":"opacity(1)",
                "display":"flex"
            }
            setTimeout(()=>{
                this.login={
                    "display":"flex"
                }
                //this.outputHideMenu()
                //console.log('haris')
            },1000)
        },500)
    }
    hideLogin(){
        document.body.style.overflowY='scroll';
        this.login={
            "display":"none"
        }
        //this.outputHideMenu()
        setTimeout(() => {
            this.darkCurtainOpacity={
                "filter":"opacity(0)",
                "display":"flex"
            }
            setTimeout(()=>{
                this.darkCurtainOpacity={
                    "display":"none"
                }
            },1000)
        },500);
    }

    /*outputShowMenu(){
        this.showMenu.emit(this.show)
    }
    outputHideMenu(){
        this.hideMenu.emit(this.hide)
    }*/
}