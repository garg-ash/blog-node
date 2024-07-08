import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Link from "react-router-dom"

function Messages({data, Sno, handleDelete}){
    return(
        <>
            <tr>
                <td>{Sno}</td>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.message}</td>
            </tr>
            <td >
                <Link onClick={(e) => handleDelete(e, data._id)}><DeleteIcon /></Link>
                <Link ><EditIcon /></Link>
            </td>
        </>
    )
}
export default Messages