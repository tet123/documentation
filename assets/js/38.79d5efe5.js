(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{411:function(e,t,a){"use strict";a.r(t);var s=a(42),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"glossary"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#glossary"}},[e._v("#")]),e._v(" Glossary")]),e._v(" "),a("p",[e._v("This page lists words, expressions, or concepts used by the Agoric technology stack.")]),e._v(" "),a("h2",{attrs:{id:"allegedname"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#allegedname"}},[e._v("#")]),e._v(" AllegedName")]),e._v(" "),a("p",[e._v("Human-readable name of a kind of rights. The alleged name should\nnot be trusted as an accurate depiction, since it is provided by\nthe maker of the mint and could be deceptive, but is useful for debugging and double-checking.")]),e._v(" "),a("p",[e._v("The AllegedName must be a string.")]),e._v(" "),a("h2",{attrs:{id:"allocation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#allocation"}},[e._v("#")]),e._v(" Allocation")]),e._v(" "),a("p",[e._v("Allocations represent the amounts to be paid out to each "),a("a",{attrs:{href:"#seat"}},[e._v("seat")]),e._v(" on exit. Possible exits are exercising\nan exit condition, the contract's explicit choice, or a crash or freeze. There are several methods for finding\nout what amount a current allocation is.")]),e._v(" "),a("p",[e._v("In more detail, Zoe's guarantee is each seat will either get what it asked for in its offer, or the return of what was deposited.\nThe contract can reallocate fairly arbitrarily to achieve that. As contract code is visible to its clients, users can see\nwhat the contract intends to do.")]),e._v(" "),a("p",[e._v("Zoe enforces those terms by keeping track of a current allocation for each seat. The initial allocation is the deposit.\nThe contract can modify a seat's allocation as long as it never violates offer safety or rights conservation. i.e. it can't\nassign assets that weren't already in some allocation and it can't assign them to more than one seat. Also, goods can't\ndisappear from the total allocation.")]),e._v(" "),a("h2",{attrs:{id:"amountmath"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#amountmath"}},[e._v("#")]),e._v(" AmountMath")]),e._v(" "),a("p",[e._v("AmountMath executes the logic of how amounts are changed when digital assets are merged, separated,\nor otherwise manipulated. For example, a deposit of 2 bucks into a purse that already has 3 bucks\ngives a new balance of 5 bucks. An empty purse has 0 bucks. AmountMath has a single set of polymorphic\nmethods of three different kinds to deal with "),a("a",{attrs:{href:"#fungible"}},[e._v("fungible")]),e._v(" assets (values are natural numbers) and\n"),a("a",{attrs:{href:"#non-fungible"}},[e._v("non-fungible")]),e._v(" assets (values are an array or object). The three AmountMathKinds are")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("MathKind.NAT")]),e._v(": Used with fungible assets. "),a("code",[e._v("amount")]),e._v(" values are natural numbers (non-negative integers). Default value.")]),e._v(" "),a("li",[a("code",[e._v("MathKind.STRING_SET")]),e._v(": Used with non-fungible assets. "),a("code",[e._v("amount")]),e._v(" values are strings.")]),e._v(" "),a("li",[a("code",[e._v("MathKind.SET")]),e._v(": Used with non-fungible assets. "),a("code",[e._v("amount")]),e._v(" values are objects or records with multiple properties.")])]),e._v(" "),a("p",[e._v("See the "),a("RouterLink",{attrs:{to:"/ertp/guide/amount-math.html"}},[e._v("ERTP Guide's AmountMath section")]),e._v("\nand the "),a("RouterLink",{attrs:{to:"/ertp/api/amount-math.html"}},[e._v("ERTP API's AmountMath section")]),e._v(" for more information.")],1),e._v(" "),a("h2",{attrs:{id:"amounts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#amounts"}},[e._v("#")]),e._v(" Amounts")]),e._v(" "),a("p",[e._v("Amounts are the canonical description of tradable goods. They are manipulated\nby "),a("a",{attrs:{href:"#issuer"}},[e._v("issuers")]),e._v(" and "),a("a",{attrs:{href:"#mint"}},[e._v("mints")]),e._v(", and represent the goods and currency carried by\n"),a("a",{attrs:{href:"#purse"}},[e._v("purses")]),e._v(" and "),a("a",{attrs:{href:"#payment"}},[e._v("payments")]),e._v(". They represent things like currency, stock, and the\nabstract right to participate in a particular exchange.")]),e._v(" "),a("p",[e._v("An amount is comprised of a "),a("a",{attrs:{href:"#brand"}},[e._v("brand")]),e._v(" with an "),a("a",{attrs:{href:"#value"}},[e._v("value")]),e._v('. For example, "4 quatloos"\nis an amount with a value of "4" and a brand of the imaginary currency "quatloos".')]),e._v(" "),a("p",[e._v("See the "),a("RouterLink",{attrs:{to:"/ertp/guide/amounts.html"}},[e._v("ERTP Guide's Amounts section")]),e._v("\nand the "),a("RouterLink",{attrs:{to:"/ertp/api/amount-math.html"}},[e._v("ERTP API's AmountMath section")]),e._v("\nfor more information.")],1),e._v(" "),a("h2",{attrs:{id:"assetholder"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#assetholder"}},[e._v("#")]),e._v(" AssetHolder")]),e._v(" "),a("p",[a("a",{attrs:{href:"#purse"}},[e._v("Purses")]),e._v(" and "),a("a",{attrs:{href:"#payment"}},[e._v("payments")]),e._v(" are AssetHolders. These are objects that contain "),a("a",{attrs:{href:"#amounts"}},[e._v("amounts")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"brand"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#brand"}},[e._v("#")]),e._v(" Brand")]),e._v(" "),a("p",[e._v("Identifies the kind of "),a("a",{attrs:{href:"#issuer"}},[e._v("issuer")]),e._v(', such as "quatloos", "moola", etc. Brands are one of the two elements that\nmake up an '),a("a",{attrs:{href:"#amounts"}},[e._v("amount")]),e._v(".\nSee the "),a("RouterLink",{attrs:{to:"/ertp/guide/amounts.html#brands"}},[e._v("ERTP Guide's Brand section")]),e._v("\nand the "),a("RouterLink",{attrs:{to:"/ertp/api/brand.html"}},[e._v("ERTP API's Brand section")]),e._v(" for more information.")],1),e._v(" "),a("h2",{attrs:{id:"comparable"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#comparable"}},[e._v("#")]),e._v(" Comparable")]),e._v(" "),a("p",[e._v("A "),a("em",[e._v("passable")]),e._v(" is something that can be marshalled. A "),a("em",[e._v("comparable")]),e._v(" is a\npassable whose leaves contain no promises. Two comparables can be\nsynchronously compared for structural equivalence.")]),e._v(" "),a("p",[e._v("A comparable is a JavaScript object containing no promises, and can\nthus be locally compared for equality with another object. If either object\ncontains promises, equality is indeterminable. If both are fulfilled down\nto Presences and local state, then either they're the same all the way\ndown, or they represent different objects.")]),e._v(" "),a("h2",{attrs:{id:"contract-and-contract-instance"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#contract-and-contract-instance"}},[e._v("#")]),e._v(" Contract and Contract Instance")]),e._v(" "),a("p",[e._v("In Agoric documentation, "),a("em",[e._v("contract")]),e._v(" usually refers to a contract's source code that defines how the contract works, which is "),a("em",[e._v("installed")]),e._v(" on Zoe. A contract is "),a("em",[e._v("instantiated")]),e._v(" to create "),a("em",[e._v("contract instances")]),e._v(", which are run on Zoe and are the active execution of the contract code.")]),e._v(" "),a("p",[e._v("For example, a realtor has a standard house selling agreement. The contract is the code defining how that agreement works. When the realtor has a new house to sell, they instantiate a new instance of their standard contract for that specific property. If they have ten houses for sale, they have ten different contract instances.")]),e._v(" "),a("h2",{attrs:{id:"ertp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ertp"}},[e._v("#")]),e._v(" ERTP")]),e._v(" "),a("p",[a("em",[e._v("Electronic Rights Transfer Protocol")]),e._v(" is a uniform way of transferring tokens and other digital assets, both "),a("a",{attrs:{href:"#fungible"}},[e._v("fungible")]),e._v(" and "),a("a",{attrs:{href:"#non-fungible"}},[e._v("non-fungible")]),e._v(", in JavaScript. All kinds of digital assets can easily be created and they can be all be transferred in exactly the same ways, with exactly the same security properties.")]),e._v(" "),a("p",[e._v("It uses "),a("a",{attrs:{href:"#object-capabilities"}},[e._v("object capabilities")]),e._v(" to enforce access control. Instead of having\nto prove ownership of a corresponding private key, if your program has a\nreference to an object, it can call methods on that object. If it doesn't\nhave a reference, it can't. For more on object capabilities, see "),a("a",{attrs:{href:"http://habitatchronicles.com/2017/05/what-are-capabilities/",target:"_blank",rel:"noopener noreferrer"}},[e._v("this post"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("Key ERTP concepts include "),a("a",{attrs:{href:"#issuer"}},[e._v("Issuers")]),e._v(", "),a("a",{attrs:{href:"#mint"}},[e._v("mints")]),e._v(",\n"),a("a",{attrs:{href:"#purse"}},[e._v("Purses")]),e._v(", "),a("a",{attrs:{href:"#payment"}},[e._v("Payments")]),e._v(", "),a("a",{attrs:{href:"#brand"}},[e._v("Brands")]),e._v(", and "),a("a",{attrs:{href:"#amounts"}},[e._v("Amounts")]),e._v(". Also\nsee the "),a("RouterLink",{attrs:{to:"/getting-started/ertp-introduction.html"}},[e._v("ERTP Introduction")]),e._v(",\n"),a("RouterLink",{attrs:{to:"/ertp/guide/"}},[e._v("ERTP Guide")]),e._v(", and "),a("RouterLink",{attrs:{to:"/ertp/api/"}},[e._v("ERTP API")]),e._v(".")],1),e._v(" "),a("h2",{attrs:{id:"facet"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#facet"}},[e._v("#")]),e._v(" Facet")]),e._v(" "),a("p",[e._v("A particular view or API of an object. An object can have many facets.")]),e._v(" "),a("h2",{attrs:{id:"fungible"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fungible"}},[e._v("#")]),e._v(" Fungible")]),e._v(" "),a("p",[e._v("A fungible asset is one where all exemplars of the asset are interchangeable. For example, if you\nhave 100 one dollar bills and need to pay someone five dollars, it does not matter which\nfive one dollar bills you use. Also see "),a("a",{attrs:{href:"#non-fungible"}},[e._v("non-fungible")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"handle"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#handle"}},[e._v("#")]),e._v(" Handle")]),e._v(" "),a("p",[e._v("A handle is a unique identifier implemented as a JavaScript object. Only its identity is meaningful, so handles do not have properties. Unlike number or string identifiers, handles are unforgeable. This means the only way to know a handle identity is being given an object reference, and no identity can be guessed and no fake identity will succeed.")]),e._v(" "),a("p",[e._v("For example, Zoe often uses "),a("code",[e._v("offerHandle")]),e._v(" to refer to offers. Zoe contracts can use an offer's "),a("code",[e._v("offerHandle")]),e._v(" as the key for requesting the current allocation of an offer or reallocating the offer's assets.")]),e._v(" "),a("h2",{attrs:{id:"issuer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#issuer"}},[e._v("#")]),e._v(" Issuer")]),e._v(" "),a("p",[e._v("Issuers are linked to a single "),a("a",{attrs:{href:"#mint"}},[e._v("mint")]),e._v(" and vice versa, so each issuer works\nwith one and only one asset type, such as only working with quatloos or only working\nwith moola. They can create empty "),a("a",{attrs:{href:"#purse"}},[e._v("purses")]),e._v(" and "),a("a",{attrs:{href:"#payment"}},[e._v("payments")]),e._v(" for\ntheir asset type, but cannot mint new "),a("a",{attrs:{href:"#amounts"}},[e._v("amounts")]),e._v(".")]),e._v(" "),a("p",[e._v("Issuers can also transform\npayments of their asset type (splitting, combining, burning, and exclusively claiming\npayments). An issuer from a trusted source can determine if an untrusted payment of\nits asset type is valid.")]),e._v(" "),a("p",[e._v("See the "),a("RouterLink",{attrs:{to:"/ertp/guide/issuers-and-mints.html"}},[e._v("ERTP Guide's Issuer section")]),e._v("\nand the "),a("RouterLink",{attrs:{to:"/ertp/api/issuer.html"}},[e._v("ERTP API's Issuer section")]),e._v(" for more information.")],1),e._v(" "),a("h2",{attrs:{id:"mint"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mint"}},[e._v("#")]),e._v(" Mint")]),e._v(" "),a("p",[e._v("In ERTP, mints create digital assets and are the only objects with the authority to do so.\nAccess to a mint gives you the power to create more digital assets of its type at will. Mints\ncan only create one type of asset.")]),e._v(" "),a("p",[e._v("Mints are "),a("a",{attrs:{href:"#issuer"}},[e._v("issuer's")]),e._v(" admin facets, and there is a one-to-one relationship between an issuer and\nits mint.")]),e._v(" "),a("p",[e._v("See the "),a("RouterLink",{attrs:{to:"/ertp/guide/issuers-and-mints.html#mints"}},[e._v("ERTP Guide's Mint section")]),e._v("\nand the "),a("RouterLink",{attrs:{to:"/ertp/api/mint.html"}},[e._v("ERTP API's Mint section")]),e._v(" for more information.")],1),e._v(" "),a("h2",{attrs:{id:"non-fungible"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#non-fungible"}},[e._v("#")]),e._v(" Non-fungible")]),e._v(" "),a("p",[e._v("A non-fungible asset is one where each incidence of the asset has unique individual properties and\nis not interchangeable with another incidence. For example, if your asset is show tickets, it matters to the buyer\nwhat the date and time of the show is, which row the seat is in, and where in the row the\nseat is (and likely other factors as well). You can't just give them any ticket in your supply,\nas they are not interchangeable (and may even have different prices). See also "),a("a",{attrs:{href:"#fungible"}},[e._v("fungible")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"notifier"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#notifier"}},[e._v("#")]),e._v(" Notifier")]),e._v(" "),a("p",[e._v("You can track updates to contract state using a notifier. The notifier provides a\nstream of updates describing changes to the state of an offer.")]),e._v(" "),a("p",[e._v("See more: "),a("RouterLink",{attrs:{to:"/distributed-programming.html"}},[e._v("Notifier")])],1),e._v(" "),a("h2",{attrs:{id:"object-capabilities"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#object-capabilities"}},[e._v("#")]),e._v(" Object Capabilities")]),e._v(" "),a("p",[e._v("Objects have state, behavior, and references. Lets say Object A has references to Objects B and C, while B and C do not have references to each other. Thus, A can communicate with B and C, and B and C cannot communicate with each other.\nThere is an effective zero-cost firewall between B and C.")]),e._v(" "),a("p",[e._v("An "),a("em",[e._v("object capability system")]),e._v(" constrains how references are obtained. You can't get one just by knowing the name of a global variable or a public class. You can get a reference in only three ways.")]),e._v(" "),a("ul",[a("li",[e._v("Creation: Functions that create objects get a reference to them.")]),e._v(" "),a("li",[e._v("Construction: Constructors can endow their constructed objects with references, including inherited references.")]),e._v(" "),a("li",[e._v("Introduction:\n"),a("ul",[a("li",[e._v("A has references to B and C.")]),e._v(" "),a("li",[e._v("B and C  do "),a("em",[e._v("not")]),e._v(" have references to each other")]),e._v(" "),a("li",[e._v("A sends B a reference to C.\n"),a("ul",[a("li",[e._v("B now has a reference to C and can communicate with C.")])])])])])]),e._v(" "),a("p",[e._v("If references can only be obtained by creation, construction, or introduction, you may have a safe system. If they can be obtained in any other way, your system is unsafe.")]),e._v(" "),a("p",[e._v("For more information, see "),a("a",{attrs:{href:"https://frontendmasters.com/courses/good-parts-javascript-web/object-capabilities/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Douglas Crockford on Object Capabilities"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"payment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#payment"}},[e._v("#")]),e._v(" Payment")]),e._v(" "),a("p",[e._v("Payments hold "),a("a",{attrs:{href:"#amounts"}},[e._v("amounts")]),e._v(" of certain assets\nissued by "),a("a",{attrs:{href:"#mint"}},[e._v("Mints")]),e._v(". Specifically amounts that are "),a("em",[e._v("in transit")]),e._v(" from one party to another.\nAmounts from payments can be deposited in "),a("a",{attrs:{href:"#purse"}},[e._v("purses")]),e._v(", but otherwise, the entire amount is\navailable when the payment is transferred. Payments can be converted to "),a("a",{attrs:{href:"#purse"}},[e._v("Purses")]),e._v(". All contents\nof a purse must be of the same "),a("a",{attrs:{href:"#brand"}},[e._v("brand")]),e._v(".")]),e._v(" "),a("p",[e._v("See the "),a("RouterLink",{attrs:{to:"/ertp/guide/purses-and-payments.html#payments"}},[e._v("ERTP Guide's Payments section")]),e._v("\nand the "),a("RouterLink",{attrs:{to:"/ertp/api/payment.html#payment-getallegedbrand"}},[e._v("ERTP API's Payments section")]),e._v("\nfor more information.")],1),e._v(" "),a("h2",{attrs:{id:"presence"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#presence"}},[e._v("#")]),e._v(" Presence")]),e._v(" "),a("p",[e._v("A local version of a remote object that serves as a proxy for the remote object.\nIf "),a("code",[e._v("obj")]),e._v(" is a presence of a remote object, you can send messages to the remote object by using "),a("code",[e._v("E()")]),e._v(" on "),a("code",[e._v("obj")]),e._v(".\nSee the "),a("RouterLink",{attrs:{to:"/distributed-programming.html"}},[e._v("JavaScript Distributed Programming Guide")]),e._v(" for more information.")],1),e._v(" "),a("h2",{attrs:{id:"purse"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#purse"}},[e._v("#")]),e._v(" Purse")]),e._v(" "),a("p",[e._v("Purses hold "),a("a",{attrs:{href:"#amounts"}},[e._v("amounts")]),e._v(" of certain "),a("a",{attrs:{href:"#mint"}},[e._v("mint")]),e._v(" issued assets. Specifically amounts that are "),a("em",[e._v("stationary")]),e._v(". Purses can transfer part of their held balance to a "),a("a",{attrs:{href:"#payment"}},[e._v("payment")]),e._v(", which is usually used to transfer value. A purse's contents are all of the same "),a("a",{attrs:{href:"#brand"}},[e._v("brand")]),e._v(".")]),e._v(" "),a("p",[e._v("See the "),a("RouterLink",{attrs:{to:"/ertp/guide/purses-and-payments.html#purses"}},[e._v("ERTP Guide's Purses section")]),e._v(" and the\n"),a("RouterLink",{attrs:{to:"/ertp/api/purse.html"}},[e._v("ERTP API's Purses section")]),e._v("\nfor more information.")],1),e._v(" "),a("h2",{attrs:{id:"seat"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#seat"}},[e._v("#")]),e._v(" Seat")]),e._v(" "),a("p",[e._v("Zoe uses seats to represent offers, and has two seat "),a("a",{attrs:{href:"#facet"}},[e._v("facets")]),e._v("  a ZCFSeat and a UserSeat.")]),e._v(" "),a("p",[e._v("Seats represent active offers and let contracts and users interact with them. ZCFSeats are used\nwithin contracts and with "),a("code",[e._v("zcf.")]),e._v(" methods. User seats represent offers external to Zoe and the\ncontract. The party who exercises an invitation and sends the "),a("code",[e._v("offer()")]),e._v(" message to Zoe\ngets a UserSeat that can check payouts' status or retrieve their results.")]),e._v(" "),a("h2",{attrs:{id:"value"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#value"}},[e._v("#")]),e._v(" Value")]),e._v(" "),a("p",[e._v("Values are the part of an "),a("a",{attrs:{href:"#amounts"}},[e._v("amount")]),e._v(" that describe the value of something\nthat can be owned or shared: How much, how many, or a description of a unique asset, such as\nPixel(3,2), $3, or ‘Right to occupy on Tuesdays’. "),a("a",{attrs:{href:"#fungible"}},[e._v("Fungible")]),e._v(" values are usually\nrepresented by natural numbers. Other values may be represented as strings naming a particular\nright, or an arbitrary object representing the rights at issue. The latter two examples\nare usually "),a("a",{attrs:{href:"#non-fungible"}},[e._v("non-fungible")]),e._v(" assets. Values must be "),a("a",{attrs:{href:"#comparable"}},[e._v("Comparable")]),e._v(".")]),e._v(" "),a("p",[e._v("See the "),a("RouterLink",{attrs:{to:"/ertp/guide/amounts.html#values"}},[e._v("ERTP Guide's Value section")]),e._v(" for more information.")],1),e._v(" "),a("h2",{attrs:{id:"vat"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vat"}},[e._v("#")]),e._v(" Vat")]),e._v(" "),a("p",[e._v("A vat is a "),a("em",[e._v("unit of synchrony")]),e._v(". This means that within a JavaScript vat, objects and functions can communicate with one another synchronously.")]),e._v(" "),a("p",[e._v("A vat runs a single "),a("em",[e._v("event loop")]),e._v(".")]),e._v(" "),a("p",[e._v("A physical machine can run one or several vats. A blockchain can run one or several communicating vats.")]),e._v(" "),a("p",[e._v("Different vats can communicate by sending asynchronous messages to other vats.")]),e._v(" "),a("p",[e._v("A vat is the moral equivalent of a Unix Process.")])])}),[],!1,null,null,null);t.default=n.exports}}]);