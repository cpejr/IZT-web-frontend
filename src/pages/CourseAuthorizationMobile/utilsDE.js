import { createTheme } from '@mui/material';
import { z } from 'zod';

import { ERROR_CODES } from '../../utils/constants';

// Form Validation
export const authorizeAccessValidationSchemaDE = z.object({
  userId: z
    .string({ required_error: 'Bitte wählen Sie eine E-Mail aus' })
    .trim(),
  expiresAt: z.coerce.date({
    errorMap: () => ({
      message: 'Bitte geben Sie ein Datum ein',
    }),
  }),
});

// MUI DatePicker theme
export const themeDatePicker = createTheme({
  palette: {
    primary: {
      main: '#000000',
      light: '#000000',
    },
    text: {
      primary: '#000000',
      secondary: '#000000',
      disabled: '#000000',
    },
    action: {
      active: '#000000',
      hover: '2#03699',
      selected: '#203699',

      disabled: '#000000',
    },
    background: {
      default: '#fff',
    },
    divider: '#203699',
  },
  typography: {
    fontFamily: 'Montserrat',
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          paddingTop: 5,
          paddingBottom: 5,
          height: 40,
          fontSize: 15,
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          fontSize: 20,
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontSize: 13,
          fontWeight: 500,
        },
      },
    },
    MuiPickersDay: {
      styleOverrides: {
        root: {
          fontSize: 12,
          fontWeight: 500,
        },
      },
    },
    MuiPickersCalendarHeader: {
      styleOverrides: {
        label: {
          fontSize: 12,
          fontWeight: 500,
        },
      },
    },
  },
});

// Toast Success
export const toastSuccessMessageDE =
  'Zugriff auf den Kurs erfolgreich autorisiert!';

// Error Handling
const createUserCourseErrorMessagesDE = {
  [ERROR_CODES.NOT_FOUND]: 'Ungültige Daten',
  [ERROR_CODES.UNAUTHORIZED]: 'Benutzer nicht authentifiziert',
  [ERROR_CODES.FORBIDDEN]: 'Benutzer nicht autorisiert',
  [ERROR_CODES.CONFLICT]: 'Der Benutzer hat bereits Zugriff auf den Kurs',
};
const createUserCourseDefaultErrorMessageDE =
  'Fehler beim Autorisieren des Kurszugriffs für den Benutzer. Bitte versuchen Sie es später erneut';

export function buildCreateUserCourseErrorMessageDE(err) {
  const code = err?.response?.data?.httpCode;
  return (
    createUserCourseErrorMessagesDE[code] ||
    createUserCourseDefaultErrorMessageDE
  );
}

// Get users for select
const getUsersErrorMessagesDE = {
  [ERROR_CODES.BAD_REQUEST]: 'Ungültige Daten',
};
const getUsersIdDefaultErrorMessageDE =
  'Beim Auflisten der Benutzer ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut';
export function buildGetUsersErrorMessageDE(err) {
  const code = err?.response?.data?.httpCode;
  return getUsersErrorMessagesDE[code] || getUsersIdDefaultErrorMessageDE;
}
