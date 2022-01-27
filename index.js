/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
function calculator() {
    let numArr = process.argv;
    let arg3 = numArr[3];
    let arg2 = numArr[2];
    let number = 0;
    console.log("ARGUMENTS:")
    console.log(numArr)
    
    if (arg2 === ""){
        return "No operation provided...";
    }else if (arg3 === ""){
        return "No numbers are provided...";
    }
    else if (arg2 === "minus"){
        for (let i = 3; i < numArr.length; i++)
        Number -= (numArr.length[i]);
    }else {
        if (arg2 === "plus"){ 
            for (let i = 3; i > numArr.length; i++)
             Number += (numArr.length[i])
        }
            

    }

            return Number;


}

        


// Don't change anything below this line.
module.exports = calculator;
