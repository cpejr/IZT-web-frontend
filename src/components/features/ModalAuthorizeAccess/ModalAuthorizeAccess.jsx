import { useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { ThemeProvider } from '@mui/material/styles';
import PropTypes from 'prop-types';
import { Controller, useForm } from 'react-hook-form';

import { FormSelect } from '../../common';
import {
  Container,
  Form,
  Label,
  AccessExpirationContainer,
  ModalContent,
  ModalButton,
  ErrorMessage,
  Date,
} from './Styles';
import { modalAuthorizeAccessValidationSchema, themeDatePicker } from './utils';

export const emails = [
  { label: 'thiagofraga@cpejr.com.br', value: 'thiagofraga@cpejr.com.br' },
  { label: 'amandaalves@cpejr.com.br', value: 'amandaalves@cpejr.com.br' },
  { label: 'joaopiraja@cpejr.com.br', value: 'joaopiraja@cpejr.com.br' },
];

export default function ModalAuthorizeAccess({ close, data }) {
  const [isPending, setIsPending] = useState(false); // Important for modal loading

  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: zodResolver(modalAuthorizeAccessValidationSchema),
  });
  const onSubmit = (authorizedUser) => {
    console.log(authorizedUser);
    setIsPending(true);
    close();
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <ModalContent>
          <div>
            <Label>Email:</Label>
            <FormSelect
              name="email"
              control={control}
              errors={errors}
              data={emails}
              placeholder="Selecione o email"
              filterOption={(input, option) =>
                option?.key?.toLowerCase()?.includes(input?.toLowerCase())
              }
              showSearch
              style={{ width: '40rem' }}
              size="large"
            />
          </div>
          <div>
            <Label>Validade do acesso:</Label>
            <AccessExpirationContainer>
              <ThemeProvider theme={themeDatePicker}>
                <Controller
                  control={control}
                  name="accessExpiration"
                  render={({ field: { onChange, onBlur } }) => (
                    <Date
                      onChange={onChange}
                      onBlur={onBlur}
                      format="DD/MM/YYYY"
                      disablePast
                      slotProps={{
                        textField: {
                          error: !!errors.accessExpiration,
                        },
                      }}
                    />
                  )}
                />
              </ThemeProvider>
            </AccessExpirationContainer>
            <ErrorMessage>{errors?.accessExpiration?.message}</ErrorMessage>
          </div>

          <ModalButton disabled={isPending} type="submit">
            <p>{isPending ? 'Carregando...' : '+ Autorizar'}</p>
          </ModalButton>
        </ModalContent>
      </Form>
    </Container>
  );
}

ModalAuthorizeAccess.propTypes = {
  close: PropTypes.func.isRequired,
  data: PropTypes.object,
};

ModalAuthorizeAccess.defaultProps = {
  data: {},
};
