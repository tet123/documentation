(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{366:function(t,e,a){"use strict";a.r(e);var n=a(42),s=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"agoric-javascript-programming-extensions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#agoric-javascript-programming-extensions"}},[t._v("#")]),t._v(" Agoric JavaScript Programming Extensions")]),t._v(" "),a("p",[t._v("Agoric's platform lets you write secure smart contracts in JavaScript. The platform itself is mainly written in JavaScript. However, we've made several Agoric-specific additions to general JavaScript programming that you should know about and understand before programming on the platform. Some are "),a("em",[t._v("concepts")]),t._v(", others are "),a("em",[t._v("Agoric library additions")]),t._v(", and some are at the "),a("em",[t._v("syntax level")]),t._v(". All changes at the language level are in process to become official standards.")]),t._v(" "),a("p",[t._v("Extensions covered in this document are:")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[a("a",{attrs:{href:"#vats"}},[t._v("Vats")])]),t._v(": Objects and functions in the same JavaScript vat can\ncommunicate synchronously. Communication with objects outside the\nvat can only be done asynchronously.")])]),t._v(" "),a("li",[a("p",[a("strong",[a("a",{attrs:{href:"#secure-ecmascript-ses"}},[t._v("Secure EcmaScript (SES)")])]),t._v(": SES provides a secure platform for\nexecuting programs. With SES, you can run code you don't completely trust,\nwithout being vulnerable to bugs or bad intentions. It's a\nstandards-track extension to the JavaScript standard.")])]),t._v(" "),a("li",[a("p",[a("strong",[a("a",{attrs:{href:"#compartments-and-realms"}},[t._v("Realms and compartments")])]),t._v(": JavaScript code runs in the context of\na "),a("em",[t._v("realm")]),t._v(", made up of the set of primordials (the standard\nlibrary's objects and functions) and a global object. In a web\nbrowser, an iframe is a realm. In Node.js, a Node process is a\nrealm. A "),a("em",[t._v("compartment")]),t._v(" is a separate execution environment within a realm.")])]),t._v(" "),a("li",[a("p",[a("strong",[a("a",{attrs:{href:"#harden"}},[a("code",[t._v("harden()")])])]),t._v(": A hardened object’s properties cannot be changed, so the only way to interact\nwith a hardened object is through its methods. "),a("code",[t._v("harden()")]),t._v("is similar to "),a("code",[t._v("Object.freeze()")]),t._v(" but\nmore powerful.")])]),t._v(" "),a("li",[a("p",[a("strong",[a("a",{attrs:{href:"#communicating-with-remote-objects-using-e"}},[t._v("Remote object communication using "),a("code",[t._v("E")])])]),t._v(": "),a("code",[t._v("E")]),t._v(' is a local "bridge" function that lets\nyou invoke methods on remote objects, whether in another vat, machine, or blockchain (for example).\nIt takes a local representative (a '),a("em",[t._v("proxy")]),t._v(") for a remote object as an argument and sends messages\nto it using normal message-sending syntax. The local proxy forwards all messages to the remote\nobject to deal with. Sending a message to the remote object must be done by\nusing "),a("code",[t._v("E")]),t._v(" ("),a("code",[t._v("E(remoteObj).myMethod()")]),t._v('), or the "tildot" operator `remoteObj~.myMethod()``')])]),t._v(" "),a("li",[a("p",[a("strong",[a("a",{attrs:{href:"#notifiers"}},[t._v("Notifiers")]),t._v(":")]),t._v(" Our Promise-based Notifier notifies Dapps and other tools\nabout changes to their subscribed-to contracts or offers' state.")])])]),t._v(" "),a("h2",{attrs:{id:"vats"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vats"}},[t._v("#")]),t._v(" Vats")]),t._v(" "),a("p",[t._v("A vat is a "),a("em",[t._v("unit of isolation")]),t._v(". To paraphrase the Las Vegas advertising slogan, what happens in the vat stays in the vat. Objects and functions in a JavaScript vat can communicate synchronously with one another. Vats and their contents can communicate with other vats and their objects and functions, but have to\n"),a("a",{attrs:{href:"#Communicating-with-remote-objects-via-E"}},[t._v("manage asynchronous messages and responses")]),t._v(".")]),t._v(" "),a("p",[t._v("There are no tools for telling what vat something is in, or if two things are in the same or different vats. In general, you/your code should know if things are local (in the same vat) because you created them or they were passed to you by something guaranteeing that’s the case. Other objects you should treat as if they might be distant (in different vats). In practice, you will know that your normal method calls ("),a("code",[t._v("obj.method()")]),t._v(") fails because the method doesn't exist and that's usually when you slap your forehead and go \"Of course, it's remote!\".")]),t._v(" "),a("p",[t._v("Vats need to run on some platform. Both a single physical machine and a blockchain (which might itself be running on a set of  collaborating machines) are possible platforms. Either type of platform can host one or more vats.")]),t._v(" "),a("p",[t._v("Since a vat runs in a single "),a("em",[t._v("event loop")]),t._v(", each incoming request has to finish before the next one starts. If there's remaining work, you schedule it to happen later after a Promise resolves.")]),t._v(" "),a("p",[t._v("The Agoric process starts several vats. Each vat hosts a service (e.g. the Board, Zoe,\netc.). As of July, 2020, all contracts run in the Zoe vat. Eventually this will change to each contract having a dedicated vat.")]),t._v(" "),a("h2",{attrs:{id:"secure-ecmascript-ses"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#secure-ecmascript-ses"}},[t._v("#")]),t._v(" Secure EcmaScript (SES)")]),t._v(" "),a("p",[t._v("SES is a standards-track extension of the JavaScript standard\n"),a("a",{attrs:{href:"https://www.ecma-international.org/publications/standards/Ecma-262.htm",target:"_blank",rel:"noopener noreferrer"}},[t._v("EcmaScript"),a("OutboundLink")],1),t._v(".\nIt provides a secure platform for executing programs, letting you run code you don't completely trust.\nSES-based programs, whether you are an enduser or a server operator, can host untrusted developer apps’\ncode without being vulnerable to possible bugs or bad intentions.")]),t._v(" "),a("p",[t._v("The guest developer’s app code runs in an immutable realm that by default has no access to ambient authority. Agoric’s hosting code provides access to disk or network or other services, and the guest code has no access to any ungranted authority. So developers can import and rely on library code from anywhere on the net, and have limited vulnerability to its misbehavior. The outside code can’t talk to the network, store data on disk, or use other powers without the Dapp's explicit permission.")]),t._v(" "),a("p",[t._v("Every program that uses a library which  uses SES, should start with "),a("code",[t._v("import '@agoric/install-ses'")]),t._v(" Libraries do not (and should not) do this, and contracts are basically libraries")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("lockdown"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ses"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n \n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("lockdown")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// turns the current realm into an immutable realm")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// calling this function also adds a global Compartment constructor to create compartments")]),t._v("\n")])])]),a("h2",{attrs:{id:"compartments-and-realms"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#compartments-and-realms"}},[t._v("#")]),t._v(" Compartments and realms")]),t._v(" "),a("p",[t._v("JavaScript code runs in the context of a "),a("a",{attrs:{href:"https://www.ecma-international.org/ecma-262/10.0/index.html#sec-code-realms",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("Realm")]),a("OutboundLink")],1),t._v(". A realm is composed of the set of "),a("em",[t._v("primordials")]),t._v(" (objects and functions of the standard library like "),a("code",[t._v("Array.prototype.push")]),t._v(") and of a global object. In a web browser, an iframe is a realm. In Node.js, a Node process is a realm.")]),t._v(" "),a("p",[t._v("For historical reasons, the ECMAScript specification requires the "),a("em",[t._v("primordials")]),t._v("\nto be mutable ("),a("code",[t._v("Array.prototype.push = yourFunction")]),t._v(" is valid\nECMAScript but not recommended). SES makes it possible to turn the\ncurrent realm into an "),a("strong",[t._v("immutable realm")]),t._v(", that is a realm within\nwhich the primordials are deeply frozen. It also allows programs to\ncreate "),a("strong",[t._v("Compartments")]),t._v(".")]),t._v(" "),a("p",[t._v('Compartments are "mini-realms". They have their own dedicated global object\nand environment, but they inherit the primordials from their parent realm.')]),t._v(" "),a("p",[t._v("Agoric deploy scripts and smart contract code run in an immutable\nrealm with compartments providing just enough authority to create\nuseful and secure contracts (but not enough authority to do anything\nunintended or harmful to the participants of the smart contract).")]),t._v(" "),a("h2",{attrs:{id:"harden"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#harden"}},[t._v("#")]),t._v(" "),a("code",[t._v("harden()")])]),t._v(" "),a("p",[a("code",[t._v("harden()")]),t._v(" ensures that external callers of a hardened object can only\ninteract with it through functions in the object’s API.\n"),a("code",[t._v("harden()")]),t._v(" is an enhanced transitive version of\n"),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("Object.freeze")]),a("OutboundLink")],1),t._v(",\nwhich only locks up an object's own properties.")]),t._v(" "),a("p",[t._v("All objects that will be transferred across a trust boundary must have\ntheir API surface frozen (usually by calling "),a("code",[t._v("harden()")]),t._v("). This ensures\nother objects can only interact with them through their defined\nmethod interface. CapTP, our communications layer for passing\nreferences to distributed objects, enforces this at vat boundaries.")]),t._v(" "),a("p",[t._v("The general rule is that if you make a new object and give it to someone else (and don't immediately forget it yourself),\nyou should give them "),a("code",[t._v("harden(obj)")]),t._v(" instead of the raw object.\nThis prevents someone from adding/deleting the properties or prototypes of that object.\nBeing hardened doesn't preclude an object from having access to mutable state ("),a("code",[t._v("harden(new Map())")]),t._v(" still behaves like a normal mutable "),a("code",[t._v("Map")]),t._v("), but it means their methods stay the same and can't be surprisingly changed by someone else")]),t._v(" "),a("p",[t._v("Defined objects ("),a("code",[t._v("mint")]),t._v(", "),a("code",[t._v("issuer")]),t._v(", "),a("code",[t._v("zcf,")]),t._v(" etc.) shouldn't need hardening as their constructors should do that work. It's mainly records, callbacks, and ephemeral objects that need hardening.")]),t._v(" "),a("p",[t._v("You can send a message to a hardened object. If it's a record, you can access its\nproperties and their values.")]),t._v(" "),a("p",[t._v("You have to harden a class before you harden any of its instances; i.e. it takes two separate steps\nto harden both a class and its instances. Harden a base class before hardening classes that inherit from it.\n"),a("code",[t._v("harden()")]),t._v(" does transitive freezing by following the object’s\nown properties (as opposed to properties it inherited), and the objects whose own properties refer to them,\nand so forth.")]),t._v(" "),a("p",[a("code",[t._v("harden()")]),t._v(" is automatically provided by SES. Any code that will run inside a vat or a contract\ncan use harden as a global, without importing anything.")]),t._v(" "),a("p",[a("strong",[t._v("Tip")]),t._v(": If your text editor/IDE complains about "),a("code",[t._v("harden()")]),t._v(" not being defined or imported, try\nadding "),a("code",[t._v("/* global harden */")]),t._v(" to the top of the file.")]),t._v(" "),a("p",[t._v("You use "),a("code",[t._v("harden()")]),t._v(" like this:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" o "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\no"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("a  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("o"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 12 because o is still mutable")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("harden")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("o"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\no"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("a  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("37")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// throws a TypeError because o is now hardened")]),t._v("\n")])])]),a("h2",{attrs:{id:"communicating-with-remote-objects-using-e"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#communicating-with-remote-objects-using-e"}},[t._v("#")]),t._v(" Communicating with remote objects using "),a("code",[t._v("E")])]),t._v(" "),a("p",[t._v("On the Agoric platform, objects may be running in distinct vats, on a remote\nmachine, or even on a blockchain. When you send messages to non-local\nobjects in different vats, the response isn't received immediately and\ncan't be acted upon locally until it arrives.")]),t._v(" "),a("p",[t._v("To keep from blocking local code until the response arrives, we\nreturn a "),a("code",[t._v("Promise")]),t._v(" for the result. You can send more messages to a result's\n"),a("code",[t._v("Promise")]),t._v(". If and when the "),a("code",[t._v("Promise")]),t._v(" resolves to a remote object, the messages\nare forwarded to the object's location, and their results are\neventually returned and processed locally.")]),t._v(" "),a("p",[t._v("JavaScript natively\n"),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises",target:"_blank",rel:"noopener noreferrer"}},[t._v("supports Promises"),a("OutboundLink")],1),t._v(".\nAgoric's "),a("code",[t._v("HandledPromises")]),t._v(" are compatible and interoperable with\nstandard "),a("code",[t._v("Promise")]),t._v("s. Standard interaction with a "),a("code",[t._v("Promise")]),t._v(" or\n"),a("code",[t._v("HandledPromise")]),t._v(" is to do further processing either in a "),a("code",[t._v(".then()")]),t._v("\nclause or after using "),a("code",[t._v("await")]),t._v(" to get the result.")]),t._v(" "),a("p",[t._v("You can send messages to a "),a("code",[t._v("Promise")]),t._v("'s eventual result, or to a\npresence (a proxy for a remote object), using "),a("code",[t._v("E()")]),t._v(" notation. For\nexample, "),a("code",[t._v("E(remoteServiceP).startup(params)")]),t._v(". The result of a\nsend using"),a("code",[t._v("E")]),t._v(" is always a "),a("code",[t._v("Promise")]),t._v(", so the normal thing to do with\nthe result (as with any object) is either pass it as a parameter or\ninvoke a function to be performed once the "),a("code",[t._v("Promise")]),t._v(" is fulfilled.")]),t._v(" "),a("p",[a("code",[t._v("E(remoteServiceP).startup(params).then(result => useTheService(result));")])]),t._v(" "),a("p",[t._v("Deploy scripts and Zoe smart contracts often access services running in a\ndifferent vat. For instance, a deploy script may want to install a contract in a\nZoe instance running in a blockchain. But the deploy script\ncannot call "),a("code",[t._v("zoe.install(bundle)")]),t._v(", because it does not have local\naccess to the "),a("code",[t._v("zoe")]),t._v(" object in a different vat. However, the deploy\nscript is given access to a "),a("code",[t._v("zoe")]),t._v(" "),a("em",[t._v("presence")]),t._v(". To call methods on the\nactual Zoe object, the deploy code can do:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" installationHandle "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("E")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("zoe"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bundle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("The "),a("code",[t._v("E()")]),t._v(' function is a local "bridge" that lets you invoke methods on\nremote objects. The local version of a remote object is called a\n'),a("strong",[t._v("presence")]),t._v(". "),a("code",[t._v("E()")]),t._v(" takes a presence as an argument and creates an\nobject that is a forwarder that doesn't know what methods the remote object has.")]),t._v(" "),a("p",[t._v("This is useful to know for debugging. If you misspell or incorrectly capitalize the method name,\nthe local environment can't tell you've done so. You'll only find out at runtime when the\nremote object complains that it doesn't know that method.")]),t._v(" "),a("p",[a("code",[t._v("E()")]),t._v(" performs the communication asynchronously. Method calls can take\nobjects in the current vat or presences for objects in other vats as arguments.")]),t._v(" "),a("p",[a("code",[t._v("E()")]),t._v(" is frequently used in code to call\n"),a("a",{attrs:{href:"https://agoric.com/documentation/zoe/api/zoe.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Zoe Service API methods"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"notifiers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#notifiers"}},[t._v("#")]),t._v(" Notifiers")]),t._v(" "),a("p",[t._v("Dapps and other tools may want to be notified about state changes of a Zoe\ncontract or offer. Agoric uses a Notifier based on Promises, allowing\nmany subscribers to receive notifications without the publisher\nhaving to track a subscription list.")]),t._v(" "),a("p",[t._v("Zoe supports the Notifier, which publishes updates to offer state\n(reallocations and completions). Some contracts also use it, and\ncan publish current prices or other contract-specific details.")]),t._v(" "),a("h3",{attrs:{id:"getting-notifications"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getting-notifications"}},[t._v("#")]),t._v(" Getting notifications")]),t._v(" "),a("p",[t._v("Zoe has a public method "),a("code",[t._v("getOfferNotifier()")]),t._v(", and contracts will have\nsimilar methods. This method provides a long-lived notifier object associated\nwith a particular stream of updates.")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" offerNotifer "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" zoe"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getOfferNotifier")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("offerHandle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" updateHandle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" done "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" offerNotifier"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getUpdateSince")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("done"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("drop offer "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" list"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("waitForNextUpdate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("offerNotifier"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" updateHandle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("Note: There is both a "),a("code",[t._v("zoe.getOfferNotifier()")]),t._v(" and a "),a("code",[t._v("zcf.getOfferNotifier()")]),t._v(". Use the "),a("code",[t._v("zcf.")]),t._v(" version\nwithin contracts and the "),a("code",[t._v("zoe.")]),t._v(" version in the REPL, deploy scripts, and similar outside of a contract cases.")]),t._v(" "),a("p",[t._v("When called on a notifier object"),a("code",[t._v("notifier.getUpdateSince()")]),t._v(" returns\nthe record "),a("code",[t._v("{ value, updateHandle, done }")]),t._v(". "),a("code",[t._v("value")]),t._v(" represents\nthe state of an offer or contract. If you want a notifier from Zoe, you have to\nidentify the offer.")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("value")]),t._v(" is the current state, according to the source.")]),t._v(" "),a("li",[a("code",[t._v("done")]),t._v(" is "),a("code",[t._v("false")]),t._v(" until the stream of updates reaches a final state. Then\n"),a("code",[t._v("value")]),t._v(" never changes and "),a("code",[t._v("getUpdateSince()")]),t._v(" always returns the\nsame record. A contract calling "),a("code",[t._v("complete()")]),t._v(" on an offer causes that\noffer's notifier to be marked as done.")]),t._v(" "),a("li",[a("code",[t._v("updateHandle")]),t._v(" is used to request to be notified the next\ntime there's a change to the state.")])]),t._v(" "),a("p",[t._v("If you call "),a("code",[t._v("getUpdateSince(oldUpdateHandle)")]),t._v(":")]),t._v(" "),a("ul",[a("li",[t._v("With no handle, or any "),a("code",[t._v("updateHandle")]),t._v(" other than the most recent\none:\n"),a("ul",[a("li",[t._v("The notifier immediately returns a record with the current state.")])])]),t._v(" "),a("li",[t._v("With the most-recently generated "),a("code",[t._v("updateHandle")]),t._v(":\n"),a("ul",[a("li",[t._v("The notifier returns a promise for the next record, which is resolved\non the next state change.")])])]),t._v(" "),a("li",[t._v("If you haven't called "),a("code",[t._v("getUpdateSince()")]),t._v(" before, there is no previous update handle to use.")])]),t._v(" "),a("p",[t._v("Some notification systems also provide access to a complete list of\nan object's state changes. The Agoric Notifier API only directly supports\nthe single state change notification style. The client can't work around this\nby keeping lists of changes, since the service doesn't send out all the changes\nby default. The alternative approach is for the service to represent its state\nas the set of changes leading up to the present. A use case for this is an\neditor with an undo function, or an application with rollback ability.")]),t._v(" "),a("p",[t._v("Rather than sending "),a("code",[t._v("\"the current state is 'blue'.\"")]),t._v(", a contract could send\n"),a("code",[t._v("\"the current state is 'blue', the most recent update was { ''blah' => 'blue' }\"")]),t._v(".\nThat requires the contract to determine that clients want redundant info, and\npackage and send it.")]),t._v(" "),a("p",[t._v("A common pattern for following updates to a notifier until it's done is the following.\nNote that the notifier object is outside the contract facet, and so uses "),a("code",[t._v("E()")]),t._v(".*\nAlso, "),a("code",[t._v("PublicAPI")]),t._v(" is a widely available contract facet, where it often makes sense to\nput the "),a("code",[t._v("getNotifier()")]),t._v(" method.")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("updateStateOnChanges")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("notifier"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" lastHandle")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("E")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("notifier"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getUpdateSince")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("lastHandle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" updateHandle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" done "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("done"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("stopTracking")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("notifier"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("respondToNewValue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// resubscribe for more updates")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("updateStateOnChanges")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("notifier"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" updateHandle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("E")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("publicAPI"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getNotifier")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("offerHandle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("notifier")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("updateStateOnChanges")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("notifier "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("Zoe's updates for an offer show the current allocation to be\npaid if the contract completes without further changes. When the\ncontract calls "),a("code",[t._v("complete()")]),t._v(" on the offer, its notifier is marked "),a("code",[t._v("done")]),t._v(".")]),t._v(" "),a("h3",{attrs:{id:"providing-updates"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#providing-updates"}},[t._v("#")]),t._v(" Providing updates")]),t._v(" "),a("p",[t._v("Contract instances use a notifier to provide updates to people who\nwant to follow changes. They import and call\n"),a("code",[t._v("produceNotifer()")]),t._v(", which returns two facets, a notifier and an updater. You can\npass the notifier object to anyone allowed to see that contract\ninstance's state changes.")]),t._v(" "),a("p",[t._v("The updater has two methods, which both send a notification with the\nnew state to any waiting notifiers:")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("updateState(newState)")])]),t._v(" "),a("li",[a("code",[t._v("resolve(finalState)")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("resolve()")]),t._v(" also resolves the promise to a record with "),a("code",[t._v("done: true, updateHandle: undefined")]),t._v(", and ensures that the answer will never change.")])])])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" produceNotifier "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@agoric/notifier'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" notifier"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" updater "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("produceNotifier")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);e.default=s.exports}}]);