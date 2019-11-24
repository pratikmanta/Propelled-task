import React from 'react';
import './successStep.css';

const SuccessStep = ({ handleSteps }) => {
    return (
        <div className="animated zoomIn">
            <div className="img-content">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
                    <circle class="path circle" fill="none" stroke="#73AF55" stroke-width="6" stroke-miterlimit="10" cx="65.1" cy="65.1" r="62.1" />
                    <polyline class="path check" fill="none" stroke="#73AF55" stroke-width="6" stroke-linecap="round" stroke-miterlimit="10" points="100.2,40.2 51.5,88.8 29.8,67.5 " />
                </svg>
            </div>
            <div className="mt-3 pt-3">
                <div className="text-center">
                    <h1>Congratulations</h1>
                </div>
                <div class="card-body">
                    <h5 class=" p-4 w-50 mx-auto text-center text-dark">
                        You satisy our minimum eligibility criteria for loan processing. Please
                        complete your KYC and document verification process to complete the loan
                        application.
                    </h5>
                </div>
            </div>
            <button type="button" onClick={() => handleSteps(3)} class="btn btn-outline-dark btn-lg btn-block mt-3">Continue</button>
        </div>
    )
}

export default SuccessStep