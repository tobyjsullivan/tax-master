import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { addInvoice } from '../../../actions/creators';
import './NewInvoiceForm.css';

const mapDispatchToProps = (dispatch) => {
  return {
    onAddInvoice: (invoice) => {dispatch(addInvoice(invoice))}
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

  formatValidationErrors(errors) {
    if (errors.length === 0) {
      return '';
    }

    var listItems = errors.map(e => {
      return (<li>{e}</li>);
    });
    return (
      <ul>
        {listItems}
      </ul>
    );
  }

  render() {
    if (this.state.returnToInvoicesPage) {
      return (<Redirect to={`/invoices`} />);
    }

    var clientNameClassName = '';
    var clientNameValidationErrors = this.formatValidationErrors(this.state.validationErrors.clientName);
    if (this.state.validationErrors.clientName.length > 0) {
      clientNameClassName += ' NewInvoiceForm-validationError';
    }

    var issueDateClassName = '';
    var issueDateValidationErrors = this.formatValidationErrors(this.state.validationErrors.issueDate);
    if (this.state.validationErrors.issueDate.length > 0) {
      issueDateClassName += 'NewInvoiceForm-validationError'
    }

    var amountClassName = '';
    var amountValidationErrors = this.formatValidationErrors(this.state.validationErrors.amount);
    if (this.state.validationErrors.amount.length > 0) {
      amountClassName += 'NewInvoiceForm-validationError'
    }

    return (
      <div className="NewInvoiceForm">
        <form onSubmit={(e) => this.handleSubmit(e)}>
          {clientNameValidationErrors}
          <p><input className={clientNameClassName} type="text" onChange={(e) => this.handleClientNameChange(e)} placeholder="Client Name" /></p>
          {issueDateValidationErrors}
          <p><input className={issueDateClassName} type="text" onChange={(e) => this.handleIssueDateChange(e)} placeholder="Issue Date" /></p>
          {amountValidationErrors}
          <p>$<input className={amountClassName} type="text" onChange={(e) => this.handleAmountChange(e)} placeholder="Amount" /></p>
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
