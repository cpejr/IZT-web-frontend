import { ERROR_CODES } from '../../../utils/constants';

export const playerConfig = {
  file: {
    attributes: {
      controlsList: 'nodownload', // deactive download button
      autoPlay: true, // Autoplay the video
    },
  },
};

// Error Handling
const getVideoErrorMessages = {
  [ERROR_CODES.NOT_FOUND]: 'Vídeo não encontrado. Tente novamente mais tarde',
  [ERROR_CODES.FORBIDDEN]: 'Você não tem acesso a esse recurso',
};
const getVideoDefaultErrorMessage =
  'Erro ao acessar o vídeo. Tente novamente mais tarde';

export function buildGetVideoErrorMessage(err) {
  const code = err?.response?.data?.httpCode;
  return getVideoErrorMessages[code] || getVideoDefaultErrorMessage;
}
