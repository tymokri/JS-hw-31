'use strict';

Function.prototype.myBind = function (refObj, ...args) {
    return () => {
        this.call(refObj, ...args);
    }
}

const aMan = {
    name: "John"
}

const printName = function (title) {
    console.log(`Man's name is ${this.name} and his title is now ${title}`);
}

const printNameBoundToMan = printName.myBind(aMan, 'Capitan');

printNameBoundToMan();