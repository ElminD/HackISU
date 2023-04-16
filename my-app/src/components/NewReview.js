import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Modal} from 'react-bootstrap';
import PocketBase from 'pocketbase';



function NewReview() {
  const [show, setShow] = useState(false);

  //const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [user, setUser] = useState('');
  const [company, setCompany] = useState('');
  const [salary, setSalary] = useState(0);
  const [position, setPosition] = useState('');
  const [reviews, setReviews] = useState('');
  const [rating, setRating] = useState(0);



  const handleUserChange = (event) => {
    const value = event.target.value;
    setUser(value);
  };

  const handleCompanyChange = (event) => {
    const value = event.target.value;
    setCompany(value);
  };

  const handleSalaryChange = (event) => {
    const value = event.target.value;
    setSalary(value);
  };

  const handlePositionChange = (event) => {
    const value = event.target.value;
    setPosition(value);
  };

  const handleReviewsChange = (event) => {
    const value = event.target.value;
    setReviews(value);
  };

  const handleRatingChange = (event) => {
    const value = event.target.value;
    setRating(value);
  };


  const pb = new PocketBase('http://127.0.0.1:8090');

  const handleClose = async (event) => {
    event.preventDefault();

    try {

      // const record = await pb.collection("records").create({
      //   id: 12345678987654321,
      //   user: user, 
      //   rating: rating, 
      //   position: position, 
      //   salary: salary, 
      //   reviews: reviews, 
      //   logo: ""
        
      // })

      const updatedRecord = {
        user:user,
        rating:rating,
        position:position,
        salary:salary,
        reviews:reviews,
        logo:""
      }

      const newRecord = await pb.collection("records").create(updatedRecord);

      // const query = '"user"="John" '

      const query = '"user"="' + user + '","rating"="' + rating + '","position"="' + position + '","salary"="' + salary + '","reviews"="' + reviews + '"';
      
    
      // console.log(query)

      // pb.collection("records").update(event.id, newRecord)

      const getRecord = await pb.collection('records').getFirstListItem(query);

      const getId = getRecord.id;

      // const getLevels = await pb.collection('levels').getOne(getId);

      // getId = getLevels.id;

      const getArr = await pb.collection('levels').getOne("drqzs77u3fz02fh");
      getArr = getArr["field"];
      getArr = [...getArr, getId];
      
      const updateLevels = await pb.collection('levels').update("drqzs77u3fz02fh", {
        field: getArr,
      })



      // let field = []
      // field = [...field, record]

      // const expand = {"field":field}


      // const expand = await pb.collection("records").create({
      //   field: [...record, record]
      // })

      // const levels = await pb.collection("levels").create({
      //   company: company, 
      //   img: "",
      //   exapnd: {expand}, 
      //   tag: ""
        
      // })
      

      setUser("");
      setCompany("");
      setSalary(0);
      setPosition("");
      setReviews("");
      setRating(0);
    } catch (e) {
      console.log("error dumbass")
      console.log(e)
    }


  }



  return (
    <>
      <Button class="btn btn-light btn-block btn-md" variant="secondary"  onClick={handleShow}>
        Write Review Option
      </Button>
      

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New Review</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div class="container p-0">
        <div class="card px-4">
            <div class="row gx-3">
            <div class="col-12">
                    <div class="d-flex flex-column">
                        <p class="text mb-1">Username</p>
                        <input class="form-control mb-3" type="text" placeholder="Johnnny" onChange={handleUserChange}/>
                    </div>
                </div>
                <div class="col-12">
                    <div class="d-flex flex-column">
                        <p class="text mb-1">Company Name</p>
                        <input class="form-control mb-3" type="text" placeholder="Google" onChange={handleCompanyChange}/>
                    </div>
                </div>
                <div class="col-12">
                    <div class="d-flex flex-column">
                        <p class="text mb-1">Salary ($)</p>
                        <input class="form-control mb-3" type="text" placeholder="120,000" onChange={handleSalaryChange}/>
                    </div>
                </div>
                <div class="col-12">
                    <div class="d-flex flex-column">
                        <p class="text mb-1">Position</p>
                        <input class="form-control mb-3" type="text" placeholder="Silly Goose" onChange={handlePositionChange}/>
                    </div>
                </div>
                <div class="col-12">
                    <div class="d-flex flex-column">
                        <p class="text mb-1">Review</p>
                        <input class="form-control mb-3" type="text" placeholder="I love it here" onChange={handleReviewsChange}/>
                    </div>
                </div>
                <div class="col-6">
                    <div class="d-flex flex-column">
                        <p class="text mb-1">Rating (out of 5)</p>
                        <input class="form-control mb-3" type="text" placeholder="4.1" onChange={handleRatingChange}/>
                    </div>
                </div>
                
                
            </div>
        </div>
    </div>

        </Modal.Body>
        <Modal.Footer>

            <Button variant="primary" type="submit" onClick={handleClose}>
                Submit
            </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default NewReview;