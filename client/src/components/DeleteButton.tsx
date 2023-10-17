import React from 'react';
import { useDelete, useRecordContext } from 'react-admin';
import Trash from '../svgs/Trash';

interface DeleteButtonProps {
    resource: string;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ resource }) => {
    const record = useRecordContext();
    const [deleteOne, { isLoading, error }] = useDelete();

    const handleClick = () => {
        deleteOne(
            resource,
            { id: record.id, previousData: record }
        );
    }

    if (error) { return <p>ERROR</p>; }

    return <button disabled={isLoading} onClick={handleClick}><Trash /></button>;
};

export default DeleteButton;
