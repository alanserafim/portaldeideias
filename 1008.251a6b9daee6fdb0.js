"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1008],{1008:(A,d,i)=>{i.r(d),i.d(d,{LoginPageModule:()=>M});var c=i(6895),l=i(433),s=i(4556),u=i(3128),p=i(655),o=i(8256),m=i(9019),h=i(8505),f=i(529),v=i(5568);let P=(()=>{class n{constructor(t,e){this.httpClient=t,this.usuarioService=e,this.API=`${m.N.api_url}/login`}autentica(t){return this.httpClient.post(this.API,t,{observe:"response"}).pipe((0,h.b)(e=>{var r;console.log(e);const g=null!==(r=JSON.stringify(e.body).split('"')[3])&&void 0!==r?r:"";console.log(g),this.usuarioService.salvaToken(g)}))}}return n.\u0275fac=function(t){return new(t||n)(o.LFG(f.eN),o.LFG(v.i))},n.\u0275prov=o.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const y=[{path:"",component:(()=>{class n{constructor(t,e,r){this.authService=t,this.router=e,this.toastController=r}ngOnInit(){this.dados={nome:"",cpf:""}}login(){this.authService.autentica(this.dados).subscribe(()=>{this.router.navigate(["tabs"])},t=>{this.presentToast("bottom"),console.log(this.dados),console.log(t)})}presentToast(t){return(0,p.mG)(this,void 0,void 0,function*(){yield(yield this.toastController.create({message:"Nome ou senha inv\xe1lida",duration:3e3,cssClass:"custom-toast",position:t})).present()})}}return n.\u0275fac=function(t){return new(t||n)(o.Y36(P),o.Y36(u.F0),o.Y36(s.yF))},n.\u0275cmp=o.Xpm({type:n,selectors:[["app-login"]],decls:22,vars:2,consts:[[1,"login",3,"ngSubmit"],["loginForm","ngForm"],["fill","solid"],["position","floating"],["type","text","name","nome","required","",3,"ngModel","ngModelChange"],["slot","helper"],["type","password","name","cpf","required","",3,"ngModel","ngModelChange"],[1,"buttons"],["type","submit","color","dark"]],template:function(t,e){1&t&&(o.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-title"),o._uU(3,"Login"),o.qZA()()(),o.TgZ(4,"ion-content")(5,"form",0,1),o.NdJ("ngSubmit",function(){return e.login()}),o.TgZ(7,"ion-item",2)(8,"ion-label",3),o._uU(9,"Nome"),o.qZA(),o.TgZ(10,"ion-input",4),o.NdJ("ngModelChange",function(g){return e.dados.nome=g}),o.qZA(),o.TgZ(11,"ion-note",5),o._uU(12,"Insira seu nome completo"),o.qZA()(),o.TgZ(13,"ion-item")(14,"ion-label",3),o._uU(15,"Senha"),o.qZA(),o.TgZ(16,"ion-input",6),o.NdJ("ngModelChange",function(g){return e.dados.cpf=g}),o.qZA(),o.TgZ(17,"ion-note",5),o._uU(18,"Insira seu n\xfamero de registro Avient ou CPF"),o.qZA()(),o.TgZ(19,"div",7)(20,"ion-button",8),o._uU(21,"Entrar"),o.qZA()()()()),2&t&&(o.xp6(10),o.Q6J("ngModel",e.dados.nome),o.xp6(6),o.Q6J("ngModel",e.dados.cpf))},dependencies:[l._Y,l.JJ,l.JL,l.Q7,l.On,l.F,s.YG,s.W2,s.Gu,s.pK,s.Ie,s.Q$,s.uN,s.wd,s.sr,s.j9],styles:[".buttons[_ngcontent-%COMP%]{display:flex;justify-content:center}ion-button[_ngcontent-%COMP%]{margin:1rem;width:100%}"]}),n})()}];let L=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[u.Bz.forChild(y),u.Bz]}),n})(),M=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[c.ez,l.u5,s.Pc,L]}),n})()}}]);