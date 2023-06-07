export default function formatDate({ value, local = 'pt-BR', options = {} }) {
  return new Intl.DateTimeFormat(local, options).format(new Date(value));
}
