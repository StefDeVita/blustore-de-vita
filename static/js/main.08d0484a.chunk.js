(this["webpackJsonpblustore-de-vita"]=this["webpackJsonpblustore-de-vita"]||[]).push([[0],{51:function(e,t,c){},59:function(e,t,c){"use strict";c.r(t);var a=c(6),n=c.n(a),i=c(44),s=c.n(i),r=c(16),o=c(14),d=(c(51),c(21)),j=c(12),l=c(3),b=function(e){var t=e.producto;return Object(l.jsxs)("div",{className:"card",children:[Object(l.jsx)(r.b,{to:"/product/".concat(t.id),children:Object(l.jsx)("img",{className:"card-img-top img-fluid",src:t.imagen,alt:t.nombre})}),Object(l.jsxs)("div",{className:"card-body",children:[Object(l.jsx)(r.b,{to:"/product/".concat(t.id),children:Object(l.jsx)("h5",{className:"card-title",children:t.nombre})}),Object(l.jsx)("p",{className:"card-text",children:"$".concat(t.precio)})]}),Object(l.jsx)("div",{className:"card-body text-center"})]})},u=function(e){var t=e.productos,c=Object(a.useState)(!1),n=Object(j.a)(c,2),i=n[0],s=n[1],r=Object(a.useState)([]),o=Object(j.a)(r,2),d=o[0],u=o[1];return Object(a.useEffect)((function(){s(!0),new Promise((function(e){setTimeout((function(){e(t)}),200)})).then((function(e){return u(e)})).finally((function(){return s(!1)}))}),[t]),Object(l.jsxs)("div",{className:"row justify-content-around",children:[i&&Object(l.jsx)("p",{children:"Cargando productos..."}),d.map((function(e){return Object(l.jsx)(b,{producto:e},e.id)}))]})},m=c(34),O=(c(43),{apiKey:"AIzaSyDMS_WVjSrnBMHtb3Ag0jtjdjCxermTlWQ",authDomain:"blustore-bc5b3.firebaseapp.com",projectId:"blustore-bc5b3",storageBucket:"blustore-bc5b3.appspot.com",messagingSenderId:Object({NODE_ENV:"production",PUBLIC_URL:"/blustore-de-vita",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_KEY:"AIzaSyDMS_WVjSrnBMHtb3Ag0jtjdjCxermTlWQ",REACT_APP_APP_ID:"1:502463289737:web:145919c2f3ca9639382958",REACT_APP_AUTH_DOMAIN:"blustore-bc5b3.firebaseapp.com",REACT_APP_MESSAGING_SENDER_ID:"502463289737",REACT_APP_PROJECT_ID:"blustore-bc5b3",REACT_APP_STORAGE_BUCKET:"blustore-bc5b3.appspot.com"}).REACT_APP_MESSAGE_SENDER_ID,appId:"AIzaSyDMS_WVjSrnBMHtb3Ag0jtjdjCxermTlWQ"}),h=m.a.initializeApp(O),x=function(){return m.a.firestore(h)},p=function(){var e=Object(a.useState)([]),t=Object(j.a)(e,2),c=t[0],n=t[1];return Object(a.useEffect)((function(){x().collection("productos").get().then((function(e){e.empty?console.log("No hay productos"):n(e.docs.map((function(e){return Object(d.a)({id:e.id},e.data())})))})).catch((function(e){console.log("Error cargando productos",e)}))}),[]),Object(l.jsx)(u,{productos:c})},f=c(26),g=Object(a.createContext)(),v=function(e){var t=e.children,c=Object(a.useState)([]),n=Object(j.a)(c,2),i=n[0],s=n[1],r=Object(a.useState)(0),o=Object(j.a)(r,2),d=o[0],b=o[1],u=Object(a.useState)(0),m=Object(j.a)(u,2),O=m[0],h=m[1],x=Object(a.useState)(""),p=Object(j.a)(x,2),v=p[0],N=p[1],A=function(){var e=0,t=0;i.forEach((function(c){e+=c.cantidad,t+=c.cantidad*c.item.precio})),b(e),h(t)};return Object(l.jsx)(g.Provider,{value:{id:v,cantidad:d,items:i,agregarItem:function(e,t){var c={item:e,cantidad:t},a=i.findIndex((function(e){return e.item.id===c.item.id}));-1===a?i.push(c):(i[a].cantidad+=c.cantidad,i[a].cantidad>=i[a].item.stock&&(i[a].cantidad=i[a].item.stock)),s(Object(f.a)(i)),A()},borrar:function(){s([]),b(0),h(0)},precio:O,eliminarItem:function(e){var t=i,c=t.findIndex((function(t){return t.item.id===e}));t.splice(c,1),s(Object(f.a)(t)),A()},setIdCompra:function(e){N(e)}},children:t})};function N(){var e=Object(a.useContext)(g);return Object(l.jsx)("div",{children:Object(l.jsxs)("button",{id:"carrito",children:[Object(l.jsx)("span",{className:"badge badge-primary",children:e.cantidad}),Object(l.jsx)("img",{id:"imagenCarrito",className:"img-fluid rounded",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAA9ElEQVRIid3UPy5EURzF8Q8FCgURNY0FSMQaDInKVqxBZgMqyRTCCqaU0NuBckaFkjwKf4r7S7yMZNz7vCfhJLf7/s45N/eXy3/RG97jDLoIeK0FPGO1ixAY1oKansu64exEwHELJafefgY30WS3wHQJ9zG3/x18GOCwIKAfM1c58DKepM3ayODXUQW/ldtoEI36Gex5sKe55rAZQw9YmMJtS80rrJUEwLX81TwqNV/BXYZxhTPMlwachMGFtLqtalH6Ll7kbVGx5vCo2TeRrQN5b9A4oHPt4RZj9Frgvmjs89qjn3CT3/WvqSe1G2GnBe4P6wMWynZC39nrkQAAAABJRU5ErkJggg==",alt:"carrito"})]})})}var A=function(){var e=Object(a.useContext)(g);return Object(l.jsxs)("nav",{className:"navbar navbar-light",children:[Object(l.jsx)(r.b,{to:"/",children:Object(l.jsx)("h2",{className:"navbar-brand",children:"Blu-Store"})}),Object(l.jsx)(r.b,{className:"nav-item",to:"/",children:"Inicio"}),Object(l.jsx)(r.b,{className:"nav-item",to:"/category/0",children:"Productos Digitales"}),Object(l.jsx)(r.b,{className:"nav-item",to:"/category/1",children:"Productos Fisicos"}),0!==e.cantidad&&Object(l.jsx)(r.b,{className:"nav-item",to:"/cart",children:Object(l.jsx)(N,{})})]})},S=function(){return Object(l.jsx)("div",{id:"notfound",children:Object(l.jsxs)("div",{class:"notfound",children:[Object(l.jsx)("div",{class:"notfound-404",children:Object(l.jsx)("h1",{children:"404"})}),Object(l.jsx)("h2",{children:"La pagina que estas buscando no se encontro"}),Object(l.jsxs)(r.b,{to:"/",children:[Object(l.jsx)("span",{class:"arrow"}),"Volver al inicio"]})]})})},C=function(e){var t=Object(a.useState)(e.initial),c=Object(j.a)(t,2),n=c[0],i=c[1];return Object(l.jsx)("div",{className:"card-chica flex-center",style:{width:"18rem"},children:Object(l.jsxs)("div",{className:"card-body center",children:[Object(l.jsx)("h5",{className:"card-title",children:"Elija la cantidad a A\xf1adir"}),Object(l.jsx)("p",{className:"card-text",children:"Deseo agregar esta cantidad al carrito"}),Object(l.jsx)("div",{className:"card-text",children:n}),Object(l.jsxs)("div",{className:"card-text",children:[Object(l.jsx)("button",{onClick:function(){n<=e.initial||(i(n-1),e.onAdd(n-1))},className:"btn btn-primary",children:"-"}),Object(l.jsx)("button",{onClick:function(){n>=e.stock||(i(n+1),e.onAdd(n+1))},className:"btn btn-primary",children:"+"})]})]})})},E=function(){var e=Object(a.useState)({}),t=Object(j.a)(e,2),c=t[0],n=t[1],i=Object(a.useContext)(g),s=Object(a.useState)(!0),r=Object(j.a)(s,2),b=r[0],u=r[1],m=Object(a.useState)(1),O=Object(j.a)(m,2),h=O[0],p=O[1],f=Object(a.useState)(!1),v=Object(j.a)(f,2),N=v[0],A=v[1],E=Object(a.useState)([]),y=Object(j.a)(E,2),P=y[0],_=y[1],T=Object(o.g)().id,I=Object(o.f)();return Object(a.useEffect)((function(){A(!0),x().collection("productos").doc(T).get().then((function(e){e.exists?n(Object(d.a)({id:e.id},e.data())):u(!1)})).catch((function(e){return console.log("ha habido un error",e)})).finally(A(!1))}),[T]),b?N?Object(l.jsx)("p",{children:"Cargando productos..."}):Object(l.jsx)("div",{className:"flex",children:Object(l.jsxs)("div",{className:"row",children:[Object(l.jsx)("div",{className:"col-2",children:Object(l.jsx)("img",{src:c.imagen,className:"card-img img-fluid",alt:c.nombre})}),Object(l.jsx)("div",{className:"col",children:Object(l.jsxs)("div",{className:"card-body item-detail-card-description",children:[Object(l.jsxs)("div",{className:"item-detail-card-description-body",children:[Object(l.jsx)("h5",{className:"card-title item-detail-name",children:c.nombre}),Object(l.jsx)("p",{className:"card-text item-detail-info",children:c.descripcion}),Object(l.jsxs)("p",{className:"card-text item-detail-precio",children:["Precio por unidad: $",c.precio]})]}),Object(l.jsx)("div",{id:"cardfinal",className:"item-detail-card-description-body d-flex",children:Object(l.jsx)(C,{className:"flex-center",initial:1,stock:c.stock,onAdd:function(e){p(e)}})}),Object(l.jsx)("div",{id:"botonaniadir",className:"d-flex",children:Object(l.jsxs)("button",{onClick:function(){0!==P.length&&_([]),_([c,h]),i.agregarItem(c,h),I.push("/cart")},className:"btn item-detail-button-comprar",children:["Agregar ",h]})})]})})]})}):Object(l.jsx)(S,{})},y=function(e){var t=Object(a.useState)([]),c=Object(j.a)(t,2),n=c[0],i=c[1],s=Object(a.useState)(!1),r=Object(j.a)(s,2),b=r[0],m=r[1],O=Object(o.g)().categoria;return console.log(O),Object(a.useEffect)((function(){m(!0),x().collection("productos").get().then((function(e){if(e.empty)console.log("No hay productos");else{var t=e.docs.filter((function(e){return e.data().categoryid===O})).map((function(e){return Object(d.a)({id:e.id},e.data())}));i(t)}})).catch((function(e){return console.log("ha habido un error",e)})).finally(m(!1))}),[O]),b?Object(l.jsx)("div",{className:"contenedor",children:Object(l.jsx)("h4",{children:"Cargando..."})}):Object(l.jsx)(u,{productos:n})},P=c(11),_=function(e){var t=e.item,c=t.item,n=t.cantidad,i=Object(a.useContext)(g);return Object(l.jsxs)("div",{className:"card",children:[Object(l.jsx)("div",{children:Object(l.jsx)("img",{className:"img-fluid card-img-top",src:c.imagen,alt:c.nombre})}),Object(l.jsxs)("div",{className:"card-body",children:[Object(l.jsx)("div",{className:"card-title",children:c.nombre}),Object(l.jsx)("div",{children:c.descripcion}),Object(l.jsxs)("div",{className:"card-body",children:["Precio por unidad:"," ",Object(l.jsxs)("span",{className:"card-text",children:["$",c.precio]})," - Cantidad:"," ",Object(l.jsx)("span",{className:"card-text",children:n})," - Subtotal:"," ",Object(l.jsxs)("span",{className:"card-text",children:["$",n*c.precio]})]})]}),Object(l.jsx)("div",{className:"card-body",children:Object(l.jsx)("button",{className:"btn",onClick:function(){i.eliminarItem(c.id)},children:"Eliminar Item"})})]})},T=function(){var e=Object(a.useContext)(g),t=Object(a.useState)({name:"",surname:"",phone:""}),c=Object(j.a)(t,2),n=c[0],i=c[1],s=Object(o.f)(),b=function(e){i((function(t){return Object(d.a)(Object(d.a)({},t),{},Object(P.a)({},e.target.name,e.target.value))}))};return 0===e.items.length?Object(l.jsx)("div",{className:"d-flex container justify-content-center",children:Object(l.jsx)(r.b,{className:"carrito-vacio",to:"/",children:"El carrito esta vacio, volver a Inicio"})}):Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"container d-flex",children:e.items.map((function(e,t){return Object(l.jsx)(_,{item:e},t)}))}),Object(l.jsxs)("div",{className:"container",children:[Object(l.jsxs)("h3",{id:"total",children:["Total de la compra: $",e.precio]}),Object(l.jsx)("button",{className:"btn",onClick:e.borrar,children:"Limpiar Carrito"})]}),Object(l.jsxs)("form",{className:"container",id:"form",onSubmit:function(t){t.preventDefault(),function(){var t=Object(d.a)(Object(d.a)({},n),{},{date:m.a.firestore.Timestamp.fromDate(new Date),items:e.items,total:e.precio});x().collection("orders").add(t).then((function(t){s.push("/checkout/".concat(t.id)),e.borrar()})).catch((function(e){return console.log(e)}))}()},children:[Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{htmlFor:"name",children:"Nombre"}),Object(l.jsx)("input",{className:"form-control",type:"text",name:"name",id:"name",onChange:b})]}),Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{htmlFor:"surname",children:"Apellido"}),Object(l.jsx)("input",{className:"form-control",type:"text",name:"surname",id:"surname",onChange:b})]}),Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{htmlFor:"phone",children:"Telefono"}),Object(l.jsx)("input",{className:"form-control",type:"tel",id:"phone",name:"phone",onChange:b})]}),Object(l.jsx)("button",{type:"submit",disabled:!(""!==n.name&&""!==n.surname&&""!==n.phone),className:"btn",children:"Comprar Ahora"})]})]})},I=function(){var e=Object(o.g)().id,t=Object(a.useContext)(g),c=Object(a.useState)(!1),n=Object(j.a)(c,2),i=n[0],s=n[1],r=Object(a.useState)(!0),b=Object(j.a)(r,2),u=(b[0],b[1]),m=Object(a.useState)({name:"",surname:"",phone:"",items:[],date:{}}),O=Object(j.a)(m,2),h=O[0],p=O[1];return Object(a.useEffect)((function(){s(!0);var c=x();c.collection("orders").doc(e).get().then((function(e){e.exists?p(Object(d.a)({id:e.id},e.data())):u(!1)})).catch((function(e){return console.log("ha habido un error",e)})).then((function(){t.items.forEach((function(e){var t=c.collection("productos").doc(e.item.id);console.log(e,e.cantidad),t.update({stock:e.item.stock-e.cantidad}).catch((function(e){return console.log("ha habido un error",e)}))}))})).finally(s(!1))}),[t.items,e]),i?Object(l.jsx)("div",{className:"container",children:"Cargando..."}):Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{children:"\xa1Muchas gracias por su compra!"}),Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("h2",{children:"Resumen de su compra"}),Object(l.jsxs)("h3",{children:["ID de la compra: ",e]}),Object(l.jsx)("div",{children:Object(l.jsxs)("table",{className:"table",children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{scope:"col",children:"Producto"}),Object(l.jsx)("th",{scope:"col",children:"Precio"}),Object(l.jsx)("th",{scope:"col",children:"Cantidad"}),Object(l.jsx)("th",{scope:"col",children:"Subtotal"})]})}),Object(l.jsx)("tbody",{children:h.items.map((function(e){return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:e.item.nombre}),Object(l.jsxs)("td",{children:["$",e.item.precio]}),Object(l.jsx)("td",{children:e.cantidad}),Object(l.jsxs)("td",{children:["$",e.cantidad*e.item.precio]})]})}))})]})})]}),Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("h3",{children:"Sus datos Personales"}),Object(l.jsxs)("div",{className:"container",children:[Object(l.jsxs)("p",{children:["Nombre : ",h.name]}),Object(l.jsxs)("p",{children:["Apellido : ",h.surname]}),Object(l.jsxs)("p",{children:["Telefono: ",h.phone]})]})]})]})};var D=function(){return Object(l.jsx)(v,{children:Object(l.jsxs)(r.a,{children:[Object(l.jsx)(A,{}),Object(l.jsxs)(o.c,{children:[Object(l.jsx)(o.a,{exact:!0,path:"/",component:p}),Object(l.jsx)(o.a,{exact:!0,path:"/blustore-de-vita/",component:p}),Object(l.jsx)(o.a,{exact:!0,path:"/category/:categoria",component:y}),Object(l.jsx)(o.a,{exact:!0,path:"/product/:id",component:E}),Object(l.jsx)(o.a,{exact:!0,path:"/cart",component:T}),Object(l.jsx)(o.a,{exact:!0,path:"/checkout/:id",component:I}),Object(l.jsx)(o.a,{exact:!0,path:"*",component:S})]})]})})};s.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(D,{})}),document.getElementById("root"))}},[[59,1,2]]]);
//# sourceMappingURL=main.08d0484a.chunk.js.map