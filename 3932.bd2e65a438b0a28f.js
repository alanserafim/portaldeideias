"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3932],{3932:(y,c,r)=>{r.r(c),r.d(c,{Tab3PageModule:()=>C});var l=r(6895),i=r(4556),o=r(8256);let g=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[l.ez,i.Pc]}),e})();var d=r(433),u=r(3128),p=r(9019),m=r(529);let h=(()=>{class e{constructor(n){this.http=n}detalharUsuario(n){return this.http.get(`${p.N.api_url}/usuarios/${n}`)}}return e.\u0275fac=function(n){return new(n||e)(o.LFG(m.eN))},e.\u0275prov=o.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var f=r(5568),v=r(4324);let M=(()=>{class e{constructor(n,a,s,U){this.usuarioMenuService=n,this.usuarioService=a,this.tokenService=s,this.route=U}ngOnInit(){this.recebeUsuarioLogado(),console.log(this.usuarioLogado$.id)}detalharDados(){return this.usuarioMenuService.detalharUsuario(this.usuarioLogado$.id).subscribe(n=>{this.usuario$=n,console.log(this.usuario$)},n=>{alert("Erro ao detalhar usuario"),console.log(n)})}recebeUsuarioLogado(){this.usuarioService.retornaUsuario().subscribe(n=>{this.usuarioLogado$=n},n=>{alert("Erro ao receber usu\xe1rio logado"),console.log(n)})}logout(){this.tokenService.excluiToken(),this.route.navigate(["/"])}}return e.\u0275fac=function(n){return new(n||e)(o.Y36(h),o.Y36(f.i),o.Y36(v.B),o.Y36(u.F0))},e.\u0275cmp=o.Xpm({type:e,selectors:[["app-menu"]],decls:15,vars:0,consts:[["fill","clear",3,"click"],["size","large","name","person-circle-outline"],["size","large","name","log-out-outline"]],template:function(n,a){1&n&&(o.TgZ(0,"ion-content")(1,"ion-list")(2,"ion-list-header"),o._uU(3," Usu\xe1rio "),o.qZA(),o.TgZ(4,"ion-item")(5,"ion-button",0),o.NdJ("click",function(){return a.detalharDados()}),o._UZ(6,"ion-icon",1),o.TgZ(7,"p"),o._uU(8,"Meus dados"),o.qZA()()()(),o.TgZ(9,"ion-list")(10,"ion-item")(11,"ion-button",0),o.NdJ("click",function(){return a.logout()}),o._UZ(12,"ion-icon",2),o.TgZ(13,"p"),o._uU(14,"Sair"),o.qZA()()()()())},dependencies:[i.YG,i.W2,i.gu,i.Ie,i.q_,i.yh],styles:["ion-button[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:flex-start;align-content:flex-start;text-decoration:none;background-color:transparent;height:6vh;color:#000}ion-button[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1rem;padding:0 0 0 1rem;margin:0;line-height:2rem}ion-button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{padding:0;margin:0}"]}),e})();const T=[{path:"",component:(()=>{class e{constructor(){}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=o.Xpm({type:e,selectors:[["app-tab3"]],decls:10,vars:2,consts:[[3,"translucent"],[3,"fullscreen"],["collapse","condense"]],template:function(n,a){1&n&&(o.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),o._uU(3," Configura\xe7\xf5es "),o.qZA()()(),o.TgZ(4,"ion-content",1)(5,"ion-header",2)(6,"ion-toolbar")(7,"ion-title"),o._uU(8,"Configura\xe7\xf5es"),o.qZA()()(),o._UZ(9,"app-menu"),o.qZA()),2&n&&(o.Q6J("translucent",!0),o.xp6(4),o.Q6J("fullscreen",!0))},dependencies:[i.W2,i.Gu,i.wd,i.sr,M]}),e})()}];let b=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[u.Bz.forChild(T),u.Bz]}),e})();var P=r(581);let C=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[i.Pc,l.ez,d.u5,P.e,b,g]}),e})()}}]);