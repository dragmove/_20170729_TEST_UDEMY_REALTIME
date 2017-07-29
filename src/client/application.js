import './application.scss';

import * as services from './services';

// playground
services.server.on$('test')
  .map(data => data + ' whoa')
  .subscribe(item => {
    console.log(`Got ${item} from server!`);
  });

services.server.status$.subscribe(state => console.log(state));

// auth

// components

// bootstrap
services.socket.connect();


/*
 import $ from "jquery";
 import "moment-duration-format";

 import "shared/operators";

 import "./application.scss";

 import * as services from "./services";

 // ------------------
 // PLAYGROUND
 services.server
 .emitAction$("login", {username: "foo", password: "bar"})
 .subscribe(user => {
 console.log("We're logged in: " + user);
 }, error => {
 console.error(error);
 });

 // ------------------
 // Auth
 const $html = $("html");
 services.usersStore.currentUser$.subscribe(user => {
 if (user.isLoggedIn) {
 $html.removeClass("not-logged-in");
 $html.addClass("logged-in");
 } else {
 $html.addClass("not-logged-in");
 $html.removeClass("logged-in");
 }
 });

 // ------------------
 // Components
 require("./components/player/player");
 require("./components/users/users");
 require("./components/chat/chat");
 require("./components/playlist/playlist");

 // ------------------
 // Bootstrap
 services.socket.connect();
 */