module.exports = function check(str, bracketsConfig) {
    let stack = [];
    let indicate = 0;
    let indicate_for_7 = 0;
    let indicate_for_8 = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === '(' || str[i] === '[' || str[i] === '{' || str[i] === '1' || str[i] === '3' || str[i] === '5' || str[i] === '|' && indicate === 0 || str[i] === '7' && indicate_for_7 === 0 || str[i] === '8' && indicate_for_8 === 0) {
            stack.push(str[i]);
            if(str[i] === '|'){indicate = 1;}
            if(str[i] === '7'){indicate_for_7 = 1;}
            if(str[i] === '8'){indicate_for_8 = 1;}
        }
        else {
            let last = stack.pop();
            let close_bracket = '';

            for(let ii = 0; ii < bracketsConfig.length ; ii++){
                if (bracketsConfig[ii][0] === last){close_bracket = bracketsConfig[ii][1];}
            }

            if (str[i] !== close_bracket) {return false}
            else{
                if (str[i] === '|'){indicate = 0}
                if (str[i] === '7'){indicate_for_7 = 0}
                if (str[i] === '8'){indicate_for_8 = 0}
            }
        }
    }
        if (stack.length !== 0) {return false};

    return true;
}

//const config6 = [['1', '2'], ['3', '4'], ['5', '6'], ['7', '7'], ['8', '8']];
//check('111115611111111222288888822225577877778775555666677777777776622222',config6);
/*module.exports = *//*function check(str, bracketsConfig) {
    let stack = [];

    for (let i = 0; i < str.length; i++) {
        if (str[i] === '(' || str[i] === '[' || str[i] === '{' ) {
            stack.push(str[i]);
        }
        else {
            let last = stack.pop();
            let close_bracket = '';
            for(let ii = 0; ii < bracketsConfig.length ; ii++){
                if (bracketsConfig[ii][0] === last){
                    close_bracket = bracketsConfig[ii][1];
                    alert(close_bracket);
                }
            }

            if (str[i] !== close_bracket) {return false};
        }
    }
        if (stack.length !== 0) {return false};

    return true;
}

const config1 = [['(', ')']];
check('()',config1);*/