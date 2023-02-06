"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3965],{3965:(R,C,c)=>{c.r(C),c.d(C,{Tab4PageModule:()=>k});var m=c(6895),n=c(4556),s=c(433),o=c(8256);let v=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[m.ez,n.Pc,s.UX]}),e})();var d=c(3128),p=c(655),g=c(9019),U=c(529);let Z=(()=>{class e{constructor(t){this.http=t}atualizarUsuario(t){return this.http.put(`${g.N.api_url}/usuarios`,t)}detalharUsuario(t){return this.http.get(`${g.N.api_url}/usuarios/${t}`)}}return e.\u0275fac=function(t){return new(t||e)(o.LFG(U.eN))},e.\u0275prov=o.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),T=(()=>{class e{constructor(t,r,a,l,u){this.formBuilder=t,this.router=r,this.atualizarService=a,this.route=l,this.toastController=u}ngOnInit(){this.usuarioId=this.route.snapshot.params.id,console.log(this.usuarioId),this.usuario$=this.detalhamentoUsuario(),console.log(this.usuario$),this.atualizarUsuarioForm=this.formBuilder.group({id:["",[]],nome:["",[]],registro:["",[]],cpf:["",[]],perfil:["",[]],setor:["",[]],letraTurno:["",[]],ramal:["",[]]})}atualizarUsuario(){const t=this.atualizarUsuarioForm.getRawValue();this.atualizarService.atualizarUsuario(t).subscribe(()=>{this.presentToastSucess("middle"),this.router.navigate(["tabs/tab4"])},r=>{this.presentToastFail("middle"),console.log(r),console.log(t)})}detalhamentoUsuario(){return this.atualizarService.detalharUsuario(this.usuarioId).subscribe(t=>{const r=t;console.log(r),this.atualizarUsuarioForm.setValue({id:r.id,nome:r.nome,registro:r.registro,cpf:r.cpf,perfil:r.perfil,setor:r.setor,letraTurno:r.letraTurno,ramal:r.ramal})})}presentToastSucess(t){return(0,p.mG)(this,void 0,void 0,function*(){yield(yield this.toastController.create({message:"Usu\xe1rio atualizado com sucesso",duration:3e3,cssClass:"custom-toast",position:t})).present()})}presentToastFail(t){return(0,p.mG)(this,void 0,void 0,function*(){yield(yield this.toastController.create({message:"Erro: usu\xe1rio n\xe3o atualizado",duration:3e3,cssClass:"custom-toast",position:t})).present()})}}return e.\u0275fac=function(t){return new(t||e)(o.Y36(s.qu),o.Y36(d.F0),o.Y36(Z),o.Y36(d.gz),o.Y36(n.yF))},e.\u0275cmp=o.Xpm({type:e,selectors:[["app-atualizar-usuario"]],decls:60,vars:3,consts:[[3,"translucent"],["color","",3,"fullscreen"],[1,"cadastro",3,"formGroup","submit"],[1,"titulo"],[1,"inputs"],["fill","outline"],["formControlName","id"],["slot","helper"],["position","floating"],["formControlName","nome"],["formControlName","registro"],["formControlName","cpf"],["formControlName","perfil"],["formControlName","setor"],["placeholder","Turno de trabalho","formControlName","letraTurno"],["formControlName","ramal"],[1,"buttons"],["size","large","type","submit","color","tertiary"],["size","large","type","reset","color","medium"]],template:function(t,r){1&t&&(o.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),o._uU(3," Gest\xe3o de usu\xe1rios "),o.qZA()()(),o.TgZ(4,"ion-content",1)(5,"form",2),o.NdJ("submit",function(){return r.atualizarUsuario()}),o.TgZ(6,"h1",3),o._uU(7,"Atualizar usu\xe1rio"),o.qZA(),o.TgZ(8,"div",4)(9,"ion-item",5),o._UZ(10,"ion-input",6),o.TgZ(11,"ion-note",7),o._uU(12,"id do usu\xe1rio"),o.qZA()(),o.TgZ(13,"ion-item",5)(14,"ion-label",8),o._uU(15,"Nome"),o.qZA(),o._UZ(16,"ion-input",9),o.TgZ(17,"ion-note",7),o._uU(18,"Nome e Sobrenome"),o.qZA()(),o.TgZ(19,"ion-item",5)(20,"ion-label",8),o._uU(21,"Registro"),o.qZA(),o._UZ(22,"ion-input",10),o.TgZ(23,"ion-note",7),o._uU(24,"N\xfamero do registro Avient"),o.qZA()(),o.TgZ(25,"ion-item",5)(26,"ion-label",8),o._uU(27,"CPF"),o.qZA(),o._UZ(28,"ion-input",11),o.TgZ(29,"ion-note",7),o._uU(30,"CPF V\xe1lido"),o.qZA()(),o.TgZ(31,"ion-item",5)(32,"ion-label",8),o._uU(33,"Perfil"),o.qZA(),o._UZ(34,"ion-input",12),o.TgZ(35,"ion-note",7),o._uU(36,"Perfil de acesso"),o.qZA()(),o.TgZ(37,"ion-item",5)(38,"ion-label",8),o._uU(39,"Setor"),o.qZA(),o._UZ(40,"ion-input",13),o.TgZ(41,"ion-note",7),o._uU(42,"Setor de trabalho"),o.qZA()(),o.TgZ(43,"ion-item",5)(44,"ion-label",8),o._uU(45,"Turno"),o.qZA(),o._UZ(46,"ion-input",14),o.TgZ(47,"ion-note",7),o._uU(48,"Turno de trabalho"),o.qZA()(),o.TgZ(49,"ion-item",5)(50,"ion-label",8),o._uU(51,"Ramal"),o.qZA(),o._UZ(52,"ion-input",15),o.TgZ(53,"ion-note",7),o._uU(54,"Ramal para contato"),o.qZA()(),o.TgZ(55,"div",16)(56,"ion-button",17),o._uU(57,"Atualizar Dados"),o.qZA(),o.TgZ(58,"ion-button",18),o._uU(59,"Apagar Dados"),o.qZA()()()()()),2&t&&(o.Q6J("translucent",!0),o.xp6(4),o.Q6J("fullscreen",!0),o.xp6(1),o.Q6J("formGroup",r.atualizarUsuarioForm))},dependencies:[n.YG,n.W2,n.Gu,n.pK,n.Ie,n.Q$,n.uN,n.wd,n.sr,n.j9,s._Y,s.JJ,s.JL,s.sg,s.u],styles:["form[_ngcontent-%COMP%]{max-width:80%;margin:auto}.titulo[_ngcontent-%COMP%]{text-align:center;font-size:1.3rem;font-weight:700;padding:1rem 0;text-transform:uppercase}ion-item[_ngcontent-%COMP%]{margin-bottom:4px}.buttons[_ngcontent-%COMP%]{padding-top:1rem;display:flex;justify-content:center}.buttons[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{width:50%;height:6vh;font-size:.8rem}"]}),e})();function A(e){return i=>{var t;return function b(e){const i=e.replace(/\D/g,"");return!(!function q(e){let t=!0;return["00000000000","11111111111","22222222222","33333333333","44444444444","55555555555","66666666666","77777777777","88888888888","99999999999"].forEach(r=>{r==e&&(t=!1)}),t}(i)||!function P(e){for(var t,i=0,r=1;r<=9;r++)i+=parseInt(e.substring(r-1,r))*(11-r);if((10==(t=10*i%11)||11==t)&&(t=0),t!=parseInt(e.substring(9,10)))return!1;for(i=0,r=1;r<=10;r++)i+=parseInt(e.substring(r-1,r))*(12-r);return(10==(t=10*i%11)||11==t)&&(t=0),t==parseInt(e.substring(10,11))}(i))}(null===(t=i.get(e))||void 0===t?void 0:t.value)?null:{cpfInvalido:!0}}}let F=(()=>{class e{constructor(t){this.http=t,this.API=`${g.N.api_url}/usuarios`}cadastrarNovoUsario(t){return this.http.post(this.API,t)}}return e.\u0275fac=function(t){return new(t||e)(o.LFG(U.eN))},e.\u0275prov=o.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();function z(e,i){1&e&&(o.TgZ(0,"ion-note",17),o._uU(1,"Campo obrigat\xf3rio"),o.qZA())}function x(e,i){1&e&&(o.TgZ(0,"ion-note",17),o._uU(1,"CPF inv\xe1lido"),o.qZA())}function y(e,i){1&e&&(o.TgZ(0,"ion-note",17),o._uU(1,"Campo obrigat\xf3rio"),o.qZA())}function N(e,i){1&e&&(o.TgZ(0,"ion-note",17),o._uU(1,"Campo obrigat\xf3rio"),o.qZA())}function M(e,i){1&e&&(o.TgZ(0,"ion-note",17),o._uU(1,"Campo obrigat\xf3rio"),o.qZA())}function O(e,i){1&e&&(o.TgZ(0,"ion-note",17),o._uU(1,"Campo obrigat\xf3rio"),o.qZA())}let I=(()=>{class e{constructor(t,r,a,l){this.formBuilder=t,this.novoUsuarioService=r,this.router=a,this.toastController=l}ngOnInit(){this.novoUsuarioForm=this.formBuilder.group({nome:["",s.kI.required],registro:[""],cpf:["",[s.kI.required,s.kI.minLength(11)]],setor:["",s.kI.required],letraTurno:["",s.kI.required],ramal:["",s.kI.required]},{validators:[A("cpf")]})}cadastrarUsuario(){const t=this.novoUsuarioForm.getRawValue();this.novoUsuarioService.cadastrarNovoUsario(t).subscribe(()=>{this.presentToastSucess("middle"),this.router.navigate(["tabs/tab4"])},r=>{this.presentToastFail("middle"),console.log(r),console.log(t)})}presentToastSucess(t){return(0,p.mG)(this,void 0,void 0,function*(){yield(yield this.toastController.create({message:"Usu\xe1rio cadastrado com sucesso",duration:3e3,cssClass:"custom-toast",position:t})).present()})}presentToastFail(t){return(0,p.mG)(this,void 0,void 0,function*(){yield(yield this.toastController.create({message:"Cadastro n\xe3o realizado",duration:3e3,cssClass:"custom-toast",position:t})).present()})}}return e.\u0275fac=function(t){return new(t||e)(o.Y36(s.qu),o.Y36(F),o.Y36(d.F0),o.Y36(n.yF))},e.\u0275cmp=o.Xpm({type:e,selectors:[["app-cadastro-de-usuario"]],decls:44,vars:9,consts:[[3,"translucent"],["color","",3,"fullscreen"],[1,"cadastro",3,"formGroup","submit"],[1,"titulo"],[1,"inputs"],["fill","outline"],["position","floating"],["placeholder","Nome e Sobrenome","formControlName","nome"],["slot","error",4,"ngIf"],["placeholder","N\xfamero do registro Avient","formControlName","registro"],["placeholder","CPF V\xe1lido","formControlName","cpf","name","cpf"],["placeholder","Setor de trabalho","formControlName","setor"],["placeholder","Turno de trabalho","formControlName","letraTurno"],["placeholder","Ramal para contato","formControlName","ramal"],[1,"buttons"],["type","submit","color","tertiary"],["type","reset","color","medium"],["slot","error"]],template:function(t,r){if(1&t&&(o.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),o._uU(3," Gest\xe3o de usu\xe1rios "),o.qZA()()(),o.TgZ(4,"ion-content",1)(5,"form",2),o.NdJ("submit",function(){return r.cadastrarUsuario()}),o.TgZ(6,"h1",3),o._uU(7,"Cadastrar novo usu\xe1rio"),o.qZA(),o.TgZ(8,"div",4)(9,"ion-item",5)(10,"ion-label",6),o._uU(11,"Nome"),o.qZA(),o._UZ(12,"ion-input",7),o.YNc(13,z,2,0,"ion-note",8),o.qZA(),o.TgZ(14,"ion-item",5)(15,"ion-label",6),o._uU(16,"Registro"),o.qZA(),o._UZ(17,"ion-input",9),o.qZA(),o.TgZ(18,"ion-item",5)(19,"ion-label",6),o._uU(20,"CPF"),o.qZA(),o._UZ(21,"ion-input",10),o.YNc(22,x,2,0,"ion-note",8),o.YNc(23,y,2,0,"ion-note",8),o.qZA(),o.TgZ(24,"ion-item",5)(25,"ion-label",6),o._uU(26,"Setor"),o.qZA(),o._UZ(27,"ion-input",11),o.YNc(28,N,2,0,"ion-note",8),o.qZA(),o.TgZ(29,"ion-item",5)(30,"ion-label",6),o._uU(31,"Turno"),o.qZA(),o._UZ(32,"ion-input",12),o.YNc(33,M,2,0,"ion-note",8),o.qZA(),o.TgZ(34,"ion-item",5)(35,"ion-label",6),o._uU(36,"Ramal"),o.qZA(),o._UZ(37,"ion-input",13),o.YNc(38,O,2,0,"ion-note",8),o.qZA(),o.TgZ(39,"div",14)(40,"ion-button",15),o._uU(41,"Cadastrar"),o.qZA(),o.TgZ(42,"ion-button",16),o._uU(43,"Apagar Dados"),o.qZA()()()()()),2&t){let a,l,u,f,h,_;o.Q6J("translucent",!0),o.xp6(4),o.Q6J("fullscreen",!0),o.xp6(1),o.Q6J("formGroup",r.novoUsuarioForm),o.xp6(8),o.Q6J("ngIf",(null==(a=r.novoUsuarioForm.get("nome"))||null==a.errors?null:a.errors.required)&&(null==(a=r.novoUsuarioForm.get("nome"))?null:a.touched)),o.xp6(9),o.Q6J("ngIf",(null==r.novoUsuarioForm.errors?null:r.novoUsuarioForm.errors.cpfInvalido)&&(null==(l=r.novoUsuarioForm.get("cpf"))?null:l.touched)),o.xp6(1),o.Q6J("ngIf",(null==(u=r.novoUsuarioForm.get("cpf"))||null==u.errors?null:u.errors.required)&&(null==(u=r.novoUsuarioForm.get("cpf"))?null:u.touched)),o.xp6(5),o.Q6J("ngIf",(null==(f=r.novoUsuarioForm.get("setor"))||null==f.errors?null:f.errors.required)&&(null==(f=r.novoUsuarioForm.get("setor"))?null:f.touched)),o.xp6(5),o.Q6J("ngIf",(null==(h=r.novoUsuarioForm.get("letraTurno"))||null==h.errors?null:h.errors.required)&&(null==(h=r.novoUsuarioForm.get("letraTurno"))?null:h.touched)),o.xp6(5),o.Q6J("ngIf",(null==(_=r.novoUsuarioForm.get("ramal"))||null==_.errors?null:_.errors.required)&&(null==(_=r.novoUsuarioForm.get("ramal"))?null:_.touched))}},dependencies:[m.O5,n.YG,n.W2,n.Gu,n.pK,n.Ie,n.Q$,n.uN,n.wd,n.sr,n.j9,s._Y,s.JJ,s.JL,s.sg,s.u],styles:[".titulo[_ngcontent-%COMP%]{text-align:center;font-size:1.3rem;font-weight:700;padding:2rem 0;text-transform:uppercase}.buttons[_ngcontent-%COMP%]{padding-top:1rem;display:flex;justify-content:center}.buttons[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{width:50%;height:6vh}form[_ngcontent-%COMP%]{max-width:80%;margin:auto}ion-item[_ngcontent-%COMP%]{margin-bottom:2rem;height:6vh}ion-note[_ngcontent-%COMP%]{box-sizing:border-box}"]}),e})();function S(e,i){if(1&e&&(o.TgZ(0,"div")(1,"ion-card"),o._UZ(2,"img",3),o.TgZ(3,"ion-card-header")(4,"ion-card-title"),o._uU(5),o.qZA(),o.TgZ(6,"ion-card-subtitle"),o._uU(7),o.qZA(),o.TgZ(8,"ion-card-subtitle"),o._uU(9),o.qZA()(),o.TgZ(10,"ion-card-content")(11,"p"),o._uU(12),o.qZA(),o.TgZ(13,"p"),o._uU(14),o.qZA(),o.TgZ(15,"p"),o._uU(16),o.qZA(),o.TgZ(17,"p"),o._uU(18),o.TgZ(19,"a",4),o._UZ(20,"ion-icon",5),o.qZA()()()()()),2&e){const t=o.oxw();o.xp6(5),o.Oqu(t.usuario$.nome),o.xp6(2),o.hij("Setor: ",t.usuario$.setor,""),o.xp6(2),o.hij("Turno: ",t.usuario$.letraTurno,""),o.xp6(3),o.hij("Registro Avient: ",t.usuario$.registro,""),o.xp6(2),o.hij("CPF: ",t.usuario$.cpf,""),o.xp6(2),o.hij("Perfil: ",t.usuario$.perfil,""),o.xp6(2),o.hij("Ramal: ",t.usuario$.ramal," "),o.xp6(1),o.MGl("href","tel:+5511",t.usuario$.ramal,"",o.LSH)}}function D(e,i){1&e&&o._uU(0,"Carregando dados")}let Y=(()=>{class e{constructor(t,r){this.atualizarService=t,this.route=r}ngOnInit(){this.usuarioId=this.route.snapshot.params.id,this.detalharDadosUsuario(),console.log(this.usuarioId),console.log(this.usuario$)}detalharDadosUsuario(){return this.atualizarService.detalharUsuario(this.usuarioId).subscribe(t=>{this.usuario$=t})}}return e.\u0275fac=function(t){return new(t||e)(o.Y36(Z),o.Y36(d.gz))},e.\u0275cmp=o.Xpm({type:e,selectors:[["app-detalhar-usuario"]],decls:4,vars:3,consts:[["color","primary",3,"fullscreen"],[4,"ngIf","ngIfElse"],["loading",""],["alt","Silhouette of mountains","src","https://ionicframework.com/docs/img/demos/card-media.png"],[3,"href"],["name","call-outline"]],template:function(t,r){if(1&t&&(o.TgZ(0,"ion-content",0),o.YNc(1,S,21,8,"div",1),o.qZA(),o.YNc(2,D,1,0,"ng-template",null,2,o.W1O)),2&t){const a=o.MAs(3);o.Q6J("fullscreen",!0),o.xp6(1),o.Q6J("ngIf",r.usuario$)("ngIfElse",a)}},dependencies:[m.O5,n.PM,n.FN,n.Zi,n.tO,n.Dq,n.W2,n.gu]}),e})();var J=c(4004);let G=(()=>{class e{constructor(t){this.http=t,this.API=`${g.N.api_url}/usuarios`}listarUsuarios(){return this.http.get(this.API).pipe((0,J.U)(t=>t.content))}}return e.\u0275fac=function(t){return new(t||e)(o.LFG(U.eN))},e.\u0275prov=o.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),$=(()=>{class e{constructor(t){this.http=t}deletaUsuario(t){return this.http.delete(`${g.N.api_url}/usuarios/${t}`)}}return e.\u0275fac=function(t){return new(t||e)(o.LFG(U.eN))},e.\u0275prov=o.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();function E(e,i){if(1&e){const t=o.EpF();o.TgZ(0,"ion-item-sliding")(1,"ion-item")(2,"ion-avatar",3),o._UZ(3,"img",4),o.qZA(),o.TgZ(4,"div",5)(5,"h2"),o._uU(6),o.qZA(),o.TgZ(7,"p"),o._uU(8),o.qZA()(),o.TgZ(9,"ion-note",6),o._uU(10),o.qZA()(),o.TgZ(11,"ion-item-options",7)(12,"ion-button",8),o.NdJ("click",function(){const l=o.CHM(t).$implicit,u=o.oxw();return o.KtG(u.detalharPage(l.id))}),o.TgZ(13,"div",9),o._UZ(14,"ion-icon",10),o.TgZ(15,"p"),o._uU(16,"Detalhar"),o.qZA()()(),o.TgZ(17,"ion-button",11),o.NdJ("click",function(){const l=o.CHM(t).$implicit,u=o.oxw();return o.KtG(u.atualizarPage(l.id))}),o.TgZ(18,"div",9),o._UZ(19,"ion-icon",12),o.TgZ(20,"p"),o._uU(21,"Atualizar"),o.qZA()()(),o.TgZ(22,"ion-button",13),o.NdJ("click",function(){const l=o.CHM(t).$implicit,u=o.oxw();return o.KtG(u.apagarPage(l.id))}),o.TgZ(23,"div",9),o._UZ(24,"ion-icon",14),o.TgZ(25,"p"),o._uU(26,"Apagar"),o.qZA()()()()()}if(2&e){const t=i.$implicit;o.xp6(6),o.Oqu(t.nome),o.xp6(2),o.Oqu(t.setor),o.xp6(2),o.Oqu(t.letraTurno)}}const w=[{path:"",component:(()=>{class e{constructor(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o.Xpm({type:e,selectors:[["app-tab4"]],decls:31,vars:2,consts:[[3,"translucent"],["color","tertiary",3,"fullscreen"],["collapse","condense"],["color","tertiary"],[1,"container","cards"],["routerLink","cadastrar"],["routerLink","listar"],["routerLink","atualizar"]],template:function(t,r){1&t&&(o.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),o._uU(3," Gest\xe3o de usu\xe1rios "),o.qZA()()(),o.TgZ(4,"ion-content",1)(5,"ion-header",2)(6,"ion-toolbar",3)(7,"ion-title"),o._uU(8,"Gest\xe3o de usu\xe1rios"),o.qZA()()(),o.TgZ(9,"div",4)(10,"ion-card")(11,"a",5)(12,"ion-card-header")(13,"ion-card-title"),o._uU(14,"Cadastrar"),o.qZA()(),o.TgZ(15,"ion-card-content"),o._uU(16," Clique aqui para cadastrar um novo usu\xe1rio. "),o.qZA()()(),o.TgZ(17,"ion-card")(18,"a",6)(19,"ion-card-header")(20,"ion-card-title"),o._uU(21,"Consultar"),o.qZA()(),o.TgZ(22,"ion-card-content"),o._uU(23," Consulte todos os usu\xe1rios cadastrados. "),o.qZA()()(),o.TgZ(24,"ion-card")(25,"a",7)(26,"ion-card-header")(27,"ion-card-title"),o._uU(28,"Atualizar Usu\xe1rio"),o.qZA()(),o.TgZ(29,"ion-card-content"),o._uU(30," Atualizar dados dos usu\xe1rios "),o.qZA()()()()()),2&t&&(o.Q6J("translucent",!0),o.xp6(4),o.Q6J("fullscreen",!0))},dependencies:[n.PM,n.FN,n.Zi,n.Dq,n.W2,n.Gu,n.wd,n.sr,n.Fo,d.rH],styles:[".container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}ion-card[_ngcontent-%COMP%]{max-width:40%}ion-card-title[_ngcontent-%COMP%]{font-size:16px;text-align:center}ion-card-content[_ngcontent-%COMP%]{text-align:center;font-size:12px}ion-title[_ngcontent-%COMP%]{font-size:1.3rem}a[_ngcontent-%COMP%]{text-decoration:none;color:unset}"]}),e})()},{path:"cadastrar",component:I},{path:"listar",component:(()=>{class e{constructor(t,r,a,l,u){this.listarUsuariosService=t,this.router=r,this.deletarUsuarioService=a,this.alertController=l,this.atualizarService=u,this.usuarios$=this.listarUsuariosService.listarUsuarios()}ngOnInit(){}atualizarPage(t){this.router.navigate([`/tabs/tab4/atualizar/${t}`])}detalharPage(t){this.router.navigate([`/tabs/tab4/detalhar/${t}`])}apagarPage(t){this.presentAlert(t)}deletaUsuario(t){this.deletarUsuarioService.deletaUsuario(t).subscribe()}presentAlert(t){return(0,p.mG)(this,void 0,void 0,function*(){yield(yield this.alertController.create({header:"Voc\xea tem certeza que deseja apagar o usu\xe1rio?",cssClass:"custom-alert",buttons:[{text:"Sim",cssClass:"alert-button-confirm",handler:a=>{this.deletaUsuario(t)}},{text:"N\xe3o",cssClass:"alert-button-cancel"}]})).present()})}}return e.\u0275fac=function(t){return new(t||e)(o.Y36(G),o.Y36(d.F0),o.Y36($),o.Y36(n.Br),o.Y36(Z))},e.\u0275cmp=o.Xpm({type:e,selectors:[["app-lista-de-usuarios"]],decls:10,vars:4,consts:[[3,"translucent"],[1,"list-avatar-page"],[4,"ngFor","ngForOf"],["item-start",""],["alt","Silhouette of a person's head","src","https://ionicframework.com/docs/img/demos/avatar.svg"],[1,"descricao"],["item-end",""],[1,"options"],["color","light","icon-start","",1,"",3,"click"],[1,"buttons"],["name","information-circle-outline"],["color","primary","icon-start","",3,"click"],["name","person-add-outline"],["color","danger","icon-start","",3,"click"],["name","trash-outline"]],template:function(t,r){1&t&&(o.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),o._uU(3," Gest\xe3o de usu\xe1rios "),o.qZA()()(),o.TgZ(4,"ion-content",1)(5,"ion-list")(6,"ion-list-header"),o._uU(7," Usu\xe1rios cadastrados "),o.qZA(),o.YNc(8,E,27,3,"ion-item-sliding",2),o.ALo(9,"async"),o.qZA()()),2&t&&(o.Q6J("translucent",!0),o.xp6(8),o.Q6J("ngForOf",o.lcZ(9,2,r.usuarios$)))},dependencies:[m.sg,n.BJ,n.YG,n.W2,n.Gu,n.gu,n.Ie,n.IK,n.td,n.q_,n.yh,n.uN,n.wd,n.sr,m.Ov],styles:[".list-avatar-page[_ngcontent-%COMP%]   ion-note[_ngcontent-%COMP%]{font-size:12px;align-self:flex-start;margin-top:14px}.list-avatar-page[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{padding:1rem}.descricao[_ngcontent-%COMP%]{padding:0 1rem 0 1.4rem;width:70%}.descricao[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:.9rem;margin:0;padding:.6rem 0 0;border:0}.descricao[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:.8rem;margin:0;padding:.2rem 0 .4rem;border:0}.options[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;padding:0}.options[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{padding:.5rem 0 0;margin:0;font-size:.5rem}ion-item-options[_ngcontent-%COMP%]{margin:.8rem .2rem .2rem 0;padding-right:1rem}ion-list-header[_ngcontent-%COMP%]{text-transform:uppercase;font-weight:700}"]}),e})()},{path:"atualizar/:id",component:T},{path:"detalhar/:id",component:Y}];let L=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[d.Bz.forChild(w),d.Bz]}),e})();var Q=c(581);let k=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[n.Pc,m.ez,s.u5,Q.e,L,v]}),e})()}}]);