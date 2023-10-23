import { z } from 'zod';

import { ERROR_CODES } from '../../utils/constants';

// Form Validation
export const createProductValidationSchemaDE = z.object({
  name: z
    .string()
    .nonempty('Bitte geben Sie den Produktnamen ein')
    .max(20, 'Der Produktname darf maximal 20 Zeichen lang sein'),
  category: z.string({ required_error: 'Bitte wählen Sie eine Kategorie aus' }), // Hier müssen wir nur die Kategorie-ID übergeben
  description: z
    .string()
    .nonempty('Bitte geben Sie eine Produktbeschreibung ein')
    .max(150, 'Die Produktbeschreibung darf maximal 150 Zeichen lang sein'),
  advantages: z
    .string()
    .nonempty('Bitte geben Sie die Vorteile des Produkts ein')
    .min(5, 'Mindestens 5 Zeichen erforderlich')
    .max(150, 'Die Produktvorteile dürfen maximal 150 Zeichen lang sein'),
  pictures: z
    .array(z.object({ file: z.instanceof(File) }))
    .nonempty('Sie müssen mindestens ein Foto einfügen')
    .transform((pictures) => pictures.map(({ file }) => file)),
  documents: z
    .array(z.object({ file: z.instanceof(File) }))
    .default([])
    .transform((documents) => documents.map(({ file }) => file)),
});

// Toast Success

export const toastSuccessMessageDE = 'Produkt erfolgreich erstellt!';

// Error Handling
const createProductErrorMessagesDE = {
  [ERROR_CODES.BAD_REQUEST]: 'Ungültige Daten',
  [ERROR_CODES.UNAUTHORIZED]: 'Benutzer nicht authentifiziert',
  [ERROR_CODES.FORBIDDEN]: 'Benutzer nicht autorisiert',
  [ERROR_CODES.CONFLICT]: 'Das Produkt wurde bereits erstellt',
};
const createProductDefaultErrorMessageDE =
  'Fehler beim Erstellen des Produkts. Bitte versuchen Sie es später erneut';

export function buildCreateProductErrorMessageDE(err) {
  const code = err?.response?.data?.httpCode;
  return (
    createProductErrorMessagesDE[code] || createProductDefaultErrorMessageDE
  );
}

const getCategoriesErrorMessagesDE = {
  [ERROR_CODES.BAD_REQUEST]: 'Ungültige Daten',
};
const getCategoriesIdDefaultErrorMessageDE =
  'Ein Fehler ist aufgetreten beim Auflisten der Kategorien. Bitte versuchen Sie es später erneut';
export function buildGetCategoriesErrorMessageDE(err) {
  const code = err?.response?.data?.httpCode;
  return (
    getCategoriesErrorMessagesDE[code] || getCategoriesIdDefaultErrorMessageDE
  );
}
