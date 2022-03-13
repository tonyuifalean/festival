"use strict";(self.webpackChunksighisoara_festival=self.webpackChunksighisoara_festival||[]).push([[970],{3970:(O,d,i)=>{i.r(d),i.d(d,{AuthenticationModule:()=>U});var u=i(9808),g=i(520),s=i(3075),a=i(2466),f=i(8057),l=i(325),h=i(7224),t=i(5e3),v=i(5107);function A(o,e){1&o&&(t.TgZ(0,"div"),t._uU(1),t.ALo(2,"translate"),t.ALo(3,"translate"),t.ALo(4,"translate"),t.qZA()),2&o&&(t.xp6(1),t.lnq(" ",t.lcZ(2,3,"LOGIN_PAGE.FIELD")," ",t.lcZ(3,5,"LOGIN_PAGE.USERNAME")," ",t.lcZ(4,7,"LOGIN_PAGE.IS_REQUIRED")," "))}function C(o,e){if(1&o&&(t.TgZ(0,"div",14),t.YNc(1,A,5,9,"div",15),t.qZA()),2&o){const n=t.oxw();t.xp6(1),t.Q6J("ngIf",n.formControls.username.errors.required)}}function Z(o,e){1&o&&(t.TgZ(0,"div"),t._uU(1),t.ALo(2,"translate"),t.ALo(3,"translate"),t.ALo(4,"translate"),t.qZA()),2&o&&(t.xp6(1),t.lnq(" ",t.lcZ(2,3,"LOGIN_PAGE.FIELD")," ",t.lcZ(3,5,"LOGIN_PAGE.PASSWORD")," ",t.lcZ(4,7,"LOGIN_PAGE.IS_REQUIRED")," "))}function L(o,e){if(1&o&&(t.TgZ(0,"div",14),t.YNc(1,Z,5,9,"div",15),t.qZA()),2&o){const n=t.oxw();t.xp6(1),t.Q6J("ngIf",n.formControls.password.errors.required)}}function I(o,e){1&o&&t._UZ(0,"span",16)}function b(o,e){if(1&o&&(t.TgZ(0,"div",17),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&o){const n=t.oxw();t.xp6(1),t.hij(" ",t.lcZ(2,1,n.error)," ")}}const p=function(o){return{"is-invalid":o}},T=[{path:"login",component:(()=>{class o{constructor(n,r,c,E,G){var m;this.formBuilder=n,this.route=r,this.router=c,this.authenticationService=E,this.translate=G,this.loginForm=this.formBuilder.group({username:["",s.kI.required],password:["",s.kI.required]}),this.loading=!1,this.submitted=!1,this.returnUrl="",this.error="",(null===(m=this.authenticationService.currentUserValue)||void 0===m?void 0:m.username)&&this.router.navigate(["/"])}ngOnInit(){this.returnUrl=this.route.snapshot.queryParams.returnUrl||"/"}get formControls(){return this.loginForm.controls}onSubmit(){this.submitted=!0,!this.loginForm.invalid&&(this.loading=!0,this.authenticationService.login(this.formControls.username.value,this.formControls.password.value).pipe((0,h.P)()).subscribe(n=>{this.router.navigate([this.returnUrl])},n=>{this.error=n,this.loading=!1}))}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(s.qu),t.Y36(l.gz),t.Y36(l.F0),t.Y36(v.$h),t.Y36(a.sK))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-login"]],decls:22,vars:18,consts:[[1,"col-md-6","offset-md-3","mt-5","mb-5"],[1,"card"],[1,"card-header"],[1,"card-body"],[3,"formGroup","ngSubmit"],[1,"form-group"],["for","username"],["type","text","formControlName","username","placeholder","admin - for now",1,"form-control",3,"ngClass"],["class","invalid-feedback",4,"ngIf"],["for","password"],["type","password","formControlName","password","placeholder","password - for now",1,"form-control",3,"ngClass"],[1,"btn","btn-primary",3,"disabled"],["class","spinner-border spinner-border-sm mr-1",4,"ngIf"],["class","alert alert-danger mt-3 mb-0",4,"ngIf"],[1,"invalid-feedback"],[4,"ngIf"],[1,"spinner-border","spinner-border-sm","mr-1"],[1,"alert","alert-danger","mt-3","mb-0"]],template:function(n,r){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h4",2),t._uU(3,"Login"),t.qZA(),t.TgZ(4,"div",3)(5,"form",4),t.NdJ("ngSubmit",function(){return r.onSubmit()}),t.TgZ(6,"div",5)(7,"label",6),t._uU(8),t.ALo(9,"translate"),t.qZA(),t._UZ(10,"input",7),t.YNc(11,C,2,1,"div",8),t.qZA(),t.TgZ(12,"div",5)(13,"label",9),t._uU(14),t.ALo(15,"translate"),t.qZA(),t._UZ(16,"input",10),t.YNc(17,L,2,1,"div",8),t.qZA(),t.TgZ(18,"button",11),t.YNc(19,I,1,0,"span",12),t._uU(20," Login "),t.qZA(),t.YNc(21,b,3,3,"div",13),t.qZA()()()()),2&n&&(t.xp6(5),t.Q6J("formGroup",r.loginForm),t.xp6(3),t.Oqu(t.lcZ(9,10,"LOGIN_PAGE.USERNAME")),t.xp6(2),t.Q6J("ngClass",t.VKq(14,p,r.submitted&&r.formControls.username.errors)),t.xp6(1),t.Q6J("ngIf",r.submitted&&r.formControls.username.errors),t.xp6(3),t.Oqu(t.lcZ(15,12,"LOGIN_PAGE.PASSWORD")),t.xp6(2),t.Q6J("ngClass",t.VKq(16,p,r.submitted&&r.formControls.password.errors)),t.xp6(1),t.Q6J("ngIf",r.submitted&&r.formControls.password.errors),t.xp6(1),t.Q6J("disabled",r.loading),t.xp6(1),t.Q6J("ngIf",r.loading),t.xp6(2),t.Q6J("ngIf",r.error))},directives:[s._Y,s.JL,s.sg,s.Fj,s.JJ,s.u,u.mk,u.O5],pipes:[a.X$],styles:[".form-group[_ngcontent-%COMP%]{margin-bottom:1rem}.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{margin-bottom:.5rem}"]}),o})()},{path:"register",component:(()=>{class o{constructor(n){this.translate=n}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(a.sK))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-register"]],decls:3,vars:3,template:function(n,r){1&n&&(t.TgZ(0,"h1"),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&n&&(t.xp6(1),t.Oqu(t.lcZ(2,1,"REGISTRATION_PAGE")))},pipes:[a.X$],styles:[""]}),o})()}];let N=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[l.Bz.forChild(T)],l.Bz]}),o})(),U=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[N,u.ez,s.UX,a.aw.forChild({loader:{provide:a.aw,useFactory:f.s,deps:[g.eN]}})]]}),o})()}}]);