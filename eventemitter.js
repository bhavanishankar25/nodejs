var events =require('events');
var evenEmitter =new events.EventEmitter();

var myEventHandler = function (){
    console.log('I hear a scream!');
}

//Assignning the event handler to event:
evenEmitter.on('scream',myEventHandler);

//Fire the 'screm' event:
evenEmitter.emit('scream');


