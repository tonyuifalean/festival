"use strict";(self.webpackChunksighisoara_festival=self.webpackChunksighisoara_festival||[]).push([[592],{2925:(d,p,o)=>{o.d(p,{O:()=>t});var s=o(5e3),l=o(6808);let t=(()=>{class r{}return r.\u0275fac=function(m){return new(m||r)},r.\u0275cmp=s.Xpm({type:r,selectors:[["app-spinner"]],decls:1,vars:1,consts:[[3,"diameter"]],template:function(m,c){1&m&&s._UZ(0,"mat-spinner",0),2&m&&s.Q6J("diameter",30)},directives:[l.$g],styles:["[_nghost-%COMP%]{width:100%}mat-spinner[_ngcontent-%COMP%]{margin:10px auto}"]}),r})()},6709:(d,p,o)=>{o.d(p,{a:()=>T});var s=o(3547),l=o(9854),t=o(5e3),r=o(1223),_=o(6766),m=o(9808),c=o(2466);function C(a,i){if(1&a&&(t.TgZ(0,"th",10),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&a){const e=t.oxw().$implicit,n=t.oxw();t.Q6J("disabled",!n.isSortable(e.name)),t.xp6(1),t.hij(" ",t.lcZ(2,2,e.title)," ")}}function f(a,i){if(1&a&&(t.TgZ(0,"td",11),t._uU(1),t.qZA()),2&a){const e=i.$implicit,n=t.oxw().$implicit;t.xp6(1),t.hij(" ",e[n.name]," ")}}function D(a,i){1&a&&(t.ynx(0,7),t.YNc(1,C,3,4,"th",8),t._UZ(2,"th"),t.YNc(3,f,2,1,"td",9),t.BQk()),2&a&&t.s9C("matColumnDef",i.$implicit.name)}function h(a,i){1&a&&t._UZ(0,"tr",12)}function g(a,i){1&a&&t._UZ(0,"tr",13)}let T=(()=>{class a{constructor(){this.tableDisplayedColumns=[],this._displayedColumns=[]}set dataSource(e){this.tableDataSource=new l.by(e)}set displayedColumns(e){this._displayedColumns=e,this.tableDisplayedColumns=e.map(n=>n.name)}get displayedColumns(){return this._displayedColumns}ngOnChanges(e){e.dataSource.currentValue!==this.dataSource&&(this.tableDataSource.sort=this.sort)}ngAfterViewInit(){this.tableDataSource.sort=this.sort}isSortable(e){return this.displayedColumns.find(n=>n.name===e).sortable}applyFilter(e){this.tableDataSource.filter=e.target.value.trim().toLowerCase()}}return a.\u0275fac=function(e){return new(e||a)},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-table"]],viewQuery:function(e,n){if(1&e&&t.Gf(s.YE,5),2&e){let u;t.iGM(u=t.CRH())&&(n.sort=u.first)}},inputs:{dataSource:"dataSource",displayedColumns:"displayedColumns"},features:[t.TTD],decls:9,vars:4,consts:[["appearance","outline"],["matInput","","placeholder","Search columns",3,"keyup"],["input",""],["mat-table","","matSort","",1,"mat-elevation-z1",3,"dataSource"],[3,"matColumnDef",4,"ngFor","ngForOf"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],[3,"matColumnDef"],["mat-header-cell","","mat-sort-header","",3,"disabled",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["mat-header-cell","","mat-sort-header","",3,"disabled"],["mat-cell",""],["mat-header-row",""],["mat-row",""]],template:function(e,n){1&e&&(t.TgZ(0,"mat-form-field",0)(1,"mat-label"),t._uU(2,"Filter"),t.qZA(),t.TgZ(3,"input",1,2),t.NdJ("keyup",function(E){return n.applyFilter(E)}),t.qZA()(),t.TgZ(5,"table",3),t.YNc(6,D,4,1,"ng-container",4),t.YNc(7,h,1,0,"tr",5),t.YNc(8,g,1,0,"tr",6),t.qZA()),2&e&&(t.xp6(5),t.Q6J("dataSource",n.tableDataSource),t.xp6(1),t.Q6J("ngForOf",n.displayedColumns),t.xp6(1),t.Q6J("matHeaderRowDef",n.tableDisplayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",n.tableDisplayedColumns))},directives:[r.KE,r.hX,_.Nt,l.BZ,s.YE,m.sg,l.w1,l.fO,l.ge,s.nU,l.Dz,l.ev,l.as,l.XQ,l.nj,l.Gk],pipes:[c.X$],styles:["table[_ngcontent-%COMP%]{width:100%}"]}),a})()}}]);