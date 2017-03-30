import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { saveInvoice } from '../../../actions/async';
import TextInput from '../forms/TextInput';
import './NewInvoiceForm.css';

const mapDispatchToProps = (dispatch) => {
  return {
    onAddInvoice: (invoice) => {dispatch(saveInvoice(invoice))}
  }
}

class NewInvoiceForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clientNameValue: '',
      issueDateValue: '',
      amountValue: '',
      validationErrors: {
        clientName: [],
        issueDate: [],
        amount: [],
      },
      returnToInvoicesPage: false,
    };
  }

  handleClientNameChange(e) {
    this.setState({ clientNameValue: e.target.value });
  }

  handleIssueDateChange(e) {
    this.setState({ issueDateValue: e.target.value });
  }

  handleAmountChange(e) {
    this.setState({ amountValue: e.target.value });
  }

  validateFields() {
    var errors = {
      clientName: [],
      issueDate: [],
      amount: [],
    }

    var hasErrors = false;

    if (this.state.clientNameValue === '') {
      errors.clientName.push("Client name cannot be empty.");
      hasErrors = true;
    }

    if (this.state.issueDateValue === '') {
      errors.issueDate.push("Issue date cannot be empty.");
      hasErrors = true;
    }

    if (this.state.amountValue === '') {
      errors.amount.push("Amount cannot be empty.");
      hasErrors = true;
    }

    this.setState({ validationErrors: errors });
    return hasErrors;
  }

  handleSubmit(e) {
    e.preventDefault();

    var hasErrors = this.validateFields();

    if (hasErrors) {
      return;
    }

    this.props.onAddInvoice({
      clientName: this.state.clientNameValue,
      issueDate: this.state.issueDateValue,
      amount: this.state.amountValue,
    });

    this.setState({ returnToInvoicesPage: true })
  }

  render() {
    if (this.state.returnToInvoicesPage) {
      return (<Redirect to={`/invoices`} />);
    }

    return (
      <div className="NewInvoiceForm">
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <TextInput
            placeholder="Client Name"
            errors={this.state.validationErrors.clientName}
            value={this.state.clientNameValue}
            onChange={(e) => this.handleClientNameChange(e)} />
          <TextInput
            placeholder="Issue Date"
            errors={this.state.validationErrors.issueDate}
            value={this.state.issueDateValue}
            onChange={(e) => this.handleIssueDateChange(e)} />
          <TextInput
            placeholder="Amount"
            errors={this.state.validationErrors.amount}
            value={this.state.amountValue}
            onChange={(e) => this.handleAmountChange(e)} />
          <p><input type="submit" value="Add Invoice" /></p>
        </form>
      </div>
    );
  }
}
NewInvoiceForm = connect(
  undefined,
  mapDispatchToProps
)(NewInvoiceForm);

export default NewInvoiceForm;
