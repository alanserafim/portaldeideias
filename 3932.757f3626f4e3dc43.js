"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3932],{3932:(Z,c,r)=>{r.r(c),r.d(c,{Tab3PageModule:()=>C});var l=r(6895),a=r(4556),e=r(8256);let g=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[l.ez,a.Pc]}),o})();var d=r(433),u=r(3128),p=r(9019),m=r(529);let h=(()=>{class o{constructor(n){this.http=n}detalharUsuario(n){return this.http.get(`${p.N.api_url}/usuarios/${n}`)}}return o.\u0275fac=function(n){return new(n||o)(e.LFG(m.eN))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var f=r(5568),v=r(4324);let M=(()=>{class o{constructor(n,i,s,U){this.usuarioMenuService=n,this.usuarioService=i,this.tokenService=s,this.route=U}ngOnInit(){this.recebeUsuarioLogado(),console.log(this.usuarioLogado$.id)}detalharDados(){return this.usuarioMenuService.detalharUsuario(this.usuarioLogado$.id).subscribe(n=>{this.usuario$=n,console.log(this.usuario$)},n=>{alert("Erro ao detalhar usuario"),console.log(n)})}recebeUsuarioLogado(){this.usuarioService.retornaUsuario().subscribe(n=>{this.usuarioLogado$=n},n=>{alert("Erro ao receber usu\xe1rio logado"),console.log(n)})}logout(){this.tokenService.excluiToken(),this.route.navigate(["/"])}}return o.\u0275fac=function(n){return new(n||o)(e.Y36(h),e.Y36(f.i),e.Y36(v.B),e.Y36(u.F0))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-menu"]],decls:13,vars:0,consts:[["fill","clear",3,"click"],["size","large","name","person-circle-outline"],["size","large","name","log-out-outline"]],template:function(n,i){1&n&&(e.TgZ(0,"ion-content")(1,"ion-list")(2,"ion-item")(3,"ion-button",0),e.NdJ("click",function(){return i.detalharDados()}),e._UZ(4,"ion-icon",1),e.TgZ(5,"p"),e._uU(6,"Meus dados"),e.qZA()()()(),e.TgZ(7,"ion-list")(8,"ion-item")(9,"ion-button",0),e.NdJ("click",function(){return i.logout()}),e._UZ(10,"ion-icon",2),e.TgZ(11,"p"),e._uU(12,"Sair"),e.qZA()()()()())},dependencies:[a.YG,a.W2,a.gu,a.Ie,a.q_],styles:["ion-button[_ngcontent-%COMP%]{text-decoration:none;background-color:transparent;height:6vh;color:#000}ion-button[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1rem;padding:0 0 0 1rem;margin:0;line-height:2rem}ion-button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{padding:0;margin:0}"]}),o})();const T=[{path:"",component:(()=>{class o{constructor(){}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-tab3"]],decls:10,vars:2,consts:[[3,"translucent"],[3,"fullscreen"],["collapse","condense"]],template:function(n,i){1&n&&(e.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),e._uU(3," Configura\xe7\xf5es "),e.qZA()()(),e.TgZ(4,"ion-content",1)(5,"ion-header",2)(6,"ion-toolbar")(7,"ion-title"),e._uU(8,"Configura\xe7\xf5es"),e.qZA()()(),e._UZ(9,"app-menu"),e.qZA()),2&n&&(e.Q6J("translucent",!0),e.xp6(4),e.Q6J("fullscreen",!0))},dependencies:[a.W2,a.Gu,a.wd,a.sr,M]}),o})()}];let b=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[u.Bz.forChild(T),u.Bz]}),o})();var P=r(581);let C=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[a.Pc,l.ez,d.u5,P.e,b,g]}),o})()}}]);