import {Component} from '@angular/core';
@Component({
    selector : 'app-message',
    template: `<h1>{{message}}</h1>`,
    styles: ['h1{color:green;}']
})
export class MessageComponent{
    message:string = "Good Afternoon";
}