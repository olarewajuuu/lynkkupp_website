
import { useDropzone } from 'react-dropzone';
import { Grid, Box, Typography } from '@mui/material';
import uploadImg2 from "../../src/assets/Images/AddRoom.svg";

const FileUpload2 = ({ file, setFile }) => {
    const { getRootProps, getInputProps } = useDropzone({
        onDrop: (acceptedFiles) => setFile(acceptedFiles[0]),
        multiple: false,
        accept: 'image/*, application/pdf',
    });

    return (
        <Grid className="flex justify-center items-center w-[218px]  border-[2px] h-[130px] border-[#494949] rounded-[6px]">
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
                        <img src={uploadImg2} alt="" />
                    </Typography>
                )}
            </Box>
        </Grid>
    );
};

export default FileUpload2;
