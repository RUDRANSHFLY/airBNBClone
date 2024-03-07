import bcrypt from 'bcryptjs';


export const generateEncryptedPassword = (password) => {
    var salt = bcrypt.genSaltSync(10);
    var newEncryptedPassword = bcrypt.hashSync(password, salt);
    return newEncryptedPassword;
}


export const checkPassword = async (realPasssword, encryptedPassword) => {
    const isPasswordCorrect = await bcrypt.compare(realPasssword, encryptedPassword);
    return isPasswordCorrect;
}