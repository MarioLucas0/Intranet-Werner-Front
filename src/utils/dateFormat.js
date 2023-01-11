import { format, parseISO } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

export const formatDate = (date) => {
  return format(parseISO(date), "dd  'de' MMMM 'de' yyyy", {
    locale: ptBR, 
  });
};