import { ERROR_CODES } from '../../utils/constants';

// Handling errors
const getProductErrorMessages = {
  [ERROR_CODES.NOT_FOUND]: 'Produto não encontrado',
};
const getProductDefaultErrorMessage =
  'Erro ao solicitar os dados do produto. Tente novamente mais tarde';

export default function buildGetProducErrorMessage(code) {
  return getProductErrorMessages[code] || getProductDefaultErrorMessage;
}
