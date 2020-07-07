import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'signup',
    templateUrl: 'signup.component.html',
    styleUrls: ['./signup.component.scss']
})

export class SignupComponent implements OnInit {
    borderBtnSignup1:object
    borderBtnSignup2:object
    borderBtnSignup3:object
    borderBtnSignup4:object
    borderBtnSignup5:object

    loginSignupHide={
        "animation-name":"",
        "display":"none"
    }

    public login:object
    public darkCurtainOpacity:object

    constructor() { }

    ngOnInit() { }

    showBorder(){
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
    hideBorder(){
        this.borderBtnSignup1=this.loginSignupHide
        this.borderBtnSignup2=this.loginSignupHide
        this.borderBtnSignup3=this.loginSignupHide
        this.borderBtnSignup4=this.loginSignupHide
        this.borderBtnSignup5=this.loginSignupHide
    }

    showLogin(){
        document.body.style.overflowY='scroll';
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
}