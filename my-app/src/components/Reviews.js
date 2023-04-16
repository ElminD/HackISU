import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../index.css"
import NewReview from './NewReview';
import PocketBase from 'pocketbase';
import {useState, useEffect} from "react";
import {useParams} from 'react-router-dom';


function Reviews() {
    console.log(useParams());
    let { company } = useParams();
    var CompanyParam = useParams();

    const [records, setRecords] = useState(null);
    const pb = new PocketBase('http://127.0.0.1:8090');

    useEffect(() => {
        const fetchData = async () => {
        const result = await pb.collection('levels').getOne(company, {
            expand: 'field',
        });
        setRecords(result);
        };
        fetchData();
    }, []);

    if (!records) {
        return (
             <div class="flex-container bg-dark text-light">
        <div class="dropdown-center">
            <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Select Company
            </button>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="/reviews/fi6fe9vfzzk1u8r">John Deere</a></li>
                <li><a class="dropdown-item" href="/reviews/drqzs77u3fz02fh">Workiva</a></li>
                <li><a class="dropdown-item" href="/reviews/Allies">Source Allies</a></li>
            </ul>
        </div>
            

            <div className="avgReview">
                Overall Review 
                <span class="badge rounded-pill text-bg-warning">⭑ 5/5</span>
            </div>

            <div className="writeReview">
                {/* <button className='writeButton'>Write Review Option</button> */}
                <NewReview />
            </div>
            </div>
            );
      }


  return (

    <div className="Reviews">
        <div class="flex-container bg-dark text-light">
        <div class="dropdown-center">
            <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Select Company
            </button>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="/reviews/fi6fe9vfzzk1u8r">John Deere</a></li>
                <li><a class="dropdown-item" href="/reviews/drqzs77u3fz02fh">Workiva</a></li>
                <li><a class="dropdown-item" href="/reviews/Allies">Source Allies</a></li>
            </ul>
        </div>
            

            <div className="avgReview">
                Overall Review 
                <span class="badge rounded-pill text-bg-warning">⭑ 5/5</span>
            </div>

            <div className="writeReview">
                {/* <button className='writeButton'>Write Review Option</button> */}
                <NewReview />
            </div>
        
        </div> 
        <div class="row">
        {records.expand.field.map((review) => (
            <div class="col-sm-6 mb-3 mb-sm-0">
            <div class="card" >
                <div class="card-body">
                    <h5 class="card-title">{review.user}</h5> 
                    <span class="badge rounded-pill text-bg-warning">⭑{review.rating}/5</span>
                    <h6 class="card-subtitle mb-2 text-body-secondary">{review.position}</h6>
                    <p class="card-text">{review.reviews}</p>
                </div>
            </div>
            </div>
            
        ))}
        
        </div>
      
      
    </div>


  );
}

export default Reviews;

// export const usePocketBase = () => {
//     const pb = new PocketBase('http://127.0.0.1:8090');


//     const getRecord = async() => {
//         const record1 = await pb.collection('levelsfyi').getOne('ugnhimcj8kbf8yz');
//     }

//     return getRecord
// }



//console.log(getRecord.toString())
    // const showReview = Records.map((el) => (
    
    //     <div class="card col-sm-4 mb-3 mb-sm-0">
    //         <img src="../../res/ISULogo.png" class="card-img-top" alt="..." width="100" height="100"/>
    //             <div class="card-body">
    //                 <h5 class="card-title">{el.company}</h5>
    //                 <h4>${el.salary}</h4>
    //                 <p class="card-text">{el.position}</p>
    //                 <p class="card-text">{el.review}</p>
    //                 <p class="card-text">Posted by {el.user}</p>
    //                 <span class="badge text-bg-success">{el.tag}</span><span>⭑ {el.rating}/5</span>
    //          </div>
    //       </div>
    //   ));