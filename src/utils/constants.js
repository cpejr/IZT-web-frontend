// Supported error response status codes and names
export const ERROR_CODES = {
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  INTERNAL_SERVER: 500,
};

export const ERROR_NAMES = {
  BAD_REQUEST: 'BadRequest',
  UNAUTHORIZED: 'Unauthorized',
  FORBIDDEN: 'Forbidden',
  NOT_FOUND: 'NotFound',
  VALIDATION_ERROR: 'ValidationError',
  INTERNAL_SERVER: 'InternalServerError',
};

// Binary data supported configuration
export const DOCUMENTS_CONFIG = {
  allowedMimeTypes: ['text/plain', 'application/pdf'],
  sizeLimitInMB: 15,
  filesQuantityLimit: 3,
};
export const PICTURES_CONFIG = {
  allowedMimeTypes: ['image/jpeg', 'image/pjpeg', 'image/png', 'image/gif'],
  sizeLimitInMB: 5,
  filesQuantityLimit: 4,
};
export const VIDEOS_CONFIG = {
  allowedMimeTypes: [
    'video/x-flv',
    'video/mp4',
    'video/MP2T',
    'video/3gpp',
    'video/quicktime',
    'video/x-msvideo',
    'video/x-ms-wmv',
  ],
  sizeLimitInMB: 500,
};
