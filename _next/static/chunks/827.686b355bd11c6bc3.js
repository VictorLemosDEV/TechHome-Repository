"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[827],{5060:function(t,e,o){o.d(e,{x:function(){return s}});var r=o(5893),n=o(1571);o(7294);var a=o(4712);let s=t=>{let{...e}=t,{theme:o="system"}=(0,n.F)();return(0,r.jsx)(a.x7,{theme:o,className:"toaster group",toastOptions:{classNames:{toast:"group toast  group-[.toaster]:bg-accent group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",description:"group-[.toast]:text-muted-foreground",actionButton:"group-[.toast]:bg-primary group-[.toast]:bg-special group-[.toast]:text-primary-foreground",cancelButton:"group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"}},...e})}},6827:function(t,e,o){o.r(e),o.d(e,{default:function(){return c}});var r=o(5893);o(7294);var n=o(6454),a=o(5060);async function s(){navigator.bluetooth.requestDevice({acceptAllDevices:!0}).then(t=>t.gatt?.connect()).then(t=>t?.getPrimaryService("battery_service")).then(t=>t?.getCharacteristic("battery_level")).then(t=>t?.readValue()).then(t=>{console.log(`Battery percentage is ${t?.getUint8(0)}`)}).catch(t=>{console.error(t)})}function c(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.Z,{elementActive:"home"}),(0,r.jsx)(a.x,{expand:!0,toastOptions:{unstyled:!0,classNames:{toast:"toast bg-special-hover rounded-lg",description:"description",title:"title font-bold",icon:"icon",cancelButton:"cancel  hover:bg-primary/90 rounded-lg"},duration:5e3},visibleToasts:1}),(0,r.jsxs)("main",{children:[(0,r.jsx)("h1",{children:"Homepage"}),(0,r.jsx)("p",{className:"text-2xl font-bold underline",children:"Oi"}),(0,r.jsx)("button",{onClick:s,children:"Clicka aqui"})]})]})}}}]);