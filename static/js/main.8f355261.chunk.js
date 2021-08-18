(this["webpackJsonpgoit-react-hw-03-phonebook-hooks"]=this["webpackJsonpgoit-react-hw-03-phonebook-hooks"]||[]).push([[0],[,,function(t,e,n){t.exports={form:"ContactForm_form__1VXAV",label:"ContactForm_label__2rTKX",input:"ContactForm_input__3on06",button:"ContactForm_button__3HCRJ"}},,,,,function(t,e,n){t.exports={label:"Filter_label__3PtnX",input:"Filter_input__1A2qx"}},function(t,e,n){t.exports={button:"ContactItem_button__1P30C",item:"ContactItem_item__3sPsc"}},function(t,e,n){t.exports={title:"App_title__3uuGi"}},,,,,,,function(t,e,n){},,function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),o=n(10),r=n.n(o),s=(n(16),n(11)),u=n(3),i=n(20),l=n(2),b=n.n(l),m=n(0);function j(t){var e=t.addContact,n=Object(a.useState)(""),c=Object(u.a)(n,2),o=c[0],r=c[1],s=Object(a.useState)(""),l=Object(u.a)(s,2),j=l[0],d=l[1],f=function(t){var e=t.currentTarget,n=e.name,a=e.value;switch(n){case"name":r(a);break;case"number":d(a);break;default:return}},O=function(){r(""),d("")};return Object(m.jsxs)("form",{className:b.a.form,onSubmit:function(t){t.preventDefault();var n={id:Object(i.a)(),name:o,number:j};e(n),O()},children:[Object(m.jsxs)("label",{className:b.a.label,children:["Name",Object(m.jsx)("input",{className:b.a.input,onChange:f,type:"text",value:o,name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(m.jsxs)("label",{className:b.a.label,children:["Number",Object(m.jsx)("input",{className:b.a.input,onChange:f,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",value:j,required:!0})]}),Object(m.jsx)("button",{className:b.a.button,type:"submit",children:"Add contact"})]})}var d=n(7),f=n.n(d),O=function(t){var e=t.onChange,n=t.value;return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("label",{className:f.a.label,children:["Find contacts by name",Object(m.jsx)("input",{className:f.a.input,name:"filter",type:"text",value:n,onChange:e})]})})},p=n(8),h=n.n(p),v=function(t){var e=t.removeContact;return t.contacts.map((function(t){var n=t.name,a=t.number,c=t.id;return Object(m.jsxs)("li",{className:h.a.item,children:[n,": ",a,Object(m.jsx)("button",{className:h.a.button,onClick:function(){return e(c)},type:"button",children:"Delete"})]},c)}))},x=function(t){var e=t.removeContact,n=t.contacts;return Object(m.jsx)("ul",{children:Object(m.jsx)(v,{removeContact:e,contacts:n})})},_=n(9),C=n.n(_);function g(){var t=Object(a.useState)([]),e=Object(u.a)(t,2),n=e[0],c=e[1],o=Object(a.useState)(""),r=Object(u.a)(o,2),i=r[0],l=r[1];Object(a.useEffect)((function(){var t;(null===(t=localStorage.getItem("contacts"))||void 0===t?void 0:t.length)>0&&c(JSON.parse(localStorage.getItem("contacts")))}),[]),Object(a.useEffect)((function(){localStorage.setItem("contacts",JSON.parse(n))}),[n]);var b=i.toLowerCase(),d=n.filter((function(t){return t.name.toLowerCase().includes(b)}));return Object(m.jsxs)("div",{children:[Object(m.jsx)("h1",{className:C.a.title,children:"Phonebook"}),Object(m.jsx)(j,{addContact:function(t){void 0===n.find((function(e){return e.name===t.name}))?c((function(e){return[].concat(Object(s.a)(e),[t])})):alert("".concat(t.name," is already in contact"))}}),Object(m.jsx)("h2",{className:C.a.title,children:"Contacts"}),Object(m.jsx)(O,{value:i,onChange:function(t){l(t.currentTatget.value)}}),Object(m.jsx)(x,{removeContact:function(t){c(n.filter((function(e){return e.id!==t})))},contacts:d})]})}r.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(g,{})}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.8f355261.chunk.js.map