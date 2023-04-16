import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../index.css"
import NewReview from './NewReview';
import PocketBase from 'pocketbase';
import {useState, useEffect} from "react";


function Salary(){

    const [records, setRecords] = useState(null);
    const pb = new PocketBase('http://127.0.0.1:8090');
  
    useEffect(() => {
      const fetchData = async () => {
        const result = await pb.collection('levels').getFullList('drqzs77u3fz02fh', {
          expand: 'field',
        });
        setRecords(result);
      };
      fetchData();
    }, []);
  
    if (!records) {
      return <div>Loading...</div>;
    }

    const listSalary = records.map((record) => (
        <>
           {record.expand && record.expand.field && record.expand.field.map((position) => 
              (
                <tr>
                  <td>{record.company}</td>
                  <td>{position.position}</td>
                  <td>{position.salary}</td>
                  <td>{position.rating}</td>
                </tr>
  
              ))}
        </>
        
    ));

    return (
        // records.map((record) => (   
        // <li class="list-group-item">
        //     <img src={record.img} width="50" height="50"/>
        //     <p>{record.company}</p>
        //     {record.expand && record.expand.field && record.expand.field.map((position) => 
        //     (
        //       <p key={position.id}>
                
        //         <strong>Position:</strong> {position.position} 
        //         <strong> Salary:</strong> {position.salary}
        //       </p>

        //     )
            
        //     )}   
        // </li>
        // ))

        <table class="table">
          <thead>
            <tr>
              <th>Company</th>
              <th>Position</th>
              <th>Salary</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            {listSalary}
          </tbody>
        </table>

    )

}

export default Salary;