const validateInput = (input) =>{
    const reg = new RegExp('([a-zA-z %-])')
    if(reg.test(input)){
        return false
    }
    return true
}
export default validateInput;