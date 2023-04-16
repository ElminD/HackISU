import React,{ useState, useEffect } from 'react';
import PocketBase from 'pocketbase';
import CompanyCard from './CompanyCard';

const Companie = () => {
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

  return (
    <div class="flex p-2 bg-secondary bg-gradient">
      {records.map((record) => (
        <div key={record.id} className="card col-sm-4 mb-sm-3 mx-auto p-4 bg-dark text-light overflow-auto" >
          <img src={record.img} className="card-img-top" alt="..." width="100" height="100" />
          <div className="card-body">
            <h3 className="card-title"><strong>{record.company}</strong></h3>
            {/* {record.expand && record.expand.field && record.expand.field.map((position) => (
                <p key={position.id}>
                  <strong>Position:</strong> {position.position}
                  <strong> Salary:</strong> {position.salary}
                </p>
              ))} */}
              
            {record.expand && record.expand.field && record.expand.field.length > 0 && (
                <div>
                  <div>
                  Average salary: ${''}
                  {record.expand.field.reduce((sum, position) => sum + position.salary, 0) / record.expand.field.length}
                  </div>
                  <div>
                  Average rating: ⭑{' '}
                  {record.expand.field.reduce((sumRating, position) => sumRating + position.rating, 0) / record.expand.field.length}
                  </div>
                </div>
                
              )}
          </div>
          <CompanyCard record = {record}/>
        </div>

      ))}
    </div>
  );
};


// const Companie = () => {
  
//   const [records, setRecords] = useState(null);
  
//   const [salary, setSalary] = useState(0);
//   const [count, setCount] = useState(0);

//   const pb = new PocketBase('http://127.0.0.1:8090');

//   useEffect(() => {
//     const fetchData = async () => {
//       const result = await pb.collection('levels').getFullList('drqzs77u3fz02fh', {
//         expand: 'field'
//       });
//       setRecords(result);
//     };
//     fetchData();
//   }, []);

  
//   // useEffect(() => {
//   //   const salary = () => {
      
//   //   }
//   // })
  

//   if (!records) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       {records.map((record) => (
//         <div key={record.id} className="card col-sm-4 mb-3 mb-sm-0">
//           <img src={record.img} className="card-img-top" alt="..." width="100" height="100"/>
//           <div className="card-body">
//             <h5 className="card-title">{record.company}</h5>
//             {record.expand && record.expand.field && record.expand.field.map((position) => 
//             // {
              
//             // }
//             (
//               <p key={position.id}>
                
//                 <strong>Position:</strong> {position.position} 
//                 <strong> Salary:</strong> {position.salary}
//               </p>

//             )
            
//             )}
//             {/*<strong>Avg salary: {salary / count}</strong> */}

//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }
/*const Companie = () => {

  

    const [record, setRecord] = useState(null);

    const pb = new PocketBase('http://127.0.0.1:8090');

    const getRecord = async() => {
        const record1 = await pb.collection('levels').getFullList('drqzs77u3fz02fh', {
          expand: 'field'
        });
        setRecord(record1);
    }

    const companyList = record.map((el) => (
      <div>
        
         <div class="card col-sm-4 mb-3 mb-sm-0">
          <img src={record.img} class="card-img-top" alt="..." width="100" height="100"/>
          <div class="card-body">
              <h5 class="card-title">{record.company}</h5>


              <p>expected = "levels", result = {record.collectionName}</p>
              <p>expected = "front desk", result = {record.expand["field"][0].position}, code = record.expand["field"][0].position</p>
              <p>expected = "software engineer", result = {record.expand["field"][1].position}, code = record.expand["field"][1].position</p>
              
             <h4>${record.salary}</h4>
              <p class="card-text">{record.position}</p>
              <p class="card-text">{record.review}</p>
              <p class="card-text">Posted by {record.user}</p>
              <span class="badge text-bg-success">{record.tag}</span><span>⭑ {record.rating}/5</span>
          </div>
        </div>
      </div>
    ))

    if (!record) {
        getRecord();
        return <div>Loading...</div>
    }

    return (
      <>
        { getRecord }
        { companyList }
      </>
    );
}*/

export default Companie;
