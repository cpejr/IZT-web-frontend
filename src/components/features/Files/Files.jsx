import React from 'react';

const files = [
  {
    name: 'File 1',
    route: '../../assets/Files/F1.pdf',
  },
  {
    name: 'File 2',
    route: '../../assets/Files/F2.pdf',
  },
  {
    name: 'File 3',
    route: '../../assets/Files/F3.pdf',
  },
];

function FileList() {
  return (
    <Files>
      {files.map((file) => (
        <div key={file.name}>
          <a href={file.route} download>
            {file.name}
          </a>
        </div>
      ))}
    </Files>
  );
}
export default FileList;
