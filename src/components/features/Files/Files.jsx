import React from 'react';
import { FileListWrapper, FileItem } from './Styles';
import File1 from '../../../assets/Files/F1.pdf';
import File2 from '../../../assets/Files/F2.pdf';
import File3 from '../../../assets/Files/F3.pdf';

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

function FileList() {
  return (
    <FileListWrapper>
      {files.map((file) => (
        <FileItem key={file.name}>
          <a href={file.route} target="_blank" rel="noopener noreferrer">
            {file.name}
          </a>
        </FileItem>
      ))}
    </FileListWrapper>
  );
}

export default FileList;
