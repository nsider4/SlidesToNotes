import React, { useState, useRef } from 'react';
import { Container, Box, Alert } from '@mui/material';
import useFileUpload from '../../utils/useFileUpload';
import UploadPrompt from './uploads/UploadPrompt';
import FileInput from './uploads/FileInput';
import UploadButton from './uploads/UploadButton';
import GeneratedNotes from './notes/GeneratedNotes';
import RemoveImagesCheckbox from './notes/checkboxes/RemoveImagesCheckbox';
import DownloadOptions from './notes/DownloadOptions';
import CopyNotesButton from './notes/CopyNotesButton';

const UploadComponent = () => {
    const {
        file,
        notes,
        error,
        loading,
        isNotesGenerated,
        isFileUploaded,
        removeImages,
        imageFormat,
        handleFileChange,
        handleDrop,
        handleDragOver,
        handleImageFormatChange,
        handleSubmit,
        handleRemoveFile,
        handleRemoveImagesChange,
    } = useFileUpload();

    const [showDownloadOptions, setShowDownloadOptions] = useState(false);
    const notesRef = useRef(null);

    const controlsSection = (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: 'auto',
                backgroundColor: '#37474f',
                borderRadius: 8,
                padding: 2,
                margin: 2,
                paddingBottom: 7,
                marginTop: 5,
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
                order: 1,
                height: '100%',
                '@media (max-width: 786px)': {
                    width: '100%',
                    margin: '20px 0',
                    padding: '40px 0',
                    order: 0,
                },
            }}
        >
            <RemoveImagesCheckbox
                removeImages={removeImages}
                handleRemoveImagesChange={handleRemoveImagesChange}
                sx={{ marginBottom: 1 }}
            />
            <DownloadOptions
                fileName={file?.name?.split('.')[0] || 'metadata'}
                showDownloadOptions={showDownloadOptions}
                setShowDownloadOptions={setShowDownloadOptions}
                removeImages={removeImages}
                imageFormat={imageFormat}
                handleImageFormatChange={handleImageFormatChange}
                notes={notes}
                sx={{ marginBottom: 2 }}
            />
            <CopyNotesButton notesRef={notesRef} sx={{ marginBottom: 2 }} />
        </Box>
    );

    const uploadSection = (
        <Box
            className="upload-section"
            sx={{
                width: isFileUploaded || isNotesGenerated ? '60%' : '50%',
                transition: 'width 0.3s ease',
                backgroundColor: '#37474f',
                maxWidth: isFileUploaded || isNotesGenerated ? "auto" : '40%',
                borderRadius: isFileUploaded || isNotesGenerated ? 8 : 0,
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
                padding: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                flexGrow: 1,
                '@media (max-width: 786px)': {
                    width: '90%',
                    maxWidth: '100%',
                },
            }}
        >
            <UploadPrompt file={file} />
            <FileInput
                file={file}
                isFileUploaded={isFileUploaded}
                handleFileChange={handleFileChange}
                handleRemoveFile={handleRemoveFile}
            />
            <Box sx={{ mt: 3 }}>
                <UploadButton
                    file={file}
                    isFileUploaded={isFileUploaded}
                    loading={loading}
                    handleSubmit={handleSubmit}
                />
                {isNotesGenerated && <GeneratedNotes notes={notes} error={error} notesRef={notesRef} />}
                {error && <Alert severity="error" sx={{ mt: 2 }}>{error}</Alert>}
            </Box>
        </Box>
    );

    return (
        <Container
            maxWidth={false}
            sx={{
                mt: 4,
                display: 'flex',
                justifyContent: 'center',
                gap: 2,
                width: '100%',
                flexDirection: 'row',
                '@media (max-width: 786px)': {
                    flexDirection: 'column',
                },
            }}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
        >
            {isFileUploaded && controlsSection}
            {uploadSection}
        </Container>
    );
};

export default UploadComponent;