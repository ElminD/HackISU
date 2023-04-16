import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Modal} from 'react-bootstrap';


function CompanyCard(prop) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // const listItems = prop.record.map((el) => (
  //   <div class="container p-0">
  //       <div class="card px-4">
  //           <div class="row gx-3">
  //               <h1>{el.company}</h1>
  //               {el.expand && el.expand.field && el.expand.field.length > 0 && (
  //               <strong>
  //                 <div>
  //                   Avg salary:{' '}
  //                   {el.expand.field.reduce((sum, position) => sum + position.salary, 0) / el.expand.field.length}
  //                 </div>
  //                 <div>
  //                   Avg rating:{' '}
  //                   {el.expand.field.reduce((sumRating, position) => sumRating + position.rating, 0) / el.expand.field.length}
  //                 </div>
  //               </strong>
                
  //             )}
  //           </div>
  //       </div>
  //   </div>

  // ));


  return (
    <>
      <Button class="btn btn-light btn-block btn-md" variant="primary"  onClick={handleShow}>
        More Information
      </Button>
      

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{prop.company}</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <div class="container p-0">
            <div class="card px-4">
              <div class="row gx-3">
                <h1>{prop.record.company}</h1>
                  {prop.record.expand && prop.record.expand.field && prop.record.expand.field.map((position) => (
                    <p key={position.id}>
                      <strong>Review:</strong> {position.review} 

                      <p>posted by {position.user}</p><span>{position.rating} / 5</span>
                      <hr/>
                    </p>
                  )
                  )}
            </div>
        </div>
    </div>

        </Modal.Body>
        <Modal.Footer>

            <Button variant="primary" type="submit" onClick={handleClose}>
                Close
            </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CompanyCard;