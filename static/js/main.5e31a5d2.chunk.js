(this["webpackJsonppresale-frontend"]=this["webpackJsonppresale-frontend"]||[]).push([[0],{163:function(e,t){},181:function(e,t,n){},182:function(e,t,n){"use strict";n.r(t);var a,s=n(14),i=n(0),c=n.n(i),r=n(63),o=n.n(r),d=n(190),l=n(208),u=n(206),b=n.p+"static/media/logo.a0f98948.png",p=n(11),j=n(99),y=n(210),m=n(197),O=n(37),h=[{inputs:[],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{inputs:[],name:"_weth9",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"},{internalType:"address",name:"",type:"address"}],name:"amountLoanedForLoanedTokenForLender",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bool",name:"makeActive",type:"bool"}],name:"changeActive",outputs:[{internalType:"bool",name:"success",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newToken",type:"address"},{internalType:"bool",name:"isApproved",type:"bool"}],name:"changeTokenLendingApproval",outputs:[{internalType:"bool",name:"success",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"token",type:"address"}],name:"dispenseToFundManager",outputs:[{internalType:"bool",name:"success",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"dispenseToFundManager",outputs:[{internalType:"bool",name:"success",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"token",type:"address"}],name:"emergencyWithdraw",outputs:[{internalType:"bool",name:"success",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"emergencyWithdraw",outputs:[{internalType:"bool",name:"success",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"fundManager",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"lender",type:"address"}],name:"getAmountDueToLender",outputs:[{internalType:"uint256",name:"amountDue",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"lender",type:"address"},{internalType:"address",name:"lentToken",type:"address"}],name:"getAmountLoaned",outputs:[{internalType:"uint256",name:"amountLoaned",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"token",type:"address"}],name:"getTotalLoaned",outputs:[{internalType:"uint256",name:"totalLoaned",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"isActive",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"ownerQuery",type:"address"}],name:"isOwner",outputs:[{internalType:"bool",name:"isQueryOwner",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"isTokenApprovedForLending",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"launchTokenDueForHolder",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"lendETHLiquidity",outputs:[{internalType:"bool",name:"success",type:"bool"}],stateMutability:"payable",type:"function"},{inputs:[{internalType:"address",name:"loanedToken",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"lendLiquidity",outputs:[{internalType:"bool",name:"success",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"priceForLentToken",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"newFundManager",type:"address"}],name:"setFundManager",outputs:[{internalType:"bool",name:"success",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"},{internalType:"bool",name:"makeOOwner",type:"bool"}],name:"setOwnerShip",outputs:[{internalType:"bool",name:"success",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"lentToken",type:"address"},{internalType:"uint256",name:"price",type:"uint256"}],name:"setPrice",outputs:[{internalType:"bool",name:"success",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"weth9",type:"address"}],name:"setWETH9",outputs:[{internalType:"bool",name:"success",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"totalLoanedForToken",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{stateMutability:"payable",type:"receive"}],x={tokens_addresses:{ETH:"0x7f68cff269f57fa018027811089e2fba31f84a58",NFY:"0xed02b6915588108576d251b6627e396923282eb1",BPP:"0x52d904eff2605463c2f0b338d34abc9b7c3e3b08",DEFO:"0xe481f2311c774564d517d015e678c2736a25ddd3",USDT:"0xf6f86bc288b71113bb8918b1fe757327061f9824",DAI:"0x6b175474e89094c44da98b954eedeac495271d0f",USDC:"0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"},coinGeckoIds:{ETH:"ethereum",NFY:"non-fungible-yearn",BPP:"bitpower",DEFO:"defhold",USDT:"tether",DAI:"dai",USDC:"usd-coin"},TEKContractAddress:"0x36f0a5c1f6b51d50fb67526f3def4a3ee2670cd2",TEKAbi:"todo add ABI HERE",INFURAKEY:"0",ServiceContractAddress:"0x6e5724582a883b012b419f73ec07db27916f9651",ServiceAbi:h},f=n(68),v=n(191),g=n(2),A=function(e){return Object(g.jsx)(d.a,{className:"mt-3 m-auto",children:Object(g.jsx)(v.a,{variant:"danger",children:"Please switch to Ethereum mainnet."})})},T=n(203),D=n(41),E=new T.a.Interface(x.ServiceAbi),w=new D.a(x.ServiceContractAddress,E),S=c.a.createContext({activateBrowserWallet:function(){},account:null,deactivate:function(){},useTokenBalance:function(){},useEtherBalance:function(){},NFY:"0.00",ETH:"0.00",BPP:"0.00",DEFO:"0.00",DAI:"0.00",USDT:"0.00",USDC:"0.00",setDAI:function(){},setUSDT:function(){},setUSDC:function(){},setNFY:function(){},setETH:function(){},setBPP:function(){},setDEFO:function(){},ETHPrice:"0.00",setETHPrice:function(){},serviceContract:w,serviceInterface:E}),F=function(){return Object(i.useContext)(S)},B=[1,5],C=function(e){var t=Object(j.a)(),n=t.activateBrowserWallet,a=t.account,s=t.deactivate,r=t.chainId,o=c.a.useState(0),d=Object(p.a)(o,2),l=d[0],u=d[1],b=c.a.useState(0),h=Object(p.a)(b,2),v=h[0],T=h[1],D=c.a.useState(0),F=Object(p.a)(D,2),C=F[0],k=F[1],U=c.a.useState(0),L=Object(p.a)(U,2),N=L[0],M=L[1],I=c.a.useState(0),G=Object(p.a)(I,2),P=G[0],R=G[1],H=c.a.useState(0),K=Object(p.a)(H,2),Y=K[0],z=K[1],Q=c.a.useState(0),V=Object(p.a)(Q,2),W=V[0],q=V[1],Z=c.a.useState(0),J=Object(p.a)(Z,2),X=J[0],_=J[1],$=Object(y.a)(a),ee=Object(m.a)(x.tokens_addresses.NFY,a),te=Object(m.a)(x.tokens_addresses.DEFO,a),ne=Object(m.a)(x.tokens_addresses.BPP,a),ae=Object(m.a)(x.tokens_addresses.USDT,a),se=Object(m.a)(x.tokens_addresses.USDC,a),ie=Object(m.a)(x.tokens_addresses.DAI,a),ce=Object(f.a)("ethereum","usd");return Object(i.useEffect)((function(){_(ce)}),[ce]),Object(i.useEffect)((function(){$&&T(Object(O.b)($)),a&&(u(Object(O.c)(null!==ee&&void 0!==ee?ee:0)),k(Object(O.c)(null!==ne&&void 0!==ne?ne:0)),M(Object(O.c)(null!==ne&&void 0!==ne?ne:0)),z(Object(O.c)(null!==se&&void 0!==se?se:0)),R(Object(O.c)(null!==ae&&void 0!==ae?ae:0)),q(Object(O.c)(null!==ie&&void 0!==ie?ie:0)))}),[$,T,u,k,M,a,ee,te,ne,se,ae,ie]),Object(g.jsxs)(S.Provider,{value:{activateBrowserWallet:n,account:a,deactivate:s,useTokenBalance:m.a,useEtherBalance:y.a,NFY:l,setNFY:u,ETH:v,setETH:T,BPP:C,setBPP:k,DEFO:N,setDEFO:M,DAI:W,setDAI:q,USDC:Y,setUSDC:z,USDT:P,setUSDT:R,ETHPrice:X,setETHPrice:_,serviceContract:w,serviceInterface:E},children:[!B.includes(r)&&Object(g.jsx)(A,{}),e.children]})},k="data:image/png;base64,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",U="data:image/png;base64,UklGRoYEAABXRUJQVlA4THoEAAAvMcAKEBUHQbZN5+/9K0TEBECoJuWXU9u2azf8qegtZQlIlvi8e25CsAkoh05djgSyOGio1PidMERjcOUPwAmCKzPwOE4I3GcjYNtIkqIk76bWe71FcZHFEappI8nhD/B1vlB9mzDAoW3btDO+Edu2bds2eht1Utm2bdu2bdt2zgTIkbbt/Kv9L8W2bVuVbRs/THZhdFanN94Dv2gJ/y6TKqVTZQup2GkBqjJp/csbn191un+bmfewdiMBAIH0Sdu2bZujXVtbfaA2a7Jt485hG0mK9PknuMx0zDiz/9//CZAJAnAAUPj4RskQAv+lln4mATMsePHbjyngBr/luq8SmkoaGPUKL4AmDpzgs4bXl1FABh0eJKDpAZl7efzdZgyYwkugCRhdBybPA9P3g+nrQcYW/2xvSFfE8/99RFOJh2oPqgGppdwW3L+lgE+lFjx/VmoPPD4HeAs04L6Wq3mDJBpyvRb/QKBDIAsX9az/CdATAfFumYlMSv/JXELGEmRZzlhA5hqLf39O8f+ftYZRWZblzAWkDF9zqWUCDvF9FqIFQscWasKZPlUZ0BTXgCLNxSZrg5zsHVpI7cI1d+E/Ch9/aUGoxxIv6BHFEmdXnyKBeFEshEkCDliLQlQHEWIM9AgiY4k8+mQJjFE1iv8EnBL4LUVUM9RCMj2iMGYrc5Gx1nhbvXfx5Zxj5eSeqmuw2BqCtdbPG7O1tI2sWsQS+Ks3wQJTblZjS62TK407OaKdKQybia0xV3dmbZHz00rlTDj6j7Xa2ZtDjYs/O7nTeQtWG/4XWF7Al9Grixfe0dY33dtovQFVaiGYOoSqgShjIDVwdluAMVrdPrLReb9UNza9bXROYNZN8sv06dPXkC5VwEQNRHoREav1SSJzBTwLhIjY+960pzz+a/gOeMOlZW+JysjK5mBP/zRhjAAAdPEioXPlHqtCoUjsXRIAAC3+O3tIn4G9NVpwBb60QILz9xCiCU/vxFSP+NYZUd6DC6NnqHV0xOHm72EbfVix1YeViW8zoVl2tMfnzdr49hVbPfzzgwnfoPkSXHstpBqNADs4NYi00dyUb5yc8Ta8ONfG1o64xhnfudKmrzJt8lYp0ydvQvu8ia2fkeUtvDT7pfsaU4HpIRKAM3Do7YWQRDYCLOEohNhLAKgJoz2SudRmbevV1dVVzg4t5U7SxvAxBKBeFIQTsOqpQigIxrBvhHuZlLFETtYGF1gvxh+/lw36sBOH6iCiR5INPNeE4mEXDBQLWrBRA2yCtuJBFVbLwRqoKRUUYKEULIKS0kEGZsrsgKxyggRMlIBJkFRepAgM57sAUeW+gb5cMPBF+YEHukLD00ACdAOvSh5AS4uAgaFgbDsw+3+4v78Y3w8MjgXbLWgDLpUFNqhfcnf/G3R3X4JGCrtKAzNULXn0EtQAi8oDA5TAX8w1lAGjagRayIdfqwuFQKc6kdSQCT+hLmQDtWoFSkiB79YGpAGV6gVyiOu4dyD+h2puqkggHD7gEyKBVHXfQQIk9gpS5QY=",L="data:image/png;base64,UklGRqwDAABXRUJQVlA4TJ8DAAAvMUAMEBVJzvZPkZR0NgvcCnd36d8fd3dnff8/HELgRohTMztVpz3+w5hzhcDNJYE+YUey+GNBEAU3Tg4BbCKEwQVi2zaCpP4L/huFvntAjCQ5bpvP48UcH8wCB5Ul0bZt2tF4jG3btu303LKd9Gzbttu2bZdt2649ATYCeaZbY58pk93t98d34a6xHWblnN+HzO1yhHdXv7aaL6vFNjOGEuOi+y5sIcAxkC8rVhSjioHuK3TAn5DwrBgOGq818LADAryQUykjBj/fmCwNDlbJTSofRpTGrxj4GuKQDR8qGldKzMFJTP5M9Irmo7Y0A3+BUZnolbPG2xYcvCpUyUKVAGOmtOJYarFF5cCI0/jdGvhG6JwBQ02r6yXaUyHmkBk5BZNd/vzRfDSW6JsLd0GIGPgbEpeM4abxLtJb4cTd2EwssLBiCxuJBgevY1FPxBBizJfCBoYqdFc4cg+234SvE8xYI6wxZxvLtrCBcHeHNELoNIwkjT/3hwK/D96DrSbcfd2Cv3Vdz9rGEgsv3MF3croluRyajJsDVzh7F/bdi3+VwJvV9cxtLNzGmgUVIZzfTKEEPV1sT1fH6S7sNvG1IjzapK5nbGP+NlZt/Vm/pCY4do/gLnNQ+OOtN22hrqevP85b56+90O2z9cIDCQZPwH/DC+tfYWch7LhPchhr/9AVyyvxO38/BCgDKQSfDSOs/4f19fA9cdN2BHaZtFC8+oVs39BBMYIYiVc+Q2j8/z8BMYWMgF9bCevXYacmrFVMKC/MEtPVEjLEf/KxyvC6/QazfuEU+kF2wL+xsP4RdsbDjt2YfagtwitnKORc2ComZwrTK0uNxxqftepi6Fg1xcF08IH//xvW/8L6LKxDpn4Pz56blNAenBgF9z9bWr2K1/hZNO4z0q68IWagrrB7nXyauf08rIvCWtaeg/XgGwdfCd0sMSsexmApGn+12mb4Xm9wbhJ2jeUye23WtX9iMwWFCffA/w7++SQkUxlDTeO8lKLxVa9GGCZ3+yK2CCP0ABdH3R0cFwpZeoaPxodSSuHjaV9Vvpmd4Ad3d/AOFiPLkK9ovSrX+F9KKd13/e+4u4Pf5Ay3LBkSfCw3dF8hAnaAnHkYw0bjSTPwAIui5cpI/R77BvG2bPWKl43RyDNIvlzIfIyh9aUBnJZTxHJmBDI+PdxCgPeFppY1g2HUdt+FLfwORlvm10Lq4l0b283+9Reu3Oxsl96+exVsBBIA",N="data:image/png;base64,UklGRp4DAABXRUJQVlA4TJIDAAAvMUAKEBrJtW27bdN/DW4gZ+O/ey9VnYEFfnw18J3fxOE65xzmWJwBA8iRJEmK9FcP9pCBG7ozI2p4OWgbSZLDZPbfvbuOF8DBlWzbtFXXeO9d+wseM5uhbdu2bduObFuRbdv2OXczchtJUbx0YnxDH3HF0RjXuKHdHENdaxzrsHL4GqIqA/6QxpA4tx5QvZZ2PGqVBNBABRBYqR/qBpin0tDUSyLVRltBA5FApVylB41uDWNs5GYlCKRtOznepFY2xZuXG1VZAkeRIqP5z4kWBIqh8nRoAS1QtyQ4Jwu0U8C/9BWqa9WYGVaUPu/m/Yu++xlC7DgkBbQgaph6WW2b+tShKIxdl8bssIbaKwxB09DR6CJ9pm3qT6OKwa6tCoJGuUp7aZv2r1Fa9o/Urn7x/49gKUgzq23SNy30kB+mrlp0xDQmx0XpitJsWadJSutpJ9U7BK1lHWROPdv+SFjNpo1FLY8ruvuOtKCyBkcrBcF2SgOxhjwpksUowhN0Eg0YDVC7kVwiLL7W+hPJDC0D9GUb9BItOsL869cIy4AcGjQRiW87Gn9bAu3/l22jwdu2ARBHjZuLBqC68ygnbNu5zGbbWyYAMOqjJY1Q+Wi3doLOo2VHJUVLWiBaMmkubRA/MBIt8SkqGTCarPwsL4e2nF7flR2lL0KLSJuCqbDjd86ySvJNmwbYEtoWyXcMLX6ms4U1udfuvoe0LFJo2howETJGOd1DORKBoLPNSdsn+bxbguRE9aVNgojmf+8kJx1UNH4n0Pi2Pz5bBgTZNvH/7Nmzw1eV2/t8znfntmT3tpk1JVRfUswoUgba9eYETktLOdUrKRqtCfRrG+05Wv7j06m02DDdK9kQ+35lb4iujft2vA+GFa3vtfqQwVP5f+2k2kuQ+r7fcEG0unNo2tRdJGBTrySDlu8XNAlqAQ3YSWopO1LDCGFpeLVT4wRNvrcLJC2Nr7b/kzzx+KCaFUXhsKe20zb1S2WWnUBvVElUmZZGK/WetqkfjbIh0eu+QndX1PkunELcvP/Qw+tHKIkDyUf5U4PU82obDdDepPSyMeq+dKCToISg8KCIOWhxVIFGG2iRuiVBadsgoHFAuSKITb6mW67pyRLHi9RMkr5zu5Ftv9jS3RNJLz4j1Gtwxav8K0jat+yaNCMlR1MtSbDyUuMVR2NM41p2dYzskjrSYelwGEArQ/MmqcYn9s33F9mP6w==",M="data:image/png;base64,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",I=function(e){return parseFloat(e).toFixed(2)},G=function(e){var t=e.tokenKey,n=F(),a=n.NFY,s=n.BPP,i=n.DEFO,c=n.DAI,r=n.USDT,o=n.USDC;return Object(g.jsxs)(g.Fragment,{children:["NFY"===t&&I(a),"BPP"===t&&I(s),"DEFO"===t&&I(i),"DAI"===t&&I(c),"USDT"===t&&I(r),"USDC"===t&&I(o)]})},P=n(211),R=function(e){var t,n=F(),a=n.deactivate,s=n.ETH,i=n.account;return i?Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)(u.a.Link,{children:[Object(g.jsx)("img",{src:L,width:"25",height:"25",className:"d-inline-block align-top",alt:"*"}),"$ETH ",null===(t=parseFloat(s))||void 0===t?void 0:t.toFixed(4)]}),Object(g.jsxs)(u.a.Link,{children:[Object(g.jsx)("img",{src:M,width:"25",height:"25",className:"d-inline-block align-top",alt:"*"})," ",Object(g.jsx)(G,{tokenKey:"NFY"})]}),Object(g.jsxs)(u.a.Link,{children:[Object(g.jsx)("img",{src:k,width:"25",height:"25",className:"d-inline-block align-top",alt:"*"})," ",Object(g.jsx)(G,{tokenKey:"USDC"})]}),Object(g.jsxs)(u.a.Link,{children:[Object(g.jsx)("img",{src:U,width:"25",height:"25",className:"d-inline-block align-top",alt:"*"})," ",Object(g.jsx)(G,{tokenKey:"USDT"})]}),Object(g.jsxs)(u.a.Link,{children:[Object(g.jsx)("img",{src:N,width:"25",height:"25",className:"d-inline-block align-top",alt:"*"})," ",Object(g.jsx)(G,{tokenKey:"DAI"})]}),Object(g.jsx)(u.a.Link,{href:"#",style:{border:"1px solid",borderColor:"#6f42c1",borderRadius:"10px"},children:Object(P.a)(i)}),Object(g.jsx)(u.a.Link,{onClick:function(){return a()},children:"Disconnect"})]}):Object(g.jsx)(g.Fragment,{})},H=n(212),K=n(207),Y=function(e){var t=e.title,n=(e.transaction,e.date,c.a.useState(!0)),a=Object(p.a)(n,2),s=a[0],i=a[1];return Object(g.jsx)(K.a,{style:{zIndex:10500},onClose:function(){return i(!1)},show:s,delay:3500,autohide:!0,children:Object(g.jsx)(K.a.Header,{children:Object(g.jsx)("strong",{className:"me-auto",children:t})})})},z=n(198),Q={walletConnected:{title:"Wallet connected."},transactionStarted:{title:"Transaction sent."},transactionSucceed:{title:"Trasnaction done."},transactionFailed:{title:"Transaction failed."}},V=function(e){var t=Object(H.a)().notifications;return Object(g.jsx)(g.Fragment,{children:Object(g.jsx)(z.a,{className:"p-3",position:"bottom-end",children:t.map((function(e){return"transaction"in e?Object(g.jsx)(Y,{title:Q[e.type].title,transaction:e.transaction,date:Date.now()},e.id):Object(g.jsx)(Y,{title:Q[e.type].title,date:Date.now()},e.id)}))})})},W=function(e){var t=F(),n=t.activateBrowserWallet,a=t.account,s=t.ETHPrice;return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(l.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",sticky:"top",children:Object(g.jsxs)(d.a,{children:[Object(g.jsxs)(l.a.Brand,{href:"#home",children:[Object(g.jsx)("img",{src:b,width:"40",height:"30",className:"d-inline-block align-top",alt:"$TEK"}),"GET $TEK"]}),Object(g.jsx)(l.a.Toggle,{"aria-controls":"navbarScroll"}),Object(g.jsx)(l.a.Collapse,{className:"justify-content-end",id:"navbarScroll",children:Object(g.jsxs)(u.a,{className:"mr-auto",navbarScroll:!0,children:[Object(g.jsxs)(u.a.Link,{children:["1 ETH = $",s]}),!a&&Object(g.jsx)(u.a.Link,{href:"#",className:"tek-border tek-border-header",onClick:function(){n()},children:"Connect wallet"}),a&&Object(g.jsx)(R,{})]})})]})}),Object(g.jsx)(V,{})]})},q=n(199),Z=n(142),J=n(200),X=n(90),_=n(56),$=n(57),ee=function(e){return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("hr",{}),Object(g.jsxs)(q.a,{className:"mt-3",children:[Object(g.jsxs)(Z.a,{md:4,children:[Object(g.jsx)(X.SocialIcon,{bgColor:"#0d6efd",url:"https://telegram.me/MimirSolutions",className:"mr-3"}),Object(g.jsx)(X.SocialIcon,{bgColor:"#0d6efd",url:"https://twitter.com/MimirSolutions"}),Object(g.jsx)(X.SocialIcon,{bgColor:"#0d6efd",url:"https://discord.gg/JYBjEe3uXx"}),Object(g.jsx)(X.SocialIcon,{bgColor:"#0d6efd",url:"https://github.com/Mimir-Solutions"})]}),Object(g.jsx)(Z.a,{md:2,children:Object(g.jsxs)("b",{className:"text-primary",children:["\xa9 Mimir Solutions 2021",Object(g.jsx)("br",{}),Object(g.jsx)("span",{className:"text-muted",children:"v0.1"})]})}),Object(g.jsx)(Z.a,{md:3,children:Object(g.jsx)("div",{className:"d-grid gap-2",children:Object(g.jsxs)(J.a,{variant:"outline-primary",href:"https://tek.finance/The_TEK_Protocol_Whitepaper.pdf",target:"_blank",children:[Object(g.jsx)(_.a,{icon:$.d})," Whitepaper"]})})}),Object(g.jsx)(Z.a,{md:3,children:Object(g.jsx)("div",{className:"d-grid gap-2",children:Object(g.jsxs)(J.a,{variant:"outline-info",href:" https://mimirsolutions.gitbook.io/tek/",target:"_blank",children:[Object(g.jsx)(_.a,{icon:$.a})," Gitbook"]})})})]})]})},te=function(e){e.title;var t=e.children;return Object(g.jsxs)(d.a,{className:"mt-3 m-auto",children:[Object(g.jsx)(W,{}),t,Object(g.jsx)(ee,{})]})},ne=n(145),ae=n(27),se=n(209),ie=n(201),ce=n(80),re=function(e){var t,n,a,s,r,o=c.a.useState(0),d=Object(p.a)(o,2),l=d[0],u=d[1],b=c.a.useState(0),j=Object(p.a)(b,2),y=j[0],m=j[1],O=c.a.useState(0),h=Object(p.a)(O,2),v=h[0],A=h[1],D=c.a.useState(0),E=Object(p.a)(D,2),w=E[0],S=E[1],B=c.a.useState(0),C=Object(p.a)(B,2),k=C[0],U=C[1],L=c.a.useState(0),N=Object(p.a)(L,2),M=N[0],I=N[1],G=Object(f.a)(x.coinGeckoIds.NFY,"usd"),P=Object(f.a)(x.coinGeckoIds.USDT,"usd"),R=Object(f.a)(x.coinGeckoIds.USDC,"usd"),H=Object(f.a)(x.coinGeckoIds.DAI,"usd"),K=F(),Y=K.ETHPrice,z=K.serviceInterface,Q=null!==(t=Object(ce.a)({abi:z,address:x.ServiceContractAddress,method:"getTotalLoaned",args:[x.tokens_addresses.ETH]}))&&void 0!==t?t:[],V=Object(p.a)(Q,1)[0],W=null!==(n=Object(ce.a)({abi:z,address:x.ServiceContractAddress,method:"getTotalLoaned",args:[x.tokens_addresses.NFY]}))&&void 0!==n?n:[],q=Object(p.a)(W,1)[0],Z=null!==(a=Object(ce.a)({abi:z,address:x.ServiceContractAddress,method:"getTotalLoaned",args:[x.tokens_addresses.USDT]}))&&void 0!==a?a:[],J=Object(p.a)(Z,1)[0],X=null!==(s=Object(ce.a)({abi:z,address:x.ServiceContractAddress,method:"getTotalLoaned",args:[x.tokens_addresses.USDC]}))&&void 0!==s?s:[],ee=Object(p.a)(X,1)[0],te=null!==(r=Object(ce.a)({abi:z,address:x.ServiceContractAddress,method:"getTotalLoaned",args:[x.tokens_addresses.DAI]}))&&void 0!==r?r:[],ne=Object(p.a)(te,1)[0];return Object(i.useEffect)((function(){V&&u(parseFloat(T.a.formatEther(V)))}),[V]),Object(i.useEffect)((function(){q&&m(parseFloat(T.a.formatEther(q)))}),[q]),Object(i.useEffect)((function(){J&&A(parseFloat(T.a.formatEther(J)))}),[J]),Object(i.useEffect)((function(){ee&&S(parseFloat(T.a.formatEther(ee)))}),[ee]),Object(i.useEffect)((function(){ne&&U(parseFloat(T.a.formatEther(ne)))}),[ne]),Object(i.useEffect)((function(){var e=0;e+=parseFloat(Y)*l,e+=parseFloat(G)*y,e+=parseFloat(P)*v,e+=parseFloat(R)*w,e+=parseFloat(H)*k,I(e)}),[Y,G,l,y,P,v,R,w,H,k]),Object(g.jsx)(g.Fragment,{children:Object(g.jsx)(se.a,{children:Object(g.jsx)(se.a.Body,{children:Object(g.jsx)(ie.a,{striped:!0,bordered:!0,hover:!0,variant:"dark",children:Object(g.jsxs)("tbody",{children:[Object(g.jsxs)("tr",{children:[Object(g.jsxs)("td",{children:[Object(g.jsx)(_.a,{icon:$.b})," Total ETH raised"]}),Object(g.jsx)("td",{children:l.toFixed(4)})]}),Object(g.jsxs)("tr",{children:[Object(g.jsxs)("td",{children:[Object(g.jsx)(_.a,{icon:$.b})," Total NFY raised"]}),Object(g.jsx)("td",{children:y.toFixed(4)})]}),Object(g.jsxs)("tr",{children:[Object(g.jsxs)("td",{children:[Object(g.jsx)(_.a,{icon:$.b})," Total USDT raised"]}),Object(g.jsx)("td",{children:v.toFixed(4)})]}),Object(g.jsxs)("tr",{children:[Object(g.jsxs)("td",{children:[Object(g.jsx)(_.a,{icon:$.b})," Total USDC raised"]}),Object(g.jsx)("td",{children:w.toFixed(4)})]}),Object(g.jsxs)("tr",{children:[Object(g.jsxs)("td",{children:[Object(g.jsx)(_.a,{icon:$.b})," Total DAI raised"]}),Object(g.jsx)("td",{children:k.toFixed(4)})]}),Object(g.jsxs)("tr",{children:[Object(g.jsxs)("td",{children:[Object(g.jsx)(_.a,{icon:$.c})," TVL~ $"]}),Object(g.jsxs)("td",{children:[M.toLocaleString()," $"]})]})]})})})})})},oe=function(e){var t,n=e.assetName,a=e.assetLogo,s=new T.a.Interface(h),r=F().account,o=c.a.useState(0),d=Object(p.a)(o,2),l=d[0],u=d[1],b=null!==(t=Object(ce.a)({abi:s,address:x.ServiceContractAddress,method:"getAmountLoaned",args:[r,x.tokens_addresses[n.replace("$","")]]}))&&void 0!==t?t:[],j=Object(p.a)(b,1)[0];return Object(i.useEffect)((function(){j&&(console.log(j),u(parseFloat(T.a.formatEther(j))))}),[j]),Object(g.jsx)(se.a,{className:"tek-border mb-3 mt-1",children:Object(g.jsx)(se.a.Header,{children:Object(g.jsxs)(q.a,{children:[Object(g.jsx)(Z.a,{md:2,children:Object(g.jsx)("img",{src:a,alt:n,className:"img-responsive",style:{width:"40px",height:"40px"}})}),Object(g.jsx)(Z.a,{md:4,children:Object(g.jsx)("h4",{className:"text-center",children:n})}),Object(g.jsx)(Z.a,{md:6,children:Object(g.jsx)("h4",{className:"text-end",children:null===l||void 0===l?void 0:l.toFixed(3)})})]})})})},de=function(e){return Object(g.jsx)(q.a,{className:"mt-4",children:Object(g.jsx)(Z.a,{md:12,children:Object(g.jsx)(v.a,{variant:"warning",children:Object(g.jsx)("h5",{children:"Loan repayment will be available after Sept 28 11:59 UTC"})})})})},le=function(e){return F().account?Object(g.jsx)(se.a,{children:Object(g.jsxs)(se.a.Body,{children:[Object(g.jsx)(q.a,{children:Object(g.jsx)(Z.a,{md:12,children:Object(g.jsx)(se.a,{className:"tek-border-light mb-3",children:Object(g.jsx)(se.a.Footer,{children:Object(g.jsx)("h2",{className:"text-secondary text-center",children:"Assets in loan"})})})})}),Object(g.jsx)(oe,{assetLogo:L,assetName:"$ETH"}),Object(g.jsx)(oe,{assetLogo:M,assetName:"$NFY"}),Object(g.jsx)(oe,{assetLogo:U,assetName:"$USDT"}),Object(g.jsx)(oe,{assetLogo:k,assetName:"$USDC"}),Object(g.jsx)(oe,{assetLogo:N,assetName:"$DAI"}),Object(g.jsx)("hr",{}),Object(g.jsx)(de,{})]})}):Object(g.jsx)(se.a,{children:Object(g.jsx)(se.a.Header,{children:Object(g.jsx)("h3",{className:"text-warning",children:"Please connect your wallet first."})})})},ue=n(144),be=n(205),pe=n(213),je=function(e){var t=e.amount,n=x.ServiceContractAddress,a=new T.a.Interface(h),s=new D.a(n,a),r=c.a.useState(!1),o=Object(p.a)(r,2),d=o[0],l=o[1],u=Object(j.a)().library,b=Object(pe.a)(s,"lendETHLiquidity",{transactionName:"Lend Ether liquidity",signer:null===u||void 0===u?void 0:u.getSigner()}),y=b.state,m=b.send;Object(i.useEffect)((function(){"Success"===y.status||"Exception"===y.status||"None"===y.status?l(!1):"Mining"===y.status&&l(!0),console.log("Lending result"),console.log(y)}),[y]);return Object(g.jsx)(g.Fragment,{children:Object(g.jsx)("div",{className:"d-grid gap-2",children:Object(g.jsxs)(J.a,{size:"lg",variant:"primary",disabled:d,onClick:function(){return l(!0),void m({value:T.a.parseUnits(t,18)})},children:[d&&"Processing...",!d&&"Lend ETH"]})})})},ye=n(202),me=[{inputs:[],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"spender",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"spender",type:"address"}],name:"allowance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"approve",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_burner",type:"address"},{internalType:"uint256",name:"_amount",type:"uint256"}],name:"burn",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"decimals",outputs:[{internalType:"uint8",name:"",type:"uint8"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"subtractedValue",type:"uint256"}],name:"decreaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"addedValue",type:"uint256"}],name:"increaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_minter",type:"address"},{internalType:"uint256",name:"_amount",type:"uint256"}],name:"mint",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transfer",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"sender",type:"address"},{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transferFrom",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"}],Oe=function(e){var t=e.amount,n=e.tokenName,a=x.tokens_addresses[n],s=x.ServiceContractAddress,r=F().account,o=Object(ye.a)(a,r,s),d=new T.a.Interface(me),l=new D.a(a,d),u=new T.a.Interface(h),b=new D.a(s,u),y=c.a.useState(!1),m=Object(p.a)(y,2),O=m[0],f=m[1],v=c.a.useState(!1),A=Object(p.a)(v,2),E=A[0],w=A[1],S=Object(j.a)().library,B=Object(pe.a)(l,"approve",{transactionName:"Approve"}),C=B.state,k=B.send,U=Object(pe.a)(b,"lendLiquidity",{transactionName:"Lend liquidity",signer:null===S||void 0===S?void 0:S.getSigner()}),L=U.state,N=U.send;console.log(o?T.a.formatEther(o):null),Object(i.useEffect)((function(){"Success"===L.status||"Exception"===L.status||"None"===L.status?w(!1):"Mining"===L.status&&w(!0),console.log("Lending result"),console.log(L)}),[L]),Object(i.useEffect)((function(){"Success"===C.status||"Exception"===C.status||"None"===C.status?f(!1):"Mining"===C.status&&f(!0),console.log("Approval result"),console.log(C)}),[C]);return null===a?Object(g.jsx)(g.Fragment,{children:Object(g.jsx)("div",{className:"d-grid gap-2",children:Object(g.jsx)("b",{children:"Invalid token"})})}):o&&t&&T.a.formatEther(o)<t?Object(g.jsx)(g.Fragment,{children:Object(g.jsx)("div",{className:"d-grid gap-2",children:Object(g.jsxs)(J.a,{size:"lg",variant:"primary",onClick:function(){return f(!1),void k(s,T.a.parseUnits(t,18))},disabled:O,children:[t&&T.a.formatEther(o)<t&&O&&Object(g.jsxs)(g.Fragment,{children:["Approving ",n]}),t&&T.a.formatEther(o)<t&&!O&&Object(g.jsxs)(g.Fragment,{children:["Approve ",n]})]})})}):Object(g.jsx)("div",{className:"d-grid gap-2",children:Object(g.jsxs)(J.a,{size:"lg",variant:"primary",disabled:E,onClick:function(){return w(!0),void N(a,T.a.parseUnits(t,18))},children:[E&&"Processing...",!E&&"Lend liqiudity"]})})},he=function(e){var t=F(),n=t.ETH,a=t.USDT,s=t.USDC,r=t.DAI,o=t.NFY,d=t.account,l=t.activateBrowserWallet,u=c.a.useState("ETH"),b=Object(p.a)(u,2),j=b[0],y=b[1],m=c.a.useState(n),O=Object(p.a)(m,2),h=O[0],x=O[1],f=c.a.useState("0"),v=Object(p.a)(f,2),A=v[0],T=v[1];Object(i.useEffect)((function(){"ETH"===j&&x(n)}),[n,j]);var D=function(e){y(e),x(function(e){return"ETH"===e?n:"NFY"===e?o:"USDT"===e?a:"USDC"===e?s:"DAI"===e?r:n}(e))};return Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)(q.a,{children:[Object(g.jsx)(Z.a,{md:3,children:Object(g.jsx)(ue.a,{controlId:"floatingSelect",label:"Input currency",children:Object(g.jsxs)(be.a.Select,{value:j,"aria-label":"Please select input currency",onChange:function(e){var t=e.target;D(t.value)},children:[Object(g.jsx)("option",{value:"ETH",children:"ETH"}),Object(g.jsx)("option",{value:"NFY",children:"NFY"}),Object(g.jsx)("option",{value:"USDT",children:"USDT"}),Object(g.jsx)("option",{value:"USDC",children:"USDC"}),Object(g.jsx)("option",{value:"DAI",children:"DAI"})]})})}),Object(g.jsx)(Z.a,{md:6,children:Object(g.jsx)(ue.a,{controlId:"floatingInputGrid",label:"Amount of ".concat(j," max ").concat(h),children:Object(g.jsx)(be.a.Control,{type:"text",placeholder:"Amount",value:A,onChange:function(e){var t,n=e.target;t=n.value,parseFloat(h)<parseFloat(t)?T(h):T(t.replace(/[^0-9.]/g,"").replace(".","x").replace(/\./g,"").replace("x","."))}})})}),Object(g.jsxs)(Z.a,{md:3,children:[!d&&Object(g.jsx)("div",{className:"d-grid gap-2",children:Object(g.jsx)(J.a,{size:"lg",variant:"success",onClick:function(){return l()},children:"Connect wallet"})}),d&&"ETH"!==j&&Object(g.jsx)(Oe,{amount:A,tokenName:j}),d&&"ETH"===j&&Object(g.jsx)(je,{amount:A})]})]})})},xe=[{path:"/",exact:!0,component:function(e){return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)(q.a,{className:"mt-3 mb-3 disabled",children:[Object(g.jsx)(Z.a,{md:6,children:Object(g.jsx)(re,{})}),Object(g.jsx)(Z.a,{md:6,children:Object(g.jsx)(le,{})})]}),Object(g.jsx)(q.a,{children:Object(g.jsx)(Z.a,{md:12,children:Object(g.jsx)(he,{})})})]})}}],fe=function(e){return Object(g.jsx)(te,{title:"$TEK token presale portal",children:Object(g.jsx)(ne.a,{children:Object(g.jsx)(ae.c,{children:xe.map((function(e,t){return Object(g.jsx)(ae.a,{path:e.path,exact:e.exact,children:Object(g.jsx)(e.component,{})},t)}))})})})},ve=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,215)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),a(e),s(e),i(e),c(e)}))},ge=(n(181),n(43)),Ae=n(204),Te={readOnlyChainId:ge.b.Goerli,readOnlyUrls:(a={},Object(s.a)(a,ge.b.Mainnet,"https://mainnet.infura.io/v3/60159d12d2154d9392e078fb59a18658"),Object(s.a)(a,ge.b.Goerli,"https://goerli.infura.io/v3/60159d12d2154d9392e078fb59a18658"),a)};o.a.render(Object(g.jsx)(c.a.StrictMode,{children:Object(g.jsx)(Ae.a,{config:Te,children:Object(g.jsx)(C,{children:Object(g.jsx)(fe,{})})})}),document.getElementById("root")),ve()}},[[182,1,2]]]);
//# sourceMappingURL=main.5e31a5d2.chunk.js.map