let hora1 = prompt('escribe el tiempo inicial');
let hora2 = prompt('escribe el tiempo final');
let horaInicial=hora1
let horaFinal=hora2

document.write('inicial '+horaInicial+'</br>')
document.write('final '+horaFinal+'</br>')

function StringListToVector(list){
    vector=[];
    for(let i=0;i<list.length;i++){
        vector.push(Number(list[i]));
    }
    return vector;
}
function calculateMilisex(hora){
    let list1=hora.split(':');
    let list2=list1[2].split('.')
    list1.pop();list1.push(list2[0],list2[1]);
    list1=StringListToVector(list1);
    return list1[3]+1000*list1[2]+1000*60*list1[1]+1000*60*60*list1[0]
}
function calculateHora(milisex){
    let list1=[];
    list1[3]=milisex%1000
    list1[2]=Math.floor(milisex/1000)%60
    list1[1]=Math.floor(Math.floor(milisex/1000)/60)%60
    list1[0]=Math.floor(Math.floor(Math.floor(milisex/1000)/60)/60)
    return list1[0]+':'+list1[1]+':'+list1[2]+'.'+list1[3]
}
function addTimes(hora1,hora2){
    return calculateHora(calculateMilisex(hora1)+calculateMilisex(hora2))
}
function subtractTimes(hora1,hora2){
    let list1=hora1.trim().split(' ');let list2=hora2.trim().split(' ');
    if(list1.length==1||list2.length==1){
        let number1=calculateMilisex(list1[0]);let number2=calculateMilisex(list2[0])
        if(number1>=number2){
            return calculateHora(number1-number2);
        }
        number1=calculateMilisex(addTimes(list1[0],'24:00:00.000'))
        return calculateHora(number1-number2)
    }
    let list3=hora1.split(':');let list4=hora2.split(':');
    if(list3[0]=='12')list1[1]=list1[1]=='pm'?'am':'pm';
    if(list4[0]=='12')list2[1]=list2[1]=='pm'?'am':'pm';

    if(list1[1]!=list2[1])return subtractTimes(addTimes(list1[0],'12:00:00.000'),list2[0]);
    return subtractTimes(list1[0],list2[0])
}

function represent(hora1){
    let hora=hora1.split(':');
    let hora2=hora[2].split('.');
    hora.pop();hora.push(hora2[0],hora2[1]);
    function b(n){let a='s';a=n>1?a:'';a=n!=0?a:'s';return a;}
    document.write(hora[0]+' hora'+b(hora[0])+' '+hora[1]+' minuto'+b(hora[1])+' '+
    hora[2]+' segundo'+b(hora[2])+' y '+hora[3]+' milisegundo'+b(hora[3]));
}
document.write(subtractTimes(horaFinal,horaInicial)+'</br>')
represent(subtractTimes(horaFinal,horaInicial));
//represent(addTimes(hora1,hora2));