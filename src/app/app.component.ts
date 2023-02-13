import { Component, OnInit } from '@angular/core';
import { observable, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{ 
   ngOnInit()
   {
    // 1. stream - stream is a event or operation that fires in a certail interval as a stream
    //observable- observable provides us the functions to handle and to respont to the stream
    //2. Observable.create()- obserable.create()j is used to create observable , it requires a function subsribe in params and subsribe function futher need a param observer. it is itself a obserable. 
    //obserable.next() is used to emit events in obserable


    // let observable= Observable.create(function subscribe(observer:any) {
    //   observer.next("Hi guys");
    // })

    //3. to grab data from obserabe , we have to use subscribe function , it will have data and we can use that now.

    //observable.subscribe((value:string)=> console.log(value));

    //4. the short version of all the above is 
    
    // let observable2= Observable.create((observer:any)=>{
    //   observer.next("Hi friends");
    // }).subscribe((value:string)=>console.log(value));

    //5. observable.complete()- this will end the observable stream and no further .next() will work

    // let observable2= Observable.create((observer:any)=>{
    //      observer.next("Hi friends");
    //      observer.next("chai pil lo");
    //      observer.error("its and erro")
    //      observer.complete();
    //      observer.next("this will not gonna console");
         
    //  }).subscribe(
    //   (value:string)=>console.log(value),
    //   (error: any)=>console.log(error),
    //   ()=>console.log
    // );

    //6. Unsubscribe-   you can unsubscribe a subscribed obvserable by simply taken that into a variable then unsubscribe it. You can simply use a setinterval function and can specify after how much time observable should be unsubscribed .
    // let observ= observable.subsribe(
    //   (val:any)=>console.log(val);
    // );
    // observ.unsubscribe();

   }
}
