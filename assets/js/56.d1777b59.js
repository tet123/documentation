(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{428:function(t,e,a){"use strict";a.r(e);var n=a(42),o=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"price-authority"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#price-authority"}},[t._v("#")]),t._v(" Price Authority")]),t._v(" "),a("p",[t._v("A "),a("code",[t._v("priceAuthority")]),t._v(" can be used in contracts (usually specified in the\nterms of a contract) to provide a price feed, on-demand quotes, and wakeups for\nvarious time and price conditions.")]),t._v(" "),a("h2",{attrs:{id:"examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),a("p",[t._v("To see a "),a("code",[t._v("priceAuthority")]),t._v(" in use, see the "),a("a",{attrs:{href:"https://github.com/Agoric/agoric-sdk/tree/master/packages/zoe/src/contracts/loan",target:"_blank",rel:"noopener noreferrer"}},[t._v("Loan\ncontract"),a("OutboundLink")],1),t._v("\nand the "),a("a",{attrs:{href:"https://github.com/Agoric/agoric-sdk/blob/master/packages/zoe/src/contracts/callSpread.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("Call Spread\ncontract"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"receiving-a-quote"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#receiving-a-quote"}},[t._v("#")]),t._v(" Receiving a quote")]),t._v(" "),a("p",[t._v("A "),a("code",[t._v("priceAuthority")]),t._v(" has a number of different methods that will return\nofficial "),a("code",[t._v("priceQuotes")]),t._v(". A "),a("code",[t._v("priceQuote")]),t._v(" is an amount, payment pair,\nwhere the amount is also the current balance of the payment:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" quoteAmount"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" quotePayment "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" priceQuote"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("Because these are ERTP amounts and payments, they have issuers. And\nthe payments are minted by an ERTP mint. A quote issuer and mint may\nbe shared by several "),a("code",[t._v("priceAuthorities")]),t._v(", and a "),a("code",[t._v("priceAuthority")]),t._v(" may\nuse several quoteIssuers. Importantly, you can confirm the brand of a\nquote and that it was minted by the mint associated with the\nquoteIssuer by claiming the quotePayment:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" verifiedQuote "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("E")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("quoteIssuer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("claim")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("quotePayment"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"priceauthority-methods"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#priceauthority-methods"}},[t._v("#")]),t._v(" PriceAuthority Methods")]),t._v(" "),a("h3",{attrs:{id:"getquoteissuer-brandin-brandout"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getquoteissuer-brandin-brandout"}},[t._v("#")]),t._v(" getQuoteIssuer(brandIn, brandOut)")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("brandIn")]),t._v(": "),a("code",[t._v("{ Brand }")])]),t._v(" "),a("li",[a("code",[t._v("brandOut")]),t._v(": "),a("code",[t._v("{ Brand }")])]),t._v(" "),a("li",[t._v("Returns: "),a("code",[t._v("{ Issuer | Promise<Issuer> }")])]),t._v(" "),a("li",[t._v("Gets the ERTP Issuer of PriceQuotes for a given brandIn/brandOut\npair.")])]),t._v(" "),a("h3",{attrs:{id:"gettimerservice-brandin-brandout"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gettimerservice-brandin-brandout"}},[t._v("#")]),t._v(" getTimerService(brandIn, brandOut)")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("brandIn")]),t._v(": "),a("code",[t._v("{ Brand }")])]),t._v(" "),a("li",[a("code",[t._v("brandOut")]),t._v(": "),a("code",[t._v("{ Brand }")])]),t._v(" "),a("li",[t._v("Returns: "),a("code",[t._v("{ TimerService | Promise<TimerService> }")])]),t._v(" "),a("li",[t._v("Gets the timer used in PriceQuotes for a given brandIn/brandOut pair.")])]),t._v(" "),a("h3",{attrs:{id:"getpricenotifier-brandin-brandout"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getpricenotifier-brandin-brandout"}},[t._v("#")]),t._v(" getPriceNotifier(brandIn, brandOut)")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("brandIn")]),t._v(": "),a("code",[t._v("{ Brand }")])]),t._v(" "),a("li",[a("code",[t._v("brandOut")]),t._v(": "),a("code",[t._v("{ Brand }")])]),t._v(" "),a("li",[t._v("Returns: "),a("code",[t._v("{ ERef<Notifier<PriceQuote>> }")])]),t._v(" "),a("li",[t._v("Be notified of the latest PriceQuotes for a given brandIn/brandOut\npair.  Note that these are not necessarily all for a constant\namountIn (or amountOut), though some authorities may do that.  The\nfact that they are raw quotes means that a PriceAuthority can\nimplement quotes for both fungible and non-fungible brands.")])]),t._v(" "),a("h3",{attrs:{id:"quoteattime-deadline-amountin-brandout"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#quoteattime-deadline-amountin-brandout"}},[t._v("#")]),t._v(" quoteAtTime(deadline, amountIn, brandOut)")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("deadline")]),t._v(": "),a("code",[t._v("{ Timestamp }")])]),t._v(" "),a("li",[a("code",[t._v("amountIn")]),t._v(": "),a("code",[t._v("{ Amount }")])]),t._v(" "),a("li",[a("code",[t._v("brandOut")]),t._v(": "),a("code",[t._v("{ Brand }")])]),t._v(" "),a("li",[t._v("Returns: "),a("code",[t._v("{ Promise<PriceQuote> }")])]),t._v(" "),a("li",[t._v("Resolves after "),a("code",[t._v("deadline")]),t._v(" passes on the "),a("code",[t._v("priceAuthority")]),t._v("’s "),a("code",[t._v("timerService")]),t._v(" with the price quote of "),a("code",[t._v("amountIn")]),t._v(" at that time.")])]),t._v(" "),a("h3",{attrs:{id:"quotegiven-amountin-brandout"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#quotegiven-amountin-brandout"}},[t._v("#")]),t._v(" quoteGiven(amountIn, brandOut)")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("amountIn:")]),t._v("{ Amount }`")]),t._v(" "),a("li",[a("code",[t._v("brandOut:")]),t._v("{ Brand }`")]),t._v(" "),a("li",[t._v("Returns: "),a("code",[t._v("{ Promise<PriceQuote> }")])]),t._v(" "),a("li",[t._v("Get a quote on demand corresponding to "),a("code",[t._v("amountIn")]),t._v(".")])]),t._v(" "),a("h3",{attrs:{id:"quotewanted-brandin-amountout"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#quotewanted-brandin-amountout"}},[t._v("#")]),t._v(" quoteWanted(brandIn, amountOut)")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("brandIn")]),t._v(": "),a("code",[t._v("{ Brand }")])]),t._v(" "),a("li",[a("code",[t._v("amountOut")]),t._v(": "),a("code",[t._v("{ Amount }")])]),t._v(" "),a("li",[t._v("Returns: "),a("code",[t._v("{ Promise<PriceQuote> }")])]),t._v(" "),a("li",[t._v("Get a quote on demand corresponding to "),a("code",[t._v("amountOut")]),t._v(".")])]),t._v(" "),a("h3",{attrs:{id:"quotewhengt-amountin-amountoutlimit"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#quotewhengt-amountin-amountoutlimit"}},[t._v("#")]),t._v(" quoteWhenGT(amountIn, amountOutLimit)")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("amountIn")]),t._v(": "),a("code",[t._v("{ Amount }")])]),t._v(" "),a("li",[a("code",[t._v("amountOutLimit")]),t._v(": "),a("code",[t._v("{ Amount }")])]),t._v(" "),a("li",[t._v("Returns: "),a("code",[t._v("{ Promise<PriceQuote> }")])]),t._v(" "),a("li",[t._v("Resolves when a price quote of "),a("code",[t._v("amountIn")]),t._v(" exceeds "),a("code",[t._v("amountOutLimit")]),t._v(".")])]),t._v(" "),a("h3",{attrs:{id:"quotewhengte-amountin-amountoutlimit"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#quotewhengte-amountin-amountoutlimit"}},[t._v("#")]),t._v(" quoteWhenGTE(amountIn, amountOutLimit)")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("amountIn")]),t._v(": "),a("code",[t._v("{ Amount }")])]),t._v(" "),a("li",[a("code",[t._v("amountOutLimit")]),t._v(": "),a("code",[t._v("{ Amount }")])]),t._v(" "),a("li",[t._v("Returns: "),a("code",[t._v("{ Promise<PriceQuote> }")])]),t._v(" "),a("li",[t._v("Resolves when a price quote of "),a("code",[t._v("amountIn")]),t._v(" reaches or exceeds "),a("code",[t._v("amountOutLimit")]),t._v(".")])]),t._v(" "),a("h3",{attrs:{id:"quotewhenlt-amountin-amountoutlimit"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#quotewhenlt-amountin-amountoutlimit"}},[t._v("#")]),t._v(" quoteWhenLT(amountIn, amountOutLimit)")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("amountIn")]),t._v(": "),a("code",[t._v("{ Amount }")])]),t._v(" "),a("li",[a("code",[t._v("amountOutLimit")]),t._v(": "),a("code",[t._v("{ Amount }")])]),t._v(" "),a("li",[t._v("Returns: "),a("code",[t._v("{ Promise<PriceQuote> }")])]),t._v(" "),a("li",[t._v("Resolves when a price quote of "),a("code",[t._v("amountIn")]),t._v(" drops below "),a("code",[t._v("amountOutLimit")]),t._v(".")])]),t._v(" "),a("h3",{attrs:{id:"quotewhenlte-amountin-amountoutlimit"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#quotewhenlte-amountin-amountoutlimit"}},[t._v("#")]),t._v(" quoteWhenLTE(amountIn, amountOutLimit)")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("amountIn")]),t._v(": "),a("code",[t._v("{ Amount }")])]),t._v(" "),a("li",[a("code",[t._v("amountOutLimit")]),t._v(": "),a("code",[t._v("{ Amount }")])]),t._v(" "),a("li",[t._v("Returns: "),a("code",[t._v("{ Promise<PriceQuote> }")])]),t._v(" "),a("li",[t._v("Resolves when a price quote of "),a("code",[t._v("amountIn")]),t._v(" reaches or drops below "),a("code",[t._v("amountOutLimit")]),t._v(".")])])])}),[],!1,null,null,null);e.default=o.exports}}]);