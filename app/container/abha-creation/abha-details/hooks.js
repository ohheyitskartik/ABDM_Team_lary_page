import { useMutation } from 'react-query';
import { uploadFile } from '../../../api';

export const useUploadFiles = ({ healthId, name, mobileNumber, fileLink }) => {
    const { mutate: uploadGeneratedReportMutate } = useMutation(
        'upload-generated-report',
        () =>
            uploadFile({
                healthId,
                name: `${name.first} ${name.last}`,
                mobileNumber,
                fileUrl: fileLink,
            }),
        {
            onSuccess: () => {
                console.log('successfully uploaded');
            },
        },
    );
    return {
        uploadGeneratedReportMutate,
    };
};
