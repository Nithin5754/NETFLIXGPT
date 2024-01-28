

export const validation=(email,password)=>{
  if(!email.trim() || !password.trim()) {
    return "empty space";
}

const validateEmail=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
const validatePassword=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)
if(!validateEmail) return "invalid email"
if(!validatePassword) return "invalid password"

}