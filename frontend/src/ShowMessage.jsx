import React, { useEffect, useState } from "react";
import Messages from "./Messages";

function ShowMessage(){
    const [data, setData] = useState([])

    useEffect(()=>{
       async function fetchData(){
        const response = fetch("http://localhost:8080/showData");
         const results = (await response).json() 
         setData(results) 
    }
    fetchData()
        
    }, [])
    return(
        <>
        <h3>Saved Message</h3>
        <table>
            <thead>
                <tr>
                    <th>S.No</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>S.No</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {data.length>0 ? (
                    data.map((dt, index)=>{
                        return(
                            <Messages
                            key={index}
                            data={dt}
                            sno = {sno++}
                            handleDelete={handleDelete}
                            />
                        )
                    })
                ):(
                    <tr>
                        <th>No Message to Show</th>
                    </tr>
                )}
            </tbody>
        </table>
        </>
    )
}
export default ShowMessage;