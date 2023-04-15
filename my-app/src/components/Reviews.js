import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css"

function Reviews() {
  return (
    <div className="Reviews">
        <div class="row" style="display: inline-block">

            <div class="form-group col-md-10">
                Company Name
            </div>

            <div class="form-group col-md-10">
                Overall Review
            </div>

            <button class="form-group col-md-10" type="button">
                Write Review Option
            </button>
        
        </div>

        <div>
            <button type="button">Filter all the reviews from people</button>
        </div>


    </div>
  );
}

export default Reviews;