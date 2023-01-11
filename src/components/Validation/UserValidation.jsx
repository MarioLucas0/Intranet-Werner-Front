import * as yup from 'yup';

export const userSchema = yup.object().shape({
    email: yup.string().required().email(),
    senha: yup.string().required().min(6).max(16)
});