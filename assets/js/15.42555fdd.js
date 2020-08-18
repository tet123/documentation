(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{219:function(t,a,e){"use strict";e.r(a);var s=e(0),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"the-dapp-developer-s-guide-to-changes-in-the-alpha-release-candidate"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#the-dapp-developer-s-guide-to-changes-in-the-alpha-release-candidate"}},[t._v("#")]),t._v(" The Dapp developer's guide to changes in the Alpha Release Candidate")]),t._v(" "),e("h2",{attrs:{id:"zoe-changes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#zoe-changes"}},[t._v("#")]),t._v(" Zoe Changes")]),t._v(" "),e("h3",{attrs:{id:"types-are-available"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#types-are-available"}},[t._v("#")]),t._v(" Types Are Available")]),t._v(" "),e("p",[t._v("We now have types for Zoe that can imported for use in your contract.\nImport like so before using any of the Zoe types:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@agoric/zoe/exported'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h3",{attrs:{id:"synchronous-minting-and-escrowing"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#synchronous-minting-and-escrowing"}},[t._v("#")]),t._v(" Synchronous Minting and Escrowing")]),t._v(" "),e("p",[t._v("If you were previously creating a token within your contract, you will\nwant to switch to using our synchronous Zoe mints rather than\nimporting and using ERTP. This allows you to mint digital assets and\nreallocate them synchronously. To do so, do:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" mySynchronousMint "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" zcf"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("makeZCFMint")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'MySyncMint'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'set'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" amountMath"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" brand"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" issuer "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" mySynchronousMint"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getIssuerRecord")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nmySynchronousMint"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("mintGains")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" MyKeyword"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" amount "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" seat"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("For more information on how to use these specialized mints, please see\nthe type definitions\n"),e("a",{attrs:{href:"https://github.com/Agoric/agoric-sdk/blob/7058a852c46625e28aa9a290b2c99f2a39d0cba5/packages/zoe/src/types.js#L221",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),e("OutboundLink")],1),t._v("\nand example\n"),e("a",{attrs:{href:"https://github.com/Agoric/agoric-sdk/blob/ee8f782578ff4f2ea9e0ec557e14d1f52c795ca9/packages/zoe/src/contracts/mintPayments.js#L34",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),e("OutboundLink")],1),t._v(".\nThe issuers associated with the synchronous mints are already saved in\nZoe, so there is no need to "),e("code",[t._v("addNewIssuer")]),t._v(" (renamed to "),e("code",[t._v("saveIssuer")]),t._v(" in\nthis version) for synchronous mints. Note that the first call to "),e("em",[t._v("make")]),t._v("\nthe ZCFMint is asynchronous, but the following calls are synchronous.")]),t._v(" "),e("h3",{attrs:{id:"zoehelpers"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#zoehelpers"}},[t._v("#")]),t._v(" ZoeHelpers")]),t._v(" "),e("p",[t._v("There is no longer any "),e("code",[t._v("makeZoeHelpers")]),t._v(" call. Instead, any helpers can\nbe imported directly from "),e("code",[t._v("@agoric/zoe/src/contractSupport/")]),t._v(". Note\nthat some require "),e("code",[t._v("zcf")]),t._v(" to be passed as the first argument.")]),t._v(" "),e("h3",{attrs:{id:"contract-structure"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#contract-structure"}},[t._v("#")]),t._v(" Contract Structure")]),t._v(" "),e("p",[t._v("Please add the following type right before the start of your contract\ncode to enforce the correct return values for your contract:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * @type {ContractStartFn}\n */")]),t._v("\n")])])]),e("p",[t._v("Contract code must export a function "),e("code",[t._v("start")]),t._v(" as a non-default export,\nlike so:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("start")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("zcf")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// your code here")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("harden")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" creatorFacet"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" creatorInvitation"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" publicFacet "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("harden")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("start"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" start "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[e("code",[t._v("zcf")]),t._v(" is the Zoe Contract Facet and is the only argument provided to\nthe contract.")]),t._v(" "),e("p",[t._v("The contract must return a record with any of the following:")]),t._v(" "),e("ol",[e("li",[e("code",[t._v("creatorFacet")]),t._v(" - an object usually with admin authority only given to the\nentity which calls "),e("code",[t._v("E(zoe).startInstance(...)")]),t._v(". The creatorFacet\ncan be used to create invitations for other parties, and take actions\nthat are unrelated to making offers.")]),t._v(" "),e("li",[e("code",[t._v("creatorInvitation")]),t._v(" - a Zoe invitation that is only given to the entity\nwith calls "),e("code",[t._v("E(zoe).startInstance(...)")]),t._v(". This invitation is usually\nused for cases in which a party has to make an offer first, such as\nescrowing the underlying good for sale in an auction or covered\ncall.")]),t._v(" "),e("li",[e("code",[t._v("publicFacet")]),t._v(" - an object that will be available through Zoe to anyone who knows\nthe contract instance. The publicFacet is good for general queries,\nsuch as getting the current price.")])]),t._v(" "),e("h3",{attrs:{id:"access-contract-terms"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#access-contract-terms"}},[t._v("#")]),t._v(" Access contract terms")]),t._v(" "),e("p",[t._v("To get information such as the issuers, brands, or custom terms that\na contract was instantiated with, do:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" brands"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" issuers"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" terms "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" zcf"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getTerms")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("Note that "),e("code",[t._v("brands")]),t._v(" and "),e("code",[t._v("issuers")]),t._v(" are records with keyword keys,\nformerly called "),e("code",[t._v("brandKeywordRecord")]),t._v(" and "),e("code",[t._v("issuerKeywordRecord")]),t._v(",\nrespectively.")]),t._v(" "),e("h3",{attrs:{id:"seats-no-more-offerhandles"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#seats-no-more-offerhandles"}},[t._v("#")]),t._v(" Seats (no more offerHandles!)")]),t._v(" "),e("p",[t._v("There are no more offerHandles! Instead, we took a more object-oriented\napproach and created a new "),e("code",[t._v("seat")]),t._v(" per "),e("code",[t._v("E(zoe).offer(...)")]),t._v(" call. These seats\nhave methods such as "),e("code",[t._v("getProposal()")]),t._v(", "),e("code",[t._v("getCurrentAllocation()")]),t._v(", and "),e("code",[t._v("exit()")]),t._v('. There\nare two important "facets" for seats (a facet is a particular view or API of\nan object; there may be multiple such APIs per object): the ZCFSeat\nand the UserSeat.')]),t._v(" "),e("h3",{attrs:{id:"zcfseat-facet"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#zcfseat-facet"}},[t._v("#")]),t._v(" ZCFSeat Facet")]),t._v(" "),e("p",[t._v("The ZCFSeat is what is passed to the\n"),e("code",[t._v("offerHandlers")]),t._v(", like this one:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("mintPayment")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("seat")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" amount "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" amountMath"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Synchronously mint and allocate amount to seat.")]),t._v("\n  zcfMint"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("mintGains")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Token"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" amount "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" seat"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Exit the seat so that the user gets a payout.")]),t._v("\n  seat"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("exit")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Since the user is getting the payout through Zoe, we can")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// return anything here. Let's return some helpful instructions.")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Offer completed. You should receive a payment from Zoe'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("To learn more about the API of the ZCFSeat, see the type definitions\n"),e("a",{attrs:{href:"https://github.com/Agoric/agoric-sdk/blob/7058a852c46625e28aa9a290b2c99f2a39d0cba5/packages/zoe/src/types.js#L377",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),e("OutboundLink")],1)]),t._v(" "),e("h3",{attrs:{id:"userseat-facet"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#userseat-facet"}},[t._v("#")]),t._v(" UserSeat Facet")]),t._v(" "),e("p",[t._v("The UserSeat is what is returned to the caller of\n"),e("code",[t._v("E(zoe).offer(invitation, proposal, payments)")]),t._v(". The UserSeat has\nmethods such as "),e("code",[t._v("getPayout")]),t._v(" and "),e("code",[t._v("exit")]),t._v(". See the type definitions\n"),e("a",{attrs:{href:"https://github.com/Agoric/agoric-sdk/blob/7058a852c46625e28aa9a290b2c99f2a39d0cba5/packages/zoe/src/types.js#L88",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),e("OutboundLink")],1)]),t._v(" "),e("h3",{attrs:{id:"reallocating"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#reallocating"}},[t._v("#")]),t._v(" Reallocating")]),t._v(" "),e("p",[t._v("To reallocate, first stage an allocation on a seat:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" creatorStage "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" creatorSeat"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("stage")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    Tip"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" tipAmountMath"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("creatorTips"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" tipAmount"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    Assurance"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" assuranceMath"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getEmpty")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("Once you have a few seatStagings to reallocate over, you can call\nreallocate like so, with any number of stagings passed in as separate arguments:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("zcf"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("reallocate")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("creatorStage"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" userStage"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h2",{attrs:{id:"wallet-changes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#wallet-changes"}},[t._v("#")]),t._v(" Wallet Changes")]),t._v(" "),e("p",[t._v("The wallet now prompts the user to accept the Dapp after your Dapp sends the first message over the wallet bridge, postponing your Dapp's wallet interactions until the user approves the connection.  If you aren't receiving responses from the wallet bridge, it is probably because your Dapp has not yet been approved.")]),t._v(" "),e("p",[t._v('There is a migration in progress for the wallet bridge protocol.  Anything that used to be a "petname" is now either still a "petname" (a plain string), or a "path" (an array of strings whose first element is a "petname").  You will have to adapt your Dapp to be able to use arrays-of-strings wherever you initially had just plain string petnames.')]),t._v(" "),e("p",[t._v("A simple way to do this is to "),e("code",[t._v("JSON.stringify(petnameOrPath)")]),t._v(" before using them in a programmatic string-only context (such as a key in a Map or Set, or an attribute value of an HTML element, such as an ID).  If you display paths to users, you should join their elements with "),e("code",[t._v("'.'")]),t._v(", ideally coloring the first element differently than the dots and other elements.  This is because the first element is a trusted, user-assigned petname for the Dapp, and the other elements are automatically generated by the Dapp or wallet, and have no special relationship to the user.")]),t._v(" "),e("p",[t._v("Your Dapp should suggest names for any Installations, Instances, or Issuers that the wallet user will interact with.  Once accepted, these will be returned to your Dapp as paths (arrays of strings, above) beginning with the user's petname for the Dapp.  For  example, see "),e("a",{attrs:{href:"https://github.com/Agoric/dapp-encouragement/blob/7f41c1bc09fc5f22707f6bdc2fb656fcb2cddbfa/ui/public/src/main.js#L97",target:"_blank",rel:"noopener noreferrer"}},[t._v("the messages that the Encouragement Dapp sends"),e("OutboundLink")],1),t._v(" over the wallet bridge.")])])}),[],!1,null,null,null);a.default=n.exports}}]);