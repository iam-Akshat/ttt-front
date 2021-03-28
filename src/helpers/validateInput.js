const validateInput = (input) =>{
    const reg = new RegExp('^[0-9,]*$')
    if(reg.test(input)){
        return true
    }
    return false
}
export default validateInput;