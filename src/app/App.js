import React from 'react';
import './App.css';
import { Container } from 'react-bootstrap';

import axios from 'axios'
import Step2 from '../steps/Step2';
import Stepper from 'react-stepper-horizontal'
import SuccessStep from '../successStep/SuccessStep';
import Step3 from '../steps/Step3';


var stepTitles = [{title: 'Loan-Details'}, {title: 'Applicant Details'}, {title: 'Co-Applicant Details'}, {title: 'Applicant KYC'}]

class App extends React.Component {
  
  constructor() {
    super()
    this.state = {
      step: 0,
      success:false,
      checked:true,
      disabled: true,
      panNumber: '',
      name: '',
      age: '',
      profession: '',
      earning: '',
      company: '',
      income: '',
      curr_emi: ''
    }
  }

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handlePanChange = (e) => {
    if (e.target.value) {
      this.setState({ panNumber: e.target.value })
    }
    else {
      this.setState({ panNumber: '' })
    }
  }

  getPanData = () => {
    const { panNumber } = this.state
    axios.post("https://pp.propelld.com/api/hack/2019/verification/pan/fetch", {
      PANNumber: panNumber
    })
      .then(res => {
        console.log('Res', res)
      })
      .catch(err => {
        console.log(err, 'error')
      })
  }

  handleRadioChange = (e) => {
    if(e.target.value === '1') {
      this.setState({ step: 1, checked:false }) 
    }
    if (e.target.value === '0') {
      this.setState({ step: 0, checked: true })
    } 
  }

  handleSteps = (currStep) => {
    console.log('curr',currStep)
    if(currStep === 'success'){
      this.setState({ success: true })
    }
    else if(currStep === 3) {
      this.setState({ step: currStep, success:false })
    }
    this.setState({ step: currStep })
  }

  renderMainForm = () => {
    
    const { panNumber } = this.state;
    return (
      <div className="mt-2 animated fadeIn">
        <div class="row mt-3 pt-2">
          <div class="col-md-6 mb-3">
            <h4>Pan No</h4>
          </div>
          <div class="col-md-6 mb-3">
            <input type="text" class="form-control" placeholder="" value={panNumber} required={true} onChange={this.handlePanChange} onBlur={this.getPanData} />
          </div>
        </div>
        <div class="row mt-3 pt-2">
          <div class="col-md-6 mb-3">
            <h4>Name</h4>
          </div>
          <div class="col-md-6 mb-3">
            <input type="text" class="form-control" placeholder="" value="" disabled={this.state.disabled} />
          </div>
        </div>
        <div class="row mt-3 pt-2">
          <div class="col-md-6 mb-3">
            <h4>Age</h4>
          </div>
          <div class="col-md-6 mb-3">
            <input type="text" name="age" class="form-control on" onChange={this.handleInput} />
          </div>
        </div>
        <div class="row mt-3 pt-2">
          <div class="col-md-6 mb-3">
            <h4>Profession</h4>
          </div>
          <div class="col-md-6 mb-3">
            <input type="text" name="profession" class="form-control" onChange={this.handleInput} />
          </div>
        </div>
        <div class="row mt-3 pt-2">
          <div class="col-md-6 mb-3">
            <h4>Earning</h4>
          </div>
          <div class="col-md-6 mb-3">
            <input type="text" name="earning" class="form-control" onChange={this.handleInput} />
          </div>
        </div>
        <div class="row mt-3 pt-2">
          <div class="col-md-6 mb-3">
            <h4>Company</h4>
          </div>
          <div class="col-md-6 mb-3">
            <input type="text" name="company" class="form-control" onChange={this.handleInput} />
          </div>
        </div>
        <div class="row mt-3 pt-2">
          <div class="col-md-6 mb-3">
            <h4>Monthly Income</h4>
          </div>
          <div class="col-md-6 mb-3">
            <input type="text" name="income" class="form-control" onChange={this.handleInput} />
          </div>
        </div>
        <div class="row mt-3 pt-2">
          <div class="col-md-6 mb-3">
            <h4>Current EMI </h4>
          </div>
          <div class="col-md-6 mb-3">
            <input type="text" name="curr_emi" class="form-control" onChange={this.handleInput} />
          </div>
        </div>
        <button type="button" class="btn btn-outline-dark btn-lg btn-block mt-3" >Check Eligibility</button>
      </div>
    )
  }

  renderCoapplicantForm = () => {
    const { panNumber } = this.state;
    
    return (
      <div className="animated slideInUp mt-3">
        <div class="row mt-2 pt-2">
          <div class="card-body">
            <h5 class="bg-secondary w-50 float-right text-center p-2 text-light border rounded">
              We will be needing a Co-Applicant for your loan application in next step
            </h5>
          </div>
        </div>
        <div class="row mt-2 pt-2">
          <div class="col-md-6 mb-3">
            <h4>Pan No</h4>
          </div>
          <div class="col-md-6 mb-3">
            <input type="text" class="form-control" placeholder="" value={panNumber} required={true} onChange={this.handlePanChange} onBlur={this.getPanData} />
          </div>
        </div>
        <div class="row mt-2 pt-2">
          <div class="col-md-6 mb-3">
            <h4>Name</h4>
          </div>
          <div class="col-md-6 mb-3">
            <input type="text" class="form-control" placeholder="" disabled={this.state.disabled} />
          </div>
        </div>
        <div class="row mt-2 pt-2 mb-4 pb-4">
          <div class="col-md-6 mb-3">
            <h4>Age</h4>
          </div>
          <div class="col-md-6 mb-3">
            <input type="text" name="age" class="form-control on" onChange={this.handleInput} />
          </div>
        </div>
        <button type="button" onClick={() => this.handleSteps(2)} class="btn btn-outline-dark btn-lg btn-block">Proceed to Co-applicant information</button>
      </div>
    )
  }
    renderRadioBox = () => 
      <div class="row mt-4">
        <div class="col-md-6 mb-3">
          <h4>Student is Earning</h4>
        </div>
        <div class="col d-flex align-items-center">
          <div class="col-md-6 mb-3">
            <h5>Earning</h5>
            <input type="radio" name="emp_status" value="0" checked={this.state.checked} onChange={this.handleRadioChange} class="form-control" />
          </div>
          <div class="col-md-6 mb-3">
            <h5>Not Earning</h5>
            <input type="radio" name="emp_status" value="1" onChange={this.handleRadioChange} class="form-control" />
          </div>
        </div>
      </div>


  render() { 
    console.log('StEPPS',this.state.step)
    return (
      <>
      {
        (this.state.success)
        ?
        <Container>
          <SuccessStep handleSteps={this.handleSteps} step={this.state.step}/>
        </Container>
        :
        <Container className="App">
          <Stepper steps={ stepTitles } activeStep={this.state.step}/>
            { (this.state.step <= 2) ? this.renderRadioBox(): null }
            { (this.state.step === 0) ? this.renderMainForm() : null }
            { (this.state.step === 1) ? this.renderCoapplicantForm() : null }
            { (this.state.step === 2) ? <Step2 handleSteps={this.handleSteps}/> : null }
            { (this.state.step === 3) ? <Step3 handleSteps={this.handleSteps}/> : null }             
        </Container>
      }

      </>
    );
  }
}


export default App;
