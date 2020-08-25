(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{357:function(t,e,n){t.exports=n.p+"assets/img/stack.913ad41b.svg"},400:function(t,e,n){"use strict";n.r(e);var a=n(42),o=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"the-agoric-platform"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-agoric-platform"}},[t._v("#")]),t._v(" The Agoric Platform")]),t._v(" "),a("p",[a("img",{attrs:{src:n(357),alt:"agoric stack",title:"The Agoric Stack"}})]),t._v(" "),a("p",[t._v('This document focuses on the layers beneath Zoe and ERTP, what we call\nthe Agoric Platform. This includes "Swingset", which can be thought of\nas our VM providing a distributed Javascript environment, as well as\nthe Cosmos SDK and IBC.')]),t._v(" "),a("h2",{attrs:{id:"swingset"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#swingset"}},[t._v("#")]),t._v(" Swingset")]),t._v(" "),a("p",[t._v("On a single blockchain, or even a single machine with multiple users,\nit's very important to ensure that one user cannot prevent another\nuser's code from executing and that the way in which code is\ninterleaved doesn't open up hazards such as reentrancy. Swingset\nsolves that problem by dividing up the execution environment into\n"),a("em",[t._v("vats")]),t._v(". A "),a("router-link",{attrs:{to:"/distributed-programming.html#vats"}},[t._v("vat")]),t._v(" is a "),a("em",[t._v("unit\nof synchrony")]),t._v(". This means that within a JavaScript vat, objects and\nfunctions can communicate with one another synchronously. Between\nvats, objects and functions communicate asynchronously, by design.")],1),t._v(" "),a("p",[t._v("A vat runs a single "),a("em",[t._v("event loop")]),t._v(".")]),t._v(" "),a("p",[t._v("A physical machine can run one or several vats. A blockchain can run\none or several communicating vats.")]),t._v(" "),a("p",[t._v("The internal state of a vat can be stored in a persistent memory so\nthat the vat can be turned off and later turned back on (on the same\nor a different physical machine) by loading the stored state.")]),t._v(" "),a("p",[t._v("A Swingset instance also handles communication between the vats it\nprovides and the outside world. On a blockchain, this means writing to\na part of the state that is intended to serve as an outbox. On a\nnon-blockchain machine, this might mean sending a message to a remote\nmachine.")]),t._v(" "),a("h2",{attrs:{id:"cosmos-sdk"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cosmos-sdk"}},[t._v("#")]),t._v(" Cosmos SDK")]),t._v(" "),a("p",[t._v("Our testnet has a single Swingset instance with multiple vats running\non top of Cosmos SDK. Swingset and most of our code is written in\nJavaScript, so we currently have a complicated process that starts up\nthe JavaScript environment, starts a Swingset instance, and then\nconnects through Go to the Cosmos SDK modules, the consensus algorithm\nin Tendermint, and back again.")]),t._v(" "),a("h2",{attrs:{id:"dynamic-ibc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dynamic-ibc"}},[t._v("#")]),t._v(" Dynamic IBC")]),t._v(" "),a("p",[t._v("IBC is the protocol for "),a("a",{attrs:{href:"https://cosmos.network/ibc/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Inter-Blockchain\nCommunication"),a("OutboundLink")],1),t._v(". IBC enables messages to\nbe sent from one blockchain to another with the use of intermediary\nrelayers.")]),t._v(" "),a("p",[t._v("Dynamic IBC (dIBC) is a solution to the problem of rolling out a new\nprotocol without needing a platform upgrade or chain governance vote.")]),t._v(" "),a("p",[t._v("In essence, dIBC is the idea of using a smart contract or VM platform\nto deploy new contracts that support new protocols, all on an existing\nchain without having to wait for chain upgrades.")]),t._v(" "),a("p",[t._v("For more information, check out "),a("a",{attrs:{href:"https://medium.com/agoric/the-road-to-dynamic-ibc-4a43bc964bca",target:"_blank",rel:"noopener noreferrer"}},[t._v("a recent article on\ndIBC"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"tendermint"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tendermint"}},[t._v("#")]),t._v(" Tendermint")]),t._v(" "),a("p",[t._v("Tendermint is a consensus engine, defining how blocks are agreed upon\nand created. Effectively, Tendermint is the lowest level layer that\ndefines the blockchain itself.")])])}),[],!1,null,null,null);e.default=o.exports}}]);