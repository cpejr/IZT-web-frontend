import { useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useQueryClient } from '@tanstack/react-query';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { FiSave } from 'react-icons/fi';
import { TailSpin } from 'react-loader-spinner';
import { toast } from 'react-toastify';

import { useUpdateCategory } from '../../../hooks/query/categories';
import { useGlobalLanguage } from '../../../stores/globalLanguage';
import {
  Container,
  Label,
  Input,
  ModalContent,
  ModalButton,
  Form,
  ErrorMessage,
} from './Styles';
import { TranslateText } from './translations';
import {
  buildUpdateCategoryErrorMessage,
  updateCategoryValidationSchema,
} from './utils';
import {
  buildUpdateCategoryErrorMessageDE,
  updateCategoryValidationSchemaDE,
} from './utilsDE';
import {
  buildUpdateCategoryErrorMessageEN,
  updateCategoryValidationSchemaEN,
} from './utilsEN';

export default function ModalEditCategory({ category, close }) {
  const { globalLanguage } = useGlobalLanguage();
  const translations = TranslateText({ globalLanguage });

  const [isPending, setIsPending] = useState(false); // Important for modal loading
  const queryClient = useQueryClient();

  const { mutate: updateCategory } = useUpdateCategory({
    onSuccess: () => {
      Promise.all([
        queryClient.invalidateQueries({
          queryKey: ['categories'],
        }),
        queryClient.invalidateQueries({
          queryKey: ['category'],
        }),
      ]);

      toast.success(translations.categoryEdited);
      close();
    },
    onError: (err) => {
      if (globalLanguage === 'PT') {
        const errorMessage = buildUpdateCategoryErrorMessage(err);
        toast.error(errorMessage);
      } else if (globalLanguage === 'EN') {
        const errorMessage = buildUpdateCategoryErrorMessageEN(err);
        toast.error(errorMessage);
      } else {
        const errorMessage = buildUpdateCategoryErrorMessageDE(err);
        toast.error(errorMessage);
      }
      setIsPending(false);
    },
  });

  let validationSchema;

  if (globalLanguage === 'PT') {
    validationSchema = updateCategoryValidationSchema;
  } else if (globalLanguage === 'EN') {
    validationSchema = updateCategoryValidationSchemaEN;
  } else {
    validationSchema = updateCategoryValidationSchemaDE;
  }

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(validationSchema),
  });
  const onSubmit = (data) => {
    updateCategory({ _id: category?._id, newCategoryData: data });
    setIsPending(true);
  };

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
            defaultValue={category?.name}
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
                <p>{translations.saveEditions}</p>
              </>
            )}
          </ModalButton>
        </ModalContent>
      </Form>
    </Container>
  );
}

ModalEditCategory.propTypes = {
  category: PropTypes.object.isRequired,
  close: PropTypes.func.isRequired,
};
