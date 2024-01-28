import bcrypt from 'bcryptjs';


export const generateEncryptedPassword = (password) => {
    var salt = bcrypt.genSaltSync(10);
    var newEncryptedPassword = bcrypt.hashSync(password, salt);
    return newEncryptedPassword;
}