"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[928],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),i=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=i(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=i(n),m=r,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(g,l(l({ref:t},p),{},{components:n})):a.createElement(g,l({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:r,l[1]=c;for(var i=2;i<o;i++)l[i]=n[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1991:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>i});var a=n(7462),r=(n(7294),n(3905));const o={title:"Connect via MetaMask and WalletConnect",sidebar_position:4},l=void 0,c={unversionedId:"wallet/connect-via-metamask-walletconnect",id:"wallet/connect-via-metamask-walletconnect",title:"Connect via MetaMask and WalletConnect",description:"Currently, Buidler only supports connecting through MetaMask and WalletConnect on the browser. This feature enables you to conveniently access and manage your crypto assets within the Buidler platform.",source:"@site/docs/wallet/connect-via-metamask-walletconnect.mdx",sourceDirName:"wallet",slug:"/wallet/connect-via-metamask-walletconnect",permalink:"/docs/wallet/connect-via-metamask-walletconnect",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/wallet/connect-via-metamask-walletconnect.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Connect via MetaMask and WalletConnect",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Import a Wallet",permalink:"/docs/wallet/how-to-import-wallet"},next:{title:"Connect via Social Login",permalink:"/docs/wallet/connect-via-social"}},s={},i=[{value:"MetaMask",id:"metamask",level:3},{value:"WalletConnect",id:"walletconnect",level:3}],p={toc:i};function u(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Currently, Buidler only supports connecting through MetaMask and WalletConnect on the browser. This feature enables you to conveniently access and manage your crypto assets within the Buidler platform."),(0,r.kt)("p",null,"To connect your wallet on Buidler, you'll need to go to the Buidler website at ",(0,r.kt)("a",{parentName:"p",href:"https://community.buidler.app"},"https://community.buidler.app")),(0,r.kt)("h3",{id:"metamask"},"MetaMask"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},'1. On the Buidler site, click on the "MetaMask" button.')),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(9129).Z,width:"3216",height:"2090"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"2. Approve the signature request.")," Approve the signature request. MetaMask will open and ask you to sign a message; clicking ",(0,r.kt)("strong",{parentName:"p"},'"Sign"')," proves you own the wallet address without any gas fees or transactions."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(5633).Z,width:"2990",height:"1870"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"3. You are now connected to Buidler through MetaMask")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(7171).Z,width:"3216",height:"2090"})),(0,r.kt)("h3",{id:"walletconnect"},"WalletConnect"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},'1. On the Buidler site, click on the "WalletConnect" button.')),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(665).Z,width:"3216",height:"2090"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"2. A QR code will appear on the screen.")," Open your mobile wallet app (e.g. MetaMask, TrustWallet, Rainbow) and scan the QR code."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(5860).Z,width:"3216",height:"2090"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"3. Approve the connection request."),' Your mobile wallet app will display a connection request. Select "Connect" to proceed to the next step.'),(0,r.kt)("div",{class:"mobile-screenshot"},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(35).Z,width:"1170",height:"2532"}))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"4. Approve the signature request.")," Your mobile wallet app will display a signature request, similar to when you log in with MetaMask. clicking ",(0,r.kt)("strong",{parentName:"p"},'"Confirm"')," proves you own the wallet address without any gas fees or transactions."),(0,r.kt)("div",{class:"mobile-screenshot"},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(5457).Z,width:"1170",height:"2532"}))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"5. You are now connected to Buidler through WalletConnect.")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(7171).Z,width:"3216",height:"2090"})))}u.isMDXComponent=!0},5633:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/connect-metamask-sign-message-5008da42e2021247cc37476b1104912b.png"},7171:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/connect-metamask-success-e30b23dac3920f595443a6c0949a1384.png"},9129:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/connect-metamask-b186bd20b3ab74ef30e4e06c018d5d08.png"},5860:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/connect-wc-qr-code-eb9ef607dd6048d7e4f027f7bc1d1694.png"},35:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/connect-wc-request-connect-mobile-cb953c1abe109aa05fb573a487228d40.png"},5457:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/connect-wc-request-sign-message-mobile-eccd1da488876cbb0471ee227b219ce3.png"},665:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/connect-wc-c38b5940380bbd2ed1ccbb1b314d7807.png"}}]);