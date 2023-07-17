
export function emailChecker(email){
    if (email.length < 6) {
        return "email length must Be 6 or More"
    }
} 

export function passwordChecker(email){
    if (email.length < 6) {
        return "Password length must Be 6 or More"
    }
}

export function fullNameChecker(name){
    if (name.length < 6) {
        return "Full Name length must Be 6 or More"
    }
}

export const signUpChecker = (model) => {
    const {email, password, fullName} = model
    if (emailChecker(email)) {
        throw new Error(emailChecker(email))
    }
    if (passwordChecker(password)) {
        throw new Error(passwordChecker(password))
    }
    if (fullNameChecker(fullName)) {
        throw new Error(fullNameChecker(fullName))
    }
}

export const signInChecker = (model) => {
    const {email, password} = model
    console.log(model, "===================")
    if (emailChecker(email)) {
         throw new Error(emailChecker(email))
    }
    if (passwordChecker(password)) {
        throw new Error(passwordChecker(password))
    }
}