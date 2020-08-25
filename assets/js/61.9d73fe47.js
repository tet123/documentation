(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{416:function(e,t,a){"use strict";a.r(t);var r=a(42),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"offer-safety"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#offer-safety"}},[e._v("#")]),e._v(" Offer Safety")]),e._v(" "),a("Zoe-Version"),e._v(" "),a("p",[e._v("Definition: "),a("em",[e._v("Offer safety")]),e._v(" means that the user is guaranteed to either\nget back what they wanted or get back a full refund.")]),e._v(" "),a("p",[e._v("In order for Zoe to be able to enforce offer safety, the user must\nprovide Zoe a description of what they want and a description of what\nthey are offering. This is called a "),a("code",[e._v("proposal")]),e._v(". A proposal also\ncontains the conditions under which a user can exit a contract (this is used by Zoe to enforce payout liveness).")]),e._v(" "),a("p",[e._v("For example, if I want to buy an event ticket for $100, I am offering\n$100, and I want one event ticket. My "),a("code",[e._v("proposal")]),e._v("\nmight look like:")]),e._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  give"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" Price"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" dollars100 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  want"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" Asset"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" ticket1 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),a("p",[e._v("Asset and Price are examples of the "),a("code",[e._v("keywords")]),e._v(" of a contract. Each\ncontract uses keywords to allow the users to easily refer to parts of\na proposal, payments escrowed with Zoe, and payouts received from Zoe.")]),e._v(" "),a("p",[e._v("For example, when the user escrows with Zoe, the user must also submit payments using keywords.\nZoe expects to be able to escrow these payments immediately. In this\nparticular example, I would have to include a payment of $100 for Zoe\nto escrow my offer.")]),e._v(" "),a("p",[e._v("After the user escrows, the user gets a promise for a payout from Zoe.\nIt is this payout that offer safety is enforced over. Importantly, the\npayout either has to be what the user wanted, or it has to be a full\nrefund.")]),e._v(" "),a("p",[e._v("We are able to enforce offer safety because the payout is under the\ncontrol of Zoe. In the above example, if I am trying to buy my event\nticket using a smart contract on Zoe, that smart contract can tell Zoe\nto update its bookkeeping to say that I've successfully bought a\nticket. But, Zoe will only actually update its records and give me a\npayout of an event ticket if the update is offer-safe and conserves\ntotal supply.")]),e._v(" "),a("p",[e._v("The code for enforcing offer safety can be found in\n"),a("a",{attrs:{href:"https://github.com/Agoric/agoric-sdk/blob/master/packages/zoe/src/offerSafety.js",target:"_blank",rel:"noopener noreferrer"}},[e._v("offerSafety.js"),a("OutboundLink")],1),e._v(", and tests, including\nedge cases, can be found in "),a("a",{attrs:{href:"https://github.com/Agoric/agoric-sdk/blob/master/packages/zoe/test/unitTests/test-offerSafety.js",target:"_blank",rel:"noopener noreferrer"}},[e._v("test-offerSafety.js"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"offer-safety-gotchas"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#offer-safety-gotchas"}},[e._v("#")]),e._v(" Offer Safety Gotchas")]),e._v(" "),a("h3",{attrs:{id:"can-i-get-a-full-refund-and-what-i-wanted-under-offer-safety"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#can-i-get-a-full-refund-and-what-i-wanted-under-offer-safety"}},[e._v("#")]),e._v(" Can I get a full refund "),a("em",[e._v("and")]),e._v(" what I wanted under offer safety?")]),e._v(" "),a("p",[e._v("Yes, under offer safety you can get a full refund "),a("em",[e._v("and")]),e._v(" get what you\nwanted. Offer safety guarantees that at least one of these is true.\nBoth could be true.")]),e._v(" "),a("h3",{attrs:{id:"what-if-there-are-no-rules-under-give"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-if-there-are-no-rules-under-give"}},[e._v("#")]),e._v(" What if there are no rules under "),a("code",[e._v("give")]),e._v("?")]),e._v(" "),a("p",[e._v("If there are no rules under "),a("code",[e._v("give")]),e._v(" or "),a("code",[e._v("give")]),e._v(" is omitted, then\ntrivially, whatever you get will fulfill offer-safety, because you are\nalways getting a full refund of what you put in, which was nothing.")]),e._v(" "),a("h3",{attrs:{id:"what-if-there-are-no-rules-under-want"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-if-there-are-no-rules-under-want"}},[e._v("#")]),e._v(" What if there are no rules under "),a("code",[e._v("want")])]),e._v(" "),a("p",[e._v("If there are no rules under "),a("code",[e._v("want")]),e._v(" or "),a("code",[e._v("want")]),e._v(" is omitted, then\ntrivially, whatever you get will fulfill offer-safety, because you\nspecified nothing about what you want, and so anything fulfills that.")])],1)}),[],!1,null,null,null);t.default=s.exports}}]);