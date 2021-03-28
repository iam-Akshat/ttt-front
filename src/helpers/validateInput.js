const validateInput = (input) =>{
    const reg = new RegExp('^[1-9,]*$')
    if(reg.test(input)){
        return true
    }
    return false
}
export default validateInput;