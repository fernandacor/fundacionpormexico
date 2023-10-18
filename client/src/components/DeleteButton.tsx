import React from 'react';
import { useDelete, useRecordContext } from 'react-admin';
import Trash from '../svgs/Trash';

interface DeleteButtonProps {
    resource: string;
    record: any;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ resource, record }) => {
    const [deleteOne, { isLoading, error }] = useDelete();

    if (!record) return null;

    const handleClick = () => {
        deleteOne(
            resource,
            { id: record.id }
        );
    }

    if (error) { return <p>ERROR</p>; }

    return <button disabled={isLoading} onClick={handleClick}><Trash /></button>;
};

export default DeleteButton;
