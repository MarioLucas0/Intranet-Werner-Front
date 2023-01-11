import * as yup from 'yup';

export const postSchema = yup.object().shape({
    titulo: yup.string().required(),
    link: yup.string().url(),
    descricao: yup.string()
});