import { createTheme } from '@mui/material';
import { z } from 'zod';

import { ERROR_CODES } from '../../utils/constants';

// Form Validation
export const authorizeAccessValidationSchemaEN = z.object({
  userId: z.string({ required_error: 'Please select an email' }).trim(),
  expiresAt: z.coerce.date({
    errorMap: () => ({
      message: 'Please enter a date',
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

export const toastSuccessMessageEN =
  'Authorization to the course granted successfully!';

// Error Handling
const createUserCourseErrorMessagesEN = {
  [ERROR_CODES.NOT_FOUND]: 'Invalid data',
  [ERROR_CODES.UNAUTHORIZED]: 'User not authenticated',
  [ERROR_CODES.FORBIDDEN]: 'User not authorized',
  [ERROR_CODES.CONFLICT]: 'The user already has access to the course',
};
const createUserCourseDefaultErrorMessageEN =
  'Error authorizing course access to the user. Please try again later';

export function buildCreateUserCourseErrorMessageEN(err) {
  const code = err?.response?.data?.httpCode;
  return (
    createUserCourseErrorMessagesEN[code] ||
    createUserCourseDefaultErrorMessageEN
  );
}

// Get users for select
const getUsersErrorMessagesEN = {
  [ERROR_CODES.BAD_REQUEST]: 'Invalid data',
};
const getUsersIdDefaultErrorMessageEN =
  'An error occurred while listing users. Please try again later';
export function buildGetUsersErrorMessageEN(err) {
  const code = err?.response?.data?.httpCode;
  return getUsersErrorMessagesEN[code] || getUsersIdDefaultErrorMessageEN;
}
