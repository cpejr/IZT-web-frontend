import React from 'react';
import { DataInput } from '../../common/DataInput/DataInput';
import { Container, Form, DataEntry, FormColumn, SaveChanges } from './Styles';

function ChangeUserDataModal() {
  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <DataEntry>
          <FormColumn>
            <DataInput
              label="Empresa: "
              name="company"
              placeholder="Nome da empresa"
              register={register}
              errors={errors}
              type="text"
            />
            <DataInput
              label="Nome: "
              name="name"
              placeholder="Nome"
              register={register}
              errors={errors}
              type="text"
            />
            <DataInput
              label="Sobrenome: "
              name="surname"
              placeholder="Sobrenome"
              register={register}
              errors={errors}
              type="text"
            />
            <DataInput
              label="Cargo: "
              name="role"
              placeholder="Nome do cargo"
              register={register}
              errors={errors}
              type="text"
            />
          </FormColumn>
          <FormColumn>
            <DataInput
              label="País: "
              name="country"
              placeholder="Nome do país"
              register={register}
              errors={errors}
              type="text"
            />
            <DataInput
              label="Estado: "
              name="state"
              placeholder="Nome do estado"
              register={register}
              errors={errors}
              type="text"
            />
            <DataInput
              label="Cidade: "
              name="city"
              placeholder="Nome da cidade"
              register={register}
              errors={errors}
              type="text"
            />
            <DataInput
              label="Endereço: "
              name="address"
              placeholder="Endereço"
              register={register}
              errors={errors}
              type="text"
            />
          </FormColumn>
          <FormColumn>
            <DataInput
              label="E-mail: "
              name="email"
              placeholder="email@email.com"
              register={register}
              errors={errors}
              type="text"
            />
            <DataInput
              label="Senha: "
              name="password"
              placeholder="********"
              register={register}
              errors={errors}
              type="password"
            />
            <DataInput
              label="Confirme sua senha: "
              name="confirmPassword"
              placeholder="********"
              register={register}
              errors={errors}
              type="password"
            />
          </FormColumn>
        </DataEntry>
        <SaveChanges type="submit" name="Criar conta" relativeWidth="70%" />
      </Form>
    </Container>
  );
}

export default ChangeUserDataModal;
