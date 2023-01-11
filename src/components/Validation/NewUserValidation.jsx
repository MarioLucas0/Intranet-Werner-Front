import * as yup from 'yup';

export const NewUserSchema = yup.object().shape({
    email: yup.string().required().email(),
    nome: yup.string().required().min(1).max(100),
    senha: yup.string().required().min(6).max(16),
    confirmarSenha: yup.string().oneOf([yup.ref("senha"), null])
});