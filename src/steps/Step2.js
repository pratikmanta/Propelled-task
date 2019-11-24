import React from 'react';
import axios from 'axios';

class Step2 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      addressDocs: null,
    }
  }

  handleChange = (e) => {
    this.setState({ addressDocs: e.target.files[0] })
  }

  handleSubmit = (e) => {
    const { addressDocs } = this.state;
    const data = new FormData()
    for (var i = 0; i < addressDocs.length; i++) {
      data.append('file', addressDocs[i])
    }
    axios.post("http://api/hack/2019/", data)
      .then(res => {
        console.log('Response', res)
      })
      .catch(err => {
        console.log('err', err)
      })

  }

  handleReset = (e) => {
    console.log(this.state.addressDocs)
    this.setState({ addressDocs: [] })
  }

  render() {
    const { handleSteps } = this.props;

    return (
      <>
        <div className="mt-2">
          <div class="row mt-3 pt-2">
            <div class="col-md-6 mb-3">
              <h4>Relationship with Co-Applicant</h4>
            </div>
            <div class="col-md-6 mb-3">
              <input type="text" class="form-control" placeholder="" required={true} onChange={this.handlePanChange} onBlur={this.getPanData} />
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
          <button type="button" class="btn btn-outline-dark btn-lg btn-block mt-3" onClick={() => handleSteps('success')}>Check Eligibility</button>
        </div>
      </>
    )
  }
}

export default Step2;