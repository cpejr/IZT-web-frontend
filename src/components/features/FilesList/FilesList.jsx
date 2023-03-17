import { FaDownload } from 'react-icons/fa';
import { FileListWrapper, FileItem } from './Styles';

export default function FilesList({ files = [] }) {
  return (
    <FileListWrapper>
      {files?.map((file) => (
        <FileItem key={file.name}>
          <FaDownload color="#900603" size="24px" />
          <a href={file.url} target="_blank" rel="noopener noreferrer">
            {file.name}
          </a>
        </FileItem>
      ))}
    </FileListWrapper>
  );
}

FilesList.defaultProps = {
  files: [],
};

FilesList.propTypes = {
  files: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
};
