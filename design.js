/**
 * Created by Henrycc on 16/7/14.
 */
//单例模式
// var singleton = function(fn){
//     var result;
//     return function(){
//         result || ( result = fn.call(this) );
//     }
// };
//
// var createMask = singleton(function () {
//     return document.body.appendChild(document.createElement('div'));
// });
//
// document.getElementById('singleton').addEventListener('click',createMask);
//
// //简单工厂模式
// function A( name ){
//     this.name = name;
// }
//
// function ObjectFactory(){
//     var obj = {},
//     Constructor = Array.prototype.shift.call( arguments );// 1、arguments表示调用函数时的传参,2、shift函数, 删除数组的第一个元素,返回第一个值,但是arguments中就没有了。
//     obj.__proto__ =  typeof Constructor.prototype === 'number' ? Object.prototype : Constructor.prototype;// obj.__proto__ === Constructor.prototype: var obj = new Constructor();
//
//     var ret = Constructor.apply( obj, arguments ); // 此时的this为obj,obj.name = arguments
//     return typeof ret === 'object' ? ret : obj;
// }
//
// var a = ObjectFactory( A, 'svenzeng' );
//
// alert ( a.name );  //svenzeng


// function test(){
//     alert(arguments[1]);
//     alert(arguments.callee);
// }
// test('hello',A);

//函数的prototype为Object   constructor为Function  __proto__为其本身

//对象的prototype为undefined   constructor为function Object(){}  __proto__为Object
//
// window.name1 = "The Window";
//
// var obj = {
//     name1 : "My Object",
//     getNameFunc : function(){
//         return this.name1;
//     }
// };
//
// var test = obj.getNameFunc;
//
// alert(test());
// alert(obj.getNameFunc());

//观察者模式

// Events = function() {
//     var listen, log, obj, one, remove, trigger, __this;
//     obj = {};
//     __this = this;
//
//     listen = function( key, eventfn ) {  //把简历扔盒子, key就是联系方式.
//         var stack, _ref;  //stack是盒子
//         stack = ( _ref = obj[key] ) != null ? _ref : obj[ key ] = [];
//         return stack.push( eventfn );
//     };
//
//     one = function( key, eventfn ) {
//         remove( key );
//         return listen( key, eventfn );
//     };
//
//     remove = function( key ) {
//         var _ref;
//         return ( _ref = obj[key] ) != null ? _ref.length = 0 : void 0;
//     };
//
//     trigger = function() {  //面试官打电话通知面试者
//         var fn, stack, _i, _len, _ref, key;
//         key = Array.prototype.shift.call(arguments);
//         stack = ( _ref = obj[key] ) != null ? _ref : obj[key] = [];
//         for (_i = 0, _len = stack.length; _i < _len; _i++) {
//             fn = stack[_i];
//             if (fn.apply(__this, arguments) === false) {
//                 return false;
//             }
//         }
//     }
//     return {
//         listen: listen,
//         one: one,
//         remove: remove,
//         trigger: trigger
//     }
// }
//
// var adultTV = Events();
// adultTV.listen('play',function (e) {
//     alert('今天表演的是谁'+ e.name);
// });
//
// adultTV.listen('sing',function (e) {
//     alert('今天唱歌的是谁'+ e.name);
// });
//
//
// adultTV.trigger('play',{ 'name': '麻生希' });
//
// 桥接模式
// forEach = function( ary, fn ){
//     for ( var i = 0, l = ary.length; i < l; i++ ){
//         var c = ary[ i ];
//         if ( fn.call( c, i, c ) === false ){
//             return false;
//         }
//     }
// }
//
// forEach([1,2,3],function(i,n){
//     alert(n*3);
// })

// 外观模式 门面模式
// var aa = function(){
//     return "烤鸭";
// }
//
// var bb = function(){
//     return "白菜";
// }
// var getUserInfo = (function () {
//     var info = aa() + bb();
//     alert (info);
// })();

//访问者模式  模拟对象的push
// var Visitor = {};
// Visitor.push = function(){
//     return Array.prototype.push.apply( this, arguments );
// }
// var obj = {};
// obj.push = Visitor.push;
// obj.push( "first","second");
// alert ( obj[0] )  //"first"
// alert ( obj.length );  //1
//
// //策略模式
// nameInput.addValidate({
//     notNull: true,
//     dirtyWords: true,
//     maxLength: 30
// })
// var validateList = {
//     notNull: function (value) {
//         return value !=='';
//     },
//     maxLength: function (value, maxlen) {
//         return value.length()> maxlen;
//     }
// }
//
// //模版方法模式
// //例子一
//
// var Life = function(){
//
// }
// Life.prototype.init = function () {
//     this.DNA();
//     this.birth();
//     this.growup();
//     this,die();
// }
//
// this.prototype.DNA = function () {
//     //dosomething
// }
//
// Life.prototype.birth = function () {
//     //空函数
// }
// Life.prototype.growup = function () {
//     //空函数
// }
// Life.prototype.die = function () {
//     //空函数
// }
//
// var Manual = function(){}
// //Manual 继承Life
// Manual.prototype = Life.prototype;
// Manual.prototype.birth = function () {
//     //do something
// }
// Manual.prototype.growup = function(){
//     //do something
// }
// Manual.prototype.die = function () {
//     //do something
// }
//
// var manual = new Manual();
// manual.init();

//例子2
//
// var GameCenter = function () {
//
// }
//
// GameCenter.prototype.init = function () {
//     this.login();
//     this.start();
//     this.end();
// }
//
// GameCenter.prototype.login = function () {
//
// }
// GameCenter.prototype.start = function () {
//     alert('game start!');
// }
// GameCenter.prototype.end = function(){
//     alert('game over!');
// }
//
// var Game = function () {
//
// }
// Game.prototype = GameCenter.prototype;
// Game.prototype.login = function () {
//     alert('斗地主游戏登录!');
// }
//
// new Game().init();
//备忘录模式
// var Page = function () {
//     var page = 1,
//         cache = {},
//         data;
//     return function (page) {
//         if (cache[page]) {
//             data = cache[page];
//             render(data);
//         } else {
//             Ajax.send('www.baidu.com', function (data) {
//                 cache[page] = data;
//                 render(data);
//             })
//         }
//     }
// }

// var hello = function () {
//     var nihao = '123';
// }
//
// hello();
// console.log(nihao);

// var regular_joe = 'regular1';
// function prison(regular_joe) {
//     var regular_joe = 'regular3';
//     console.log(regular_joe);
// }
// prison('regular2');

//一种新的构建对象的方法,自己体会


// var AA = {
//     sayAge : function () {
//         alert(this.age);
//     },
//     value : 30
// }
//
// AAA = function (name,age){
//     var prisoner = Object.create(AA);
//     prisoner.name = name;
//     prisoner.age = age;
//     return prisoner;
// }
//
// var aa = AAA('hery',25);
// var bb = AAA('hery',35);
// AA.value = 100;
// alert(bb.value);

// var closure = (function(){
//     var name = 'xiaoming';
//     var age = 25;
//     return{
//         info : function(){
//             alert(name + 'is' + age );
//         },
//         changeInfo : function(aaa){
//             age = aaa;
//             alert(age);
//         }
//     }
// })()
//
// closure.info();
// closure.changeInfo(30);
// closure.info();


// var func = function () {
//
// }
// func.prototype = {
//     constructor:func,
//     name : 'jack'
// }
//
// var a1 = new func();
//
// console.log(a1.name);
// console.log(a1.constructor);
// a1.constructor.prototype.name = 'hery';
// console.log(a1.name);

// var Vehicle = {
//     info : function(){
//         console.log(this);
//         function nihao() {
//             console.log(this)
//         }
//         setTimeout(nihao.bind(this),1000);
//     }
// }
//
// Vehicle.info();

// var car1 = Vehicle('car',4);
// console.log(this);
// console.log(this.type);
// console.log(this.wheelCount);
// var car2;
// car2.aaa = Vehicle('car',4);

//bind的用法实例
// var number = {
//     array:[3,5,10],
//     getNums : function(){
//         console.log(this.array) ;
//     }
// }
// var array = [2,3,4];
//
// var boundGetNum = number.getNums.bind(number);
// boundGetNum();
// var simGetNum = number.getNums;
// simGetNum();
// function consolelog(i){
//     console.log(i);
// }
//
// //每次调用bind就会创建一个新的函数指针,并且保持原来的函数不变化
// for(var i=0;i<10;i++){
//     setTimeout(consolelog.bind(this,i),1000);
// }

// $.ajax({
//     url:"package.json",
//     dataType:"json",
//     type:"POST",
//     data:"comment",
//     success: function(resp){
//         console.log(resp.name);
//     },
//     error: function() {
//         alert('failure');
//     }
//
// })


//观察者模式1

// var Publish = function(name){
//     this.name = name;
//     this.subscriber = [];//所有的订阅者
// }
//
// Publish.prototype.deliver = function(news){
//     var publish = this;
//     this.subscriber.forEach(function(fn){
//        fn(news,publish);//把新消息发给订阅者
//     })
//     return this;
// }
//
// Function.prototype.subscribe = function(publish){
//     var sub = this; //订阅者
//     //some方法,如果有一个返回true,整体返回true
//     var alreadyExists = publish.subscriber.some(function(fn){
//         return sub === fn;
//     })
//     !alreadyExists && publish.subscriber.push(sub);
//     return this;
// }
//
// Function.prototype.unsubscribe = function(publish){
//     var sub = this;
//     //filter函数,数组每个元素执行一个函数,如果不匹配,则删除该元素
//     publish.subscribers = publish.subscribers.filter(function(item){
//         return item !== sub;
//     })
//     return this;
// }
//
//
// var pub1 = new Publish('第一报社');
// var pub2 = new Publish('第二报社');
// var pub3 = new Publish('第三报社');
// document.getElementById('pub1').addEventListener('click',function(){
//     pub1.deliver(document.getElementById('pub11').value);
// })
// document.getElementById('pub2').addEventListener('click',function(){
//     pub2.deliver(document.getElementById('pub12').value);
// })
// document.getElementById('pub3').addEventListener('click',function(){
//     pub3.deliver(document.getElementById('pub13').value);
// })
// var sub1 = function(news){
//     document.getElementById('sub1').innerHTML += arguments[1].name + ':' + news + '\n';
// };
// var sub2 = function(news){
//     document.getElementById('sub2').innerHTML += arguments[1].name + ':' + news + '\n';
// };
// sub1.subscribe(pub1).subscribe(pub2);
// sub2.subscribe(pub1).subscribe(pub2).subscribe(pub3);


//观察者模式2
// var pubsub = {};
// (function (q){
//     var topics = {};
//     var subUid = -1;
//     q.publish = function(topic,args){
//         if(!topics[topic]){
//             return false;
//         }
//         var subscribers = topics[topic];
//         var len = subscribers? subscribers.length:0;
//         while(len--){
//             subscribers[len].func(topic,args);
//         }
//         return this;
//     }
//     q.subscribe = function(topic,func){
//         if(!topics[topic]){
//             topics[topic] = [];
//         }
//         var token = (++subUid).toString();
//         topics[topic].push({
//             token: token,
//             func: func
//         });
//         return token;
//     }
//
//     q.unsubscribe = function(token){
//         for(var m in topics){
//             if(topics[m]){
//                 for(var i = 0,j=topics[m].length;i<j;i++){
//                     if(topics[m][i] === token){
//                         topics[m].splice(i,1);
//                         return token;
//                     }
//                 }
//             }
//         }
//     }
// })(pubsub);
//
// var messageLogger1 = function(topics,data){
//     console.log("logging" + topics + ":" + data);
// }
// var messageLogger2 = function(topics,data){
//     console.log("logging2" + topics + ":" + data);
// }
//
// var subscription = pubsub.subscribe('newMessage',messageLogger1);
//
// var subscription2 = pubsub.subscribe('newMessage',messageLogger2);
//
// pubsub.publish('newMessage', 'hello');

//中介模式
//其实中介模式和观察者模式有重叠的部分。。。中介模式严格通过Mediator进行通信来实现这一目的。


//命令模式
//command模式旨在将方法调用、请求或操作封装到单一对象中，从而根据我们不同的请求对客户进行参数化和传递可供执行的方法调用。

//外观模式 -比如jquery 考虑性能问题

//工厂模式-如果对象创建过程相对复杂,这种方法比较有用

// function Car(options){
//     this.doors = options.doors || 4;
//     this.state = options.state || 'brand new';
//     this.color = options.color || 'silver';
// }
//
// function Truck(options) {
//     this.state = options.state || 'used';
//     this.wheelSize = options.wheelSize || 'large';
//     this.color = options.color || 'blue';
// }
//
// function VehicleFactory(){}
// VehicleFactory.prototype.vehicleClass = Car;
// VehicleFactory.prototype.createVehicle = function(options){
//     if(options.vehicleType === 'car'){
//         this.vehicleClass = Car;
//     }else{
//         this.vehicleClass = Truck;
//     }
//     return new this.vehicleClass(options);
// }
//
// var carFactory = new VehicleFactory();
// var car = carFactory.createVehicle({
//     vehicleType : 'car',
//     color:'yellow',
//     doors:6
// })
//
// console.log(car instanceof Car);
// console.log(car);

//Mixin为一种扩展收集功能的方式。我们定义的每个新对象都有一个原型，可以从中继承更多属性，可以为任意数量的对象实例定义属性，可以利用这一点来促进函数复用
var Car = function(settings){
    this.model = settings.model || 'no model provided';
    this.color = settings.color || 'no colour provided';
}
var Mixin = function(){}
Mixin.prototype = {
    driveForward:function(){
        console.log('driving forward');
    },
    driveBackward:function(){
        console.log('driving backward');
    }
}

//通过一个方法将现有对象扩展到另一个对象上
function augment(recevingClass,givingClass){
    if(arguments[2]){
        for(var i=2,len = arguments.length;i<len;i++){
            recevingClass.prototype[arguments[i]] = givingClass.prototype[arguments[i]];
        }
    }else{
        for(var methodName in givingClass.prototype){
            if(!recevingClass.prototype[methodName]){
                recevingClass.prototype[methodName] = givingClass.prototype[methodName];
            }
        }
    }
}

augment(Car,Mixin);
var myCar = new Car({
    model:'porshe',
    color:'red'
})
myCar.driveBackward();
myCar.driveForward();




