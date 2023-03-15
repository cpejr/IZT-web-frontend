import React from 'react';
import { FaDownload } from 'react-icons/fa';
import { FileListWrapper, FileItem } from './Styles';
import File1 from '../../../assets/productPage/files/F1.pdf';
import File2 from '../../../assets/productPage/files/F2.pdf';
import File3 from '../../../assets/productPage/files/F3.pdf';

const files = [
  {
    name: 'Documento 1',
    route: File1,
  },
  {
    name: 'Documento 2',
    route: File2,
  },
  {
    name: 'Documento 3',
    route: File3,
  },
];

export default function FilesList() {
  return (
    <FileListWrapper>
      {files.map((file) => (
        <FileItem key={file.name}>
          <FaDownload color="#900603" size="24px" />
          <a href={file.route} target="_blank" rel="noopener noreferrer">
            {file.name}
          </a>
        </FileItem>
      ))}
    </FileListWrapper>
  );
}
