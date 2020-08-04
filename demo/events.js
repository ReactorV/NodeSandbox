const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.on('firstEvent', data => {
    console.log('On: firstEvent', data);
});

emitter.emit('firstEvent', {a: 1});
//On: firstEvent { a: 1 }

emitter.emit('firstEvent', {b: 2});
//On: firstEvent { b: 2 }

setTimeout(() => {
    emitter.emit('firstEvent', {c: 3});
}, 1000);

class Dispatcher extends EventEmitter {
    subscribe(eventName, callback) {
        console.log('Subscribe...');

        this.on(eventName, callback)
    }

    dispatch(eventName, data) {
        console.log('Dispatch...');

        this.emit(eventName, data);
    }
}

const firstDispatcher = new Dispatcher();

firstDispatcher.subscribe('onfirstEvent', data => {
    console.log('onfirstEvent:', data);
});

firstDispatcher.dispatch('onfirstEvent', {key: 52});
