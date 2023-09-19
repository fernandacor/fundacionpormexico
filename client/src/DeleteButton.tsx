import { useDelete, useRecordContext } from 'react-admin';

const DeleteButton = () => {
    const record = useRecordContext();
    const [deleteOne, { isLoading, error }] = useDelete();
    const handleClick = () => {
        deleteOne(
            'likes',
            { id: record.id , previousData: record }
        );
    }
    if (error) { return <p>ERROR</p>; }
    return <button disabled={isLoading} onClick={handleClick}>Delete</button>;
};

export default DeleteButton;