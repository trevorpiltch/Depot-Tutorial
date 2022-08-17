import React from 'react'
import NoPayType from './NoPayType';
import CreditCardPayType from './CreditCardPayType';
import CheckPayType from './CheckPayType';
import PurchaseOrderPayType from './PurchaseOrderPayType';


class PayTypeSelector extends React.Component {
    constructor(props) {
        super(props)
        this.onPayTypeSelected = this.onPayTypeSelected.bind(this);
        this.state = { selectedPayType: null };
    }

    onPayTypeSelected(event) {
        console.log(event.target.value);
        this.setState({ selectedPayType: event.target.value });
    }

    render() {
        let PayTypeCustomComponent = NoPayType;

        if (this.state.selectedPayType == "Credit card") {
            PayTypeCustomComponent = CreditCardPayType;
        } else if (this.state.selectedPayType == "Check") {
            PayTypeCustomComponent = CheckPayType;
        } else if (this.state.selectedPayType == "Purchase Order") {
            PayTypeCustomComponent = PurchaseOrderPayType;
        }

        return (
            <div>
                <div className="field">
                    <label htmlFor="order_pay_type">Pay Type</label>
                    <select id="Pay Type" onChange={this.onPayTypeSelected} name="order[pay_type]">
                        <option value="">Select a payment method</option>
                        <option value="Check">Check</option>
                        <option value="Credit card">Credit card</option>
                        <option value="Purchase Order">Purchase order</option>
                    </select>
                </div>

                <PayTypeCustomComponent />
            </div>
        );
    }
}

export default PayTypeSelector