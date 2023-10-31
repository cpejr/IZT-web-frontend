import { useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useQueryClient } from '@tanstack/react-query';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { FiSave } from 'react-icons/fi';
import { TailSpin } from 'react-loader-spinner';
import { useMediaQuery } from 'react-responsive';
import { toast } from 'react-toastify';

import { useCreateCategory } from '../../../hooks/query/categories';
import { useGlobalLanguage } from '../../../stores/globalLanguage';
import {
  Container,
  Form,
  Label,
  Input,
  ModalContent,
  ModalButton,
  ErrorMessage,
} from './Styles';
import { TranslateText } from './translations';
import {
  buildCreateCategoryErrorMessage,
  createCategoryValidationSchema,
} from './utils';
import {
  buildCreateCategoryErrorMessageDE,
  createCategoryValidationSchemaDE,
} from './utilsDE';
import {
  buildCreateCategoryErrorMessageEN,
  createCategoryValidationSchemaEN,
} from './utilsEN';

export default function ModalCreateCategory({ close }) {
  const { globalLanguage } = useGlobalLanguage();
  const translations = TranslateText({ globalLanguage });

  const [isPending, setIsPending] = useState(false); // Important for modal loading
  const isSmallScreen = useMediaQuery({ maxWidth: 700 });
  const queryClient = useQueryClient();

  const { mutate: createCategory } = useCreateCategory({
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['categories'],
      });

      toast.success(translations.toastMessage);
      close();
    },
    onError: (err) => {
      if (globalLanguage === 'PT') {
        const errorMessage = buildCreateCategoryErrorMessage(err);
        toast.error(errorMessage);
      } else if (globalLanguage === 'EN') {
        const errorMessage = buildCreateCategoryErrorMessageEN(err);
        toast.error(errorMessage);
      } else {
        const errorMessage = buildCreateCategoryErrorMessageDE(err);
        toast.error(errorMessage);
      }
      setIsPending(false);
    },
  });

  let validationSchema;

  if (globalLanguage === 'PT') {
    validationSchema = createCategoryValidationSchema;
  } else if (globalLanguage === 'EN') {
    validationSchema = createCategoryValidationSchemaEN;
  } else {
    validationSchema = createCategoryValidationSchemaDE;
  }

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(validationSchema),
  });
  const onSubmit = (data) => {
    createCategory(data);
    setIsPending(true);
  };

  if (isSmallScreen) close();

  const errorMessage = errors?.name?.message;

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <ModalContent>
          <Label htmlFor="name">{translations.categoryName}</Label>
          <Input
            id="name"
            name="name"
            placeholder={translations.typeCategoryName}
            error={!!errorMessage}
            {...register('name')}
          />
          {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
          <ModalButton disabled={isPending} type="submit">
            {isPending ? (
              <>
                <TailSpin
                  height="15"
                  width="15"
                  color="white"
                  ariaLabel="tail-spin-loading"
                  radius="5"
                />
                <p>{translations.loading}</p>
              </>
            ) : (
              <>
                <FiSave size={25} />
                <p>{translations.createCategory}</p>
              </>
            )}
          </ModalButton>
        </ModalContent>
      </Form>
    </Container>
  );
}

ModalCreateCategory.propTypes = {
  close: PropTypes.func.isRequired,
};
