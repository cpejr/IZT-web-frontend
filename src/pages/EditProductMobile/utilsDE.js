import { z } from 'zod';

import { ERROR_CODES } from '../../utils/constants';

// Form Validation
export const editProductValidationSchemaDE = z.object({
  name: z
    .string()
    .nonempty('Bitte geben Sie den Produktnamen ein')
    .max(20, 'Der Produktname darf maximal 20 Zeichen lang sein'),
  category: z.string({
    required_error: 'Die Produktkategorie-ID ist erforderlich',
  }),
  description: z
    .string()
    .nonempty('Bitte geben Sie eine Produktbeschreibung ein')
    .max(150, 'Die Produktbeschreibung darf maximal 150 Zeichen lang sein'),
  advantages: z
    .string()
    .nonempty('Bitte geben Sie die Vorteile des Produkts ein')
    .max(150, 'Die Produktvorteile dürfen maximal 150 Zeichen lang sein'),
  pictures: z
    .array(
      z.object({
        file: z.instanceof(File).or(
          z.object({
            name: z.string(),
            mimeType: z.string(),
            url: z.string(),
            key: z.string(),
          })
        ),
      })
    )
    .nonempty('Sie müssen mindestens ein Bild hochladen')
    .transform((pictures) => pictures.map(({ file }) => file)),
    documents: z
    .array(z.object({ file: z.instanceof(File) }))
    .default([])
    .transform((documents) => documents.map(({ file }) => file))
    .optional(),
});

// Toast Success

export const toastSuccessMessageDE = 'Produkt erfolgreich aktualisiert!';

// Error Handling
const editProductErrorMessagesDE = {
  [ERROR_CODES.BAD_REQUEST]: 'Ungültige Daten',
  [ERROR_CODES.UNAUTHORIZED]: 'Benutzer nicht authentifiziert',
  [ERROR_CODES.FORBIDDEN]: 'Benutzer nicht autorisiert',
  [ERROR_CODES.CONFLICT]: 'Das Produkt existiert bereits',
};
const editProductDefaultErrorMessageDE =
  'Fehler beim Erstellen des Produkts. Bitte versuchen Sie es später erneut';

export function buildEditProductErrorMessageDE(err) {
  const code = err?.response?.data?.httpCode;
  return editProductErrorMessagesDE[code] || editProductDefaultErrorMessageDE;
}
