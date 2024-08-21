export const emailIsValid = email => {

    const pattern = new RegExp('^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,3}$')
    
    return pattern.test(email)

}