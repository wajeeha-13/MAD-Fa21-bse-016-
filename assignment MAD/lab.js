/**1st march */

/**arrow function */
const sum_num_arrow=(x,y)=>
{
    return x+y;
};
/**arrow functuon with one parameter */
const func_1param=(x)=>
{
    console.log(x);
};
/**arrow function with single return statement */
const func_return=(x,y)=>x+y;
const func_obj=() =>
{return
    { name: "wajeeha";}
};
console.log(func_obj());
/**check it will not give the required output
 * const func_obj=() =>
{
     name: "wajeeha";
};
console.log(func_obj()); */
console.log(a);
var a=6;
console.log(a);
/** try this 
 * console.log(a);
var a=6;*/
called_func();
function called_func()
{
    console.log("hello world");
} 
/**rest operator */
function rest_spam(...params)
{
console.log(params);
}
rest_spam(1,2);
rest_spam(1,2,3,4,5);

/**spread operator*/
let arr1=[1,2,3];
let arr2=[4,5,6];
let arr3=[...arr1,...arr2];
console.log(arr3);
console.log(...arr3);

/**destructure */
const names=["wajeeha" , "amna", "kinza"];
const [x, ,y]=names;
console.log(names);

let student={name:"wajeeha", reg: 16, uni:"CUI"};
let {name, uni,reg}=student;
console.log(reg);