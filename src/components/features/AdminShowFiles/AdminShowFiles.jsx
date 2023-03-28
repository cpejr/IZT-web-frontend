import {
  CloseCircleOutlined,
  EditOutlined,
  CaretUpOutlined,
  CaretDownOutlined,
} from '@ant-design/icons';
import PropTypes from 'prop-types';

import { Container, File } from './Styles';

export default function AdminShowFiles({
  register,
  errors,
  documentsFieldArray,
  buttonColor,
}) {
  const {
    fields: fieldsDocuments,
    remove: removeDocument,
    update: updateDocument,
  } = documentsFieldArray;

  return (
    <div>
      {fieldsDocuments?.map(({ file: [document], id }, index) => {
        const name = `documents.${index}.file`;
        const { onChange, ref } = register(name);
        const url = URL.createObjectURL(document);
        return (
          <Container key={id}>
            <div>
              <button type="button">
                <CaretUpOutlined style={{ backgroundColor: 'transparent' }} />
              </button>
              <button type="button">
                <CaretDownOutlined />
              </button>
            </div>
            <File href={url} target="_blank" rel="noopener noreferrer">
              {document.name}
            </File>
            <p>{errors?.[name]?.message}</p>
            <label
              htmlFor={index}
              style={{
                cursor: 'pointer',
                color: { buttonColor },
              }}
            >
              <EditOutlined style={{ fontSize: '1.5em' }} />
              <input
                id={index}
                accept="application/pdf, application/vnd.ms-excel"
                type="file"
                style={{ display: 'none' }}
                name={name}
                ref={ref}
                onChange={(e) => {
                  updateDocument(index, { file: e.target.files });
                  onChange(e);
                }}
              />
            </label>
            <button
              type="button"
              style={{
                all: 'unset',
                cursor: 'pointer',
                color: { buttonColor },
              }}
              onClick={() => removeDocument(index)}
            >
              <CloseCircleOutlined style={{ fontSize: '1.4em' }} />
            </button>
          </Container>
        );
      })}
    </div>
  );
}

AdminShowFiles.propTypes = {
  register: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  documentsFieldArray: PropTypes.object.isRequired,
};
