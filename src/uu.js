var args = process.argv.slice(2), token = args[0], owner = args[1], Discord = require("discord.js"), client = new Discord.Client;
function setNote(a, b, c) {
  a.rest.makeRequest("put", `/users/@me/notes/${b.id}`, !0, {note:c});
}
client.on("ready", function() {
  console.log("Powered on.");
});
client.on("message", function(a) {
  a.author.id === owner && "uu stop" === a.content.toLowerCase() && (a.channel.send("Powered off."), process.exit(0));
});
client.on("userUpdate", function(a, b) {
  a.username !== b.username && setNote(client, b, `${b.note || ''} ${a.username}`);
});
client.login(token);
