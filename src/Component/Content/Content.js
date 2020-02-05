import React, { Component } from 'react';

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 0
    }

  }
  notification = () => { alert("Hí my friend!") }


  renderButton = () => (
    <div className="row">
      <div className="btn btn-group">
        <div className="btn  btn-info" onClick={() => this.editClick()}  >Edit</div>
        <div className="btn  btn-warning">Remove</div>
      </div>
    </div>
  )

  s
  renderForm = () =>
    (
      <div className="row">
        <div className="form-group" >
          <input defaultValue={this.props.title} type="text" name="name" className="form-control" />

        </div>
        <div className="form-group" >
          <div className="btn btn-block btn-danger" onClick={() => this.saveClick()}>Save</div>
        </div>
      </div>
    )

  editClick = () => {
    this.setState({
      status: 1
    });
  }

  saveClick = () => {
    this.setState({
      status: 0
    });
  }


  displayCheck = () => {
    if (this.state.status === 0) {
      return this.renderButton();
    } else {
      return this.renderForm();
    }
  }

  render() {
    return (

      <div className="col-lg-4">
        <div className="row">
          <div className={"col-lg-5 "}>
            <div className="p-1">
              <img className="img-fluid rounded-circle" src={this.props.picture} alt />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="p-1">
              <h2 className="display-6">{this.props.title}</h2>
              <p>
                {this.props.quote}
              </p>

              {this.displayCheck()}

              <hr />

            </div>
          </div>
        </div>
      </div>


    );
  }
}

