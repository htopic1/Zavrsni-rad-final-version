import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'login',
    templateUrl: 'login.component.html',
    styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

    borderBtnLogin1:object
    borderBtnLogin2:object
    borderBtnLogin3:object
    borderBtnLogin4:object
    borderBtnLogin5:object

    loginSignupHide={
        "animation-name":"",
        "display":"none"
    }

    login:object

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
        this.login={
            "display":"flex"
        }
    }
    hideLogin(){
        this.login={
            "display":"none"
        }
    }
}