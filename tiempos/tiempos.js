let hora1 = prompt('escribe el primer valor');
let hora2 = prompt('escribe el segundo valor');
function getElements(hora){
    let list1=hora.split(':');
    let list2=list1[2].split('.');
    let list=[];
    list.push(Number(list1[0]));list.push(Number(list1[1]));list.push(Number(list2[0]));
    list.push(Number(list2[1]));
    return list;
}
modOps={sum(max,a,b){
    let sum=a+b;
    let list=[];list.push(sum%max);list.push((sum-sum%max)/max);
    return list;
},sub(max,a,b){
    let sub=a-b;let n=(max-sub-(max-sub)%max)/max;
    n=a-b!=0?n:0;n=Math.abs(a-b)!=max?n:-Math.abs(a-b)/(a-b);
    let list=[];list.push(sub+n*max);list.push(-n);
    return list;
}}
function subtractTimes(a,b){
    let list1=getElements(a);let list2=getElements(b);
    let result=[];
    let mili=modOps.sub(1000,list1[3],list2[3]);
    let secs=modOps.sub(60,list1[2],list2[2]-mili[1]);
    let min=modOps.sub(60,list1[1],list2[1]-secs[1]);
    result.push(list1[0]-list2[0]+min[1]);
    result.push(min[0]);result.push(secs[0]);
    result.push(mili[0]);
    return result;
}
function addTimes(a,b){
    let list1=getElements(a);let list2=getElements(b);
    let result=[];
    let mili=modOps.sum(1000,list1[3],list2[3]);
    let secs=modOps.sum(60,list1[2],list2[2]+mili[1]);
    let min=modOps.sum(60,list1[1],list2[1]+secs[1]);
    result.push(list1[0]+list2[0]+min[1]);
    result.push(min[0]);result.push(secs[0]);
    result.push(mili[0]);
    return result;
}
function represent(hora){
    function b(n){let a='s';a=n>1?a:'';a=n!=0?a:'s';return a;}
    document.write(hora[0]+' hora'+b(hora[0])+' '+hora[1]+' minuto'+b(hora[1])+' '+
    hora[2]+' segundo'+b(hora[2])+' y '+hora[3]+' milisegundo'+b(hora[3]));
}
represent(subtractTimes(hora1,hora2));
//represent(addTimes(hora1,hora2));