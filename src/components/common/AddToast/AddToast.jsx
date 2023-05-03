import { StyledContainer } from './Styles';

export default function AddToast() {
  return (
    <StyledContainer
      position="bottom-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      draggable
      theme="light"
    />
  );
}
