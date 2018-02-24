//learned how to make this from https://www.youtube.com/watch?v=K6N9dSMb7sM and https://docs.tmijs.org/

var tmi = tmi = require('tmi.js');
var lastUser;


var options = {
  options: {
    debug: true
  },
  connection: {
    cluster: "aws",
    reconnect: true
  },
  identity: {
    username: "meadebotbutimnotbanned",
    password: "oauth:qioj21dz41fv49jrjcjaii36s23rwk"
  },
  channels: ["parks2214"]
};

var client = new tmi.client(options);
var rand;
client.connect();

/*(var minutes = 5,
  interval = minutes * 60 * 1000;
setInterval(function() {
  rand = Math.floor(Math.random() * 5);
  if (rand == 0) {
    client.action("parks2214", "henlo stinky humans. am bot developed by Matthew Meade. If there is a problem report it to him plz");
  } else if (rand == 1) {
    client.action("parks2214", "puhuHUHUHUhu");
  } else if (rand == 2) {
    client.action("parks2214", "PogChamp");
  } else if (rand == 3) {
    client.action("parks2214", "HYPE IN THE CHAT!")
  } else if (rand == 4) {
    client.action("parks2214", "S is for SUPER. C is for CHILL. O is for OMG he's great at games. T is for T")
  }
})*/

setInterval(function() {
  talk()
}, 5 * 60 * 1000);

setInterval(function() {
  whisper()
}, 1 * 30 * 1000)

function talk() {
  var rand = Math.floor(Math.random() * 5);
  if (rand == 0) {
    client.action("parks2214", "DansGame");
  } else if (rand == 1) {
    client.action("parks2214", "puhuHUHUHUhu");
  } else if (rand == 2) {
    client.action("parks2214", "PogChamp");
  } else if (rand == 3) {
    client.action("parks2214", "HYPE IN THE CHAT!")
  } else if (rand == 4) {
    client.action("parks2214", "parks2214 is my favourite streamer. when the stream starts i think to myself 'yes'. when the stream ends i think to myself 'no'.")
  }
}

function whisper() {
  var rand = Math.floor(Math.random() * 5);
  if (rand == 0) {
    if (lastUser != null) {
      client.whisper(lastUser, "mmm lil mama lemme whisper in yo ear");
    } else if (rand == 1) {
      client.whisper(lastUser, "wake up. you're dreaming. this isn't real")
    } else if (rand == 2) {
      client.whisper(lastUser, "turn the oven off")
    } else if (rand == 3) {
      client.whisper(lastUser, "it's gonna happen in 5... 4... 3... 2... 1.....")
    } else if (rand == 4) {
      client.whisper(lastUser, "hey ;^) ")
    }
  }
}

client.on('chat', function(channel, user, message, self) {
  lastUser = user['display-name'];
  var msg = message.toLowerCase();
  var rand = Math.floor(Math.random() * 5);
  if (msg.includes("hello") || msg.includes("hey")) {
    if (rand == 0) {
      client.action("parks2214", "sup " + user['display-name']);
    } else if (rand == 1) {
      client.action("parks2214", "what. is. UP! " + user['display-name'].toUpperCase() + "!");
    } else if (rand == 2) {
      client.action("parks2214", "hey babe @" + user['display-name'] + " ;^)");
    } else if (rand == 3) {
      client.action("parks2214", "yo " + user['display-name']);
    } else if (rand == 4) {
      client.action("parks2214", "what's poppin chief " + user['display-name']);
    }
  }
  if (msg.includes("fuck") || msg.includes("shit") || msg.includes("damn")) {
    if (rand == 0) {
      client.action("parks2214", "swearing isnt cool @" + user['display-name']);
    } else if (rand == 1) {
      client.action("parks2214", "mods ban " + user['display-name'] + " plz");
    } else if (rand == 2) {
      client.action("parks2214", "yo my little brother is here dont say that " + user['display-name']);
    } else if (rand == 3) {
      client.action("parks2214", "let's take it down from a 10 to a 4 " + user['display-name']);
    } else if (rand == 4) {
      client.action("parks2214", "WOAH! NOT! NEEDED! @" + user['display-name']);
    }
  }
})

client.on("join", function(channel, username, self) {
  client.action("parks2214", "i c u " + username);
  client.whisper(username, "what's someone as smexy as u doin in this losers  stream")

});

client.on("part", function(channel, username, self) {
  client.action("parks2214", "buh bye " + username);
});

client.on('connected', function(address, port) {
  //console.log("Address: " + address + " Port: " + port);
  client.action("parks2214", "Henlo stinky humans");
})