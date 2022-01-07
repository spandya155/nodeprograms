var events = require('events')
var em = new events.EventEmitter();
//create Event using On method
em.on('testEvent',(data)=>{
    if(data > 18){
        console.log("person Age is Greater than 18");
    }
    else{
        console.log("Person Age is less than 18");
    }
})
//fire the Eevent using emit method
em.emit('testEvent',13)
