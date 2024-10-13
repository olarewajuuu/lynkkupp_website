
import { useDropzone } from 'react-dropzone';
import { Grid, Box, Typography } from '@mui/material';
import uploadImg from "../../src/assets/Images/uploadimg.svg";


const FileUpload1 = ({ file, setFile }) => {
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => setFile(acceptedFiles[0]),
    multiple: false,
    accept: 'image/*, application/pdf', // Allow images and PDFs
  });

  return (
    <Grid className="flex justify-center items-center w-full border-[2px] h-[327px] border-[#494949] rounded-[6px]">
    <Box
      {...getRootProps()}
      sx={{
        // border: '2px dashed #ccc',
        borderRadius: '8px',
        padding: '20px',
        textAlign: 'center',
        cursor: 'pointer',
        marginBottom: '16px',
      }}
    >
      <input {...getInputProps()} />
      {file ? (
        <Typography variant="body1" color="primary">
          File selected: {file.name}
        </Typography>
      ) : (
        <Typography variant="body1">
          <img src={uploadImg} alt="" className='py-[90px] px-[120px] md:py-[100px] md:px-[400px] w-[]'/>
        </Typography>
      )}
    </Box>
    </Grid>
  );
};

export default FileUpload1;
