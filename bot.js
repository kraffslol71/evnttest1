//Eventbotu1 e ozel 3 00 da olacak paravakti ve 1.200.000 olcak bot quit settimeoutu
const Discord = require('discord.js');
const client = new Discord.Client();
//const fs = require('fs')
//const util = require('util')
const mc = require('minecraft-protocol')
const mineflayer = require('mineflayer')
//const readFile = (fileName) => util.promisify(fs.readFile)(fileName, 'utf8')
var cron = require("cron");
client.on('message', async (message) => { try{	if (message.channel.type != "dm") return; if (message.author.bot) return; if (message.guild) return; let guild = client.guilds.cache.get("854721457786454046"); let argumanlar = message.content.replace(/ +(?= )/g,'').split(' '); if(argumanlar[0]!="!event") return; let user=message.author; let balta = guild.roles.cache.find(role => role.name === "🪓"); if(!(guild.member(user.id).roles.cache.has(balta.id) || guild.owner.id==user.id)) return; user.send(`<@${user.id}>, Event botları sokuluyor...`) } catch(err) { console.error(err); } });

const config = {
  host: 'play.hiranetwork.com',
  port: 25565,
  hesaplar: "xAli55,warrior30,zKaplan",
  interval: 10000, // cooldown between joining server too prevent joining too quickly
  token: "ODc5MzA5NzU3MzQ3OTQ2NTY3.YSN3Bg.6LvrKBO_dpiPl0h588S-zMxqgak",
  index: 0
}

const accounts = config.hesaplar.split(',');
let paraatilacakkisi="";

let eventvakti=0;
let paravakti=0;

let eventbotu0=0;
let eventbotu1=0;
let eventbotu2=0;
let parabotu0=0;
let parabotu1=0;
let parabotu2=0;

function makeBot (_u, ix) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
    console.log("Bot oluşturuldu.")
      const bot = mc.createClient({
        username: _u,
        //password: _p,
        host: config.host,
        port: config.port,
	version: "1.12"
      })
      bot.on("login", async function(package) {
        try{
          bot.write('chat', {message: '/login mahmut723'});
          setTimeout(function() {
            bot.write('chat', {message: '/faction'});
          }, 10000);
          
          setTimeout(function() {
            bot.write('chat', {message: '/p auto'});
            setTimeout(function() {
            bot.write('chat', {message: '/p h'});
            }, 1000);
          }, 15000);
          
          setTimeout(function() {
            eventvakti=0;

            if((ix==0 && eventbotu0==0) || (ix==1 && eventbotu1==0) || (ix==2 && eventbotu2==0))
            {
            bot.write('chat', {message: '/p auto'});
            setTimeout(function() {
            bot.write('chat', {message: '/p h'});
            }, 1000);
            bot.end();
            }

            if(ix==0)
            eventbotu0=1;
            if(ix==1)
            eventbotu1=1;
            if(ix==2)
            eventbotu2=1;  
          }, 2400000);
         
          }          
        catch(err) {
          console.error(err);
        }
      });
      bot.on('spawn', () => resolve(bot))
      //bot.on('error', (err) => reject(err))
      bot.on('error', (err) => console.log(err))
      //bot.on('end', () => { makeBot(_u, ix) })//(?)     

      bot.on('end', () => { if(eventvakti && ((ix==0 && eventbotu0==0) || (ix==1 && eventbotu1==0) || (ix==2 && eventbotu2==0))) { makeBot(_u, 1); } })//(?)    

     /*Bu kisim ne*///setTimeout(() => reject(Error('Took too long to spawn.')), 5000) // 5 sec
    }, config.interval * ix)
  })
}

function makeBotPara (_u, ix) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
    console.log("Bot oluşturuldu.")
      const bot = mineflayer.createBot({
        username: _u,
        //password: _p,
        host: config.host,
        port: config.port,
	version: "1.12"
      })
      setTimeout(function() {
	try{
      		paravakti=0;
      		parabotu0=0;
      		parabotu1=0;
      		parabotu2=0;
      		bot.end();
	}          
        catch(err) {
        	console.error(err);
        }
      }, 2760000);
      bot.on("login", async function(package) {
        try{
          bot.chat('/login mahmut723');
          setTimeout(function() {
            bot.chat('/faction');
          }, 10000);
			
	  setTimeout(function() {	
          setTimeout(function() {
            bot.chat('/home');
          }, 15000);
          setTimeout(function() {
          const items = bot.inventory.items();
          const timeout = 1000;
          const dropper = (i) => {
          if (!items[i]){ 
        
          /*if((ix==0 && parabotu0==0) || (ix==1 && parabotu1==0) || (ix==2 && parabotu2==0))
          {
            setTimeout(function() {
            bot.chat('/warp vakitnakittir');
            }, 60000);
          }*/
          /*if(ix==0)
          parabotu0=1;
          if(ix==1)
          parabotu1=1;
          if(ix==2)
          parabotu2=1;*/

          }
          bot.tossStack(items[i], () => {
          setTimeout(() => dropper(i + 1), timeout) 
          })
          }
          dropper(0);
	  
	  setTimeout(function() {	  
	  dropper(0);
	  }, 15000);
	 
	  setTimeout(function() {	  
	  dropper(0);
	  }, 30000);
		  
	  setTimeout(function() {	  
	  dropper(0);
	  }, 45000);
            
          }, 20000);
	  }, 2100000);
		
          setTimeout(function() {
            paravakti=0;

            if((ix==0 && parabotu0==0) || (ix==1 && parabotu1==0) || (ix==2 && parabotu2==0))
            {
            	bot.chat('/warp vakitnakittir');
	    	try{
            		bot.end();
	    	}          
            	catch(err) {
            		console.error(err);
            	}
            }

            if(ix==0)
            parabotu0=1;
            if(ix==1)
            parabotu1=1;
            if(ix==2)
            parabotu2=1;    
          }, 2700000);

          }          
        catch(err) {
          console.error(err);
        }
      });
      bot.on('spawn', () => resolve(bot))
      //bot.on('error', (err) => reject(err))
      bot.on('error', (err) => console.log(err))
      //bot.on('end', () => { makeBot(_u, ix) })//(?)
      
      bot.on('end', () => { if(paravakti && ((ix==0 && parabotu0==0) || (ix==1 && parabotu1==0) || (ix==2 && parabotu2==0))) { makeBot(_u, ix); } })//(?)

     /*Bu kisim ne*///setTimeout(() => reject(Error('Took too long to spawn.')), 5000) // 5 sec
    }, config.interval * ix)
  })
}

function paraAt (_u, ix) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
    console.log("Bot oluşturuldu.")
      const bot = mineflayer.createBot({
        username: _u,
        //password: _p,
        host: config.host,
        port: config.port,
	version: "1.12"
      })
      setTimeout(function() {
	try{
      		paravakti=0;
      		parabotu0=0;
      		parabotu1=0;
      		parabotu2=0;
      		bot.end();
	}          
        catch(err) {
        	console.error(err);
        }
      }, 660000);
      bot.on("login", async function(package) {
        try{
          bot.chat('/login mahmut723');
          setTimeout(function() {
            bot.chat('/faction');
          }, 10000);		
		
	  if (paraatilacakkisi!="")
	  {
          setTimeout(function() {
            bot.chat('/pay '+paraatilacakkisi+' 80000000');
          }, 11000);
          setTimeout(function() {
            bot.chat('/pay '+paraatilacakkisi+' 40000000');
          }, 12000);
          setTimeout(function() {
            bot.chat('/pay '+paraatilacakkisi+' 20000000');
          }, 13000);
          setTimeout(function() {
            bot.chat('/pay '+paraatilacakkisi+' 10000000');
          }, 14000);
	  setTimeout(function() {
            paraatilacakkisi="";
          }, 14500);
	  }	
		
          setTimeout(function() {
            bot.chat('/home');
          }, 15000);
          setTimeout(function() {
          const items = bot.inventory.items();
          const timeout = 1000;
          const dropper = (i) => {
          if (!items[i]){ 
        
          /*if((ix==0 && parabotu0==0) || (ix==1 && parabotu1==0) || (ix==2 && parabotu2==0))
          {
            setTimeout(function() {
            bot.chat('/warp vakitnakittir');
            }, 60000);
          }*/
          /*if(ix==0)
          parabotu0=1;
          if(ix==1)
          parabotu1=1;
          if(ix==2)
          parabotu2=1;*/

          }
          bot.tossStack(items[i], () => {
          setTimeout(() => dropper(i + 1), timeout) 
          })
          }
          dropper(0);
	  
	  setTimeout(function() {	  
	  dropper(0);
	  }, 15000);
	 
	  setTimeout(function() {	  
	  dropper(0);
	  }, 30000);
		  
	  setTimeout(function() {	  
	  dropper(0);
	  }, 45000);
            
          }, 20000);
	  
		
          setTimeout(function() {
            paravakti=0;

            if((ix==0 && parabotu0==0) || (ix==1 && parabotu1==0) || (ix==2 && parabotu2==0))
            {
            	bot.chat('/warp vakitnakittir');
	    	try{
            		bot.end();
	    	}          
            	catch(err) {
            		console.error(err);
            	}
            }

            if(ix==0)
            parabotu0=1;
            if(ix==1)
            parabotu1=1;
            if(ix==2)
            parabotu2=1;    
          }, 600000);

          }          
        catch(err) {
          console.error(err);
        }
      });
      bot.on('spawn', () => resolve(bot))
      //bot.on('error', (err) => reject(err))
      bot.on('error', (err) => console.log(err))
      //bot.on('end', () => { makeBot(_u, ix) })//(?)
      
      bot.on('end', () => { if(paravakti && ((ix==0 && parabotu0==0) || (ix==1 && parabotu1==0) || (ix==2 && parabotu2==0))) { makeBot(_u, ix); } })//(?)

     /*Bu kisim ne*///setTimeout(() => reject(Error('Took too long to spawn.')), 5000) // 5 sec
    }, config.interval * ix)
  })
}

function start() {
if(!eventvakti){
console.log("Event botları giriyor...");
eventvakti=1;
//const accounts = config.hesaplar.split(',')//test.split(/\r?\n/).map(login => login.split(':'))
//const botProms = accounts.map(makeBotPara)
i=0;
accounts.forEach(account => {
makeBot(account,i)
//console.log(account)
i++;
})
//accounts.map(console.log)
}
}

function para() {
if(!paravakti){
console.log("Para botları giriyor...");
paravakti=1;
parabotu0=0;
parabotu1=0;
parabotu2=0;
//const accounts = config.hesaplar.split(',')//test.split(/\r?\n/).map(login => login.split(':'))
//const botProms = accounts.map(makeBot)
i=0;
accounts.forEach(account => {
makeBotPara(account,i)
//console.log(account)
i++;
})
//accounts.map(console.log)
}
}

function yariotopara() {
if(!paravakti){
console.log("Yarı Oto Para botları giriyor...");
paravakti=1;
parabotu0=0;
parabotu1=0;
parabotu2=0;
//const accounts = config.hesaplar.split(',')//test.split(/\r?\n/).map(login => login.split(':'))
//const botProms = accounts.map(makeBot)
i=0;
accounts.forEach(account => {
paraAt(account,i)
//console.log(account)
i++;
})
//accounts.map(console.log)
}
}

client.on('message', async (message) => {
  try{	
	
  if (message.channel.type != "dm") return;
  if (message.author.bot) return;
  if (message.guild) return;

  let guild = client.guilds.cache.get("854721457786454046");
  
  let argumanlar = message.content.replace(/ +(?= )/g,'').split(' ');	
  if(argumanlar[0]!="!event") return;
  if(argumanlar[1]) { paraatilacakkisi=argumanlar[1] }	  

  let user=message.author;

  let balta = guild.roles.cache.find(role => role.name === "🪓");
  if(!(guild.member(user.id).roles.cache.has(balta.id) || guild.owner.id==user.id)) return; 
	
  if(config.index==0)	
  {
  yariotopara();
  }

  if(config.index==1)	
  {
  setTimeout(function() {	  
  	yariotopara();
  }, 120000);
  }
	  
  if(config.index==2)	
  {
  setTimeout(function() {	  
  	yariotopara();
  }, 240000);
  }
	  
  if(config.index==3)	
  {
  setTimeout(function() {	  
  	yariotopara();
  }, 360000);
  }
	  
  if(config.index==4)	
  {
  setTimeout(function() {	  
  	yariotopara();
  }, 480000);
  }
  
  }         
 catch(err) {
  console.error(err);
}
  
});

client.on("ready", () => {
  console.log("Sistem başlatıldı.");
  /*Test*///let startjob = new cron.CronJob('00,20,40 40 11,16 * * *', start); 
	
  if(config.index==0)	
  {
  let startjob = new cron.CronJob('00,20,40 30,31 11,16 * * *', para); 
  startjob.start();
  }

  if(config.index==1)	
  {
  let startjob = new cron.CronJob('00,20,40 32,33 11,16 * * *', para); 
  startjob.start();
  }
	
  if(config.index==2)	
  {
  let startjob = new cron.CronJob('00,20,40 34,35 11,16 * * *', para); 
  startjob.start();
  }
	 
  if(config.index==3)	
  {
  let startjob = new cron.CronJob('00,20,40 36,37 11,16 * * *', para); 
  startjob.start();
  }
	
  if(config.index==4)	
  {
  let startjob = new cron.CronJob('00,20,40 38,39 11,16 * * *', para); 
  startjob.start();
  }
	
  //start();
  //para();
  //yariotopara();
});

client.login(config.token);
