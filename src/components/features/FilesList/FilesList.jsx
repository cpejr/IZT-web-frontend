import React from 'react';
import { FaDownload } from 'react-icons/fa';
import { useGetFiles } from '../../../hooks/query/files';
import { FileListWrapper, FileItem } from './Styles';

export default function FilesList() {
  const { data: files, error, isLoading } = useGetFiles();
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;
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
