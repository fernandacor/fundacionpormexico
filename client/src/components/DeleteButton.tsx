import React from "react";
import { useDelete, useNotify, useRedirect } from "react-admin";
import { TrashSvg } from "./Svgs";

interface DeleteButtonProps {
  resource: string;
  record: any;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ resource, record }) => {
  const [deleteOne, { isLoading, error }] = useDelete();
  const notify = useNotify();
  const redirect = useRedirect();

  if (!record) return null;

  const handleClick = () => {
    deleteOne(resource, { id: record.id })
      .then(() => {
        notify("Elemento eliminado");
        redirect(`/${resource}`);
      })
      .catch((error) => {
        notify(`Error al eliminar: ${error.message}`, error);
      });
  };

  if (error) {
    return <p>ERROR</p>;
  }

  return (
    <button disabled={isLoading} onClick={handleClick}>
      <TrashSvg />
    </button>
  );
};

export default DeleteButton;
