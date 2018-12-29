const ObjectManipulation = {

}
ObjectManipulation.validate = obj => {
     const values = Object.values(obj);
    let isNum = true;
    for (let i = 0 ; i < values.length ; i++){
        const currentNum = Number(values[i]);
        if (typeof(currentNum) !== 'number' || isNaN(currentNum) === true){
            isNum = false;
        }
    }
    return isNum;
}

 ObjectManipulation.inputObj = (obj) =>{
    const keys = Object.keys(obj);
    let input = {};
for (let i = 0 ; i < keys.length; i++){
  input[keys[i]] = obj[keys[i]];
}
return input;
}
ObjectManipulation.ObjStrToNum = (obj) => {
    const keys = Object.keys(obj);
    let numberObj = {};
    for (let i = 0 ; i < keys.length ; i++){
        numberObj[keys[i]] = parseInt(obj[keys[i]]);
    }
    return numberObj;
}
ObjectManipulation.productString = (obj) =>{
    resultStr = '';
    values = Object.values(obj);
    for (let i = 0 ; i < values.length ; i++){
        if (i === values.length -1){
            resultStr += `${values[i]}`;
        }
        else resultStr += `${values[i]} * `;
    }
    return resultStr;
}
ObjectManipulation.sumStr = (obj) =>{
    resultStr = '';
    values = Object.values(obj);
    for (let i = 0 ; i < values.length ; i++){
        if (i === values.length -1){
            resultStr += `${values[i]}`;
        }
        else resultStr += `${values[i]} + `;
    }
    return resultStr;
}
module.exports = ObjectManipulation;
