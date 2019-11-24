import React from 'react';

const Step3 = ({ handleSteps }) => {
    return (
        <div class="animated zoomIn">
            <div class="row mt-4 pt-4 d-flex justify-content-center">
                <h2 class="w-75 p-2 text-dark">
                    Is Applicant's Aadhar linked to a Mobile Number ?
                </h2>
            </div>
            <div class="row mt-3 pt-3">
                <input name="aadhar-option" type="radio" class="form-control col-sm-9 col-md-6" />
                <h4 class="col-sm-9 col-md-6 d-flex align-items-flex-start">
                    Yes, Insta - KYC! Takes Just 3 Minutes
                </h4>
            </div>
            <div class="row mt-3 pt-3">
                <input name="aadhar-option" type="radio" class="form-control col-sm-9 col-md-6" />
                <h4 class="col-sm-9 col-md-6 d-flex align-items-flex-start">No</h4>
            </div>
            <div class="row mt-4 pt-4">
                <div class="col-md-6 mb-3">
                    <h5>Applicant's Aadhar linked Mobile No</h5>
                </div>
                <div class="col-md-6 mb-3">
                    <input type="text" class="form-control" placeholder="" required={true} />
                </div>
            </div>
            <div class="row mt-4 pt-4">
                <button type="button" class="btn btn-outline-dark btn-lg btn-block">Proceed to KYC information</button>
            </div>
        </div>
    )
}

export default Step3;