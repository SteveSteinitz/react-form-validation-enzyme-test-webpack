// Created by steinitz on 07 Jul 2016

import React from "react";
import EnquiryForm from './EnquiryForm';

import alert from "alerts";

const stringIsEmpty = function stringIsEmpty (theString)
{
	let result = false;
	if (theString == null)
	{
		result = true;
	}
	if (theString === "")
	{
		result = true;
	}
	return result;
};

class CakeEnquiry extends React.Component
{
	constructor(props, context)
	{
		super(props, context);

		this.updateEnquiryTextInput         = this.updateEnquiryTextInput.bind (this);
		this.updateEnquiryStateFromCheckbox = this.updateEnquiryStateFromCheckbox.bind (this);
		this.reset                          = this.reset.bind (this);
		this.sendEnquiry                    = this.sendEnquiry.bind (this);
		this.onCelebrationTypeChange        = this.onCelebrationTypeChange.bind (this);
		this.textInputValue        			= this.textInputValue.bind (this);
	}

	componentWillMount ()
	{
		this.reset ();
	}

	updateEnquiryTextInput (event)
	{
		let value = event.target.value;
		if (stringIsEmpty (value)) // avoid React warning - may not be needed with the method below
		{
			value = "";
		}
		const field = event.target.name;
		let enquiry = this.state.enquiry;
		enquiry [field] = value;
		this.setState ({enquiry: enquiry});
	}

	textInputValue (fieldName) // needed to avoid React warning
	{
		let result = "";
		const enquiry = this.state.enquiry;
		if (enquiry)
		{
			let value  = enquiry [fieldName];
			if (!stringIsEmpty (value))
			{
				result = value;
			}
		}
		return result;
	}

	updateEnquiryStateFromCheckbox (event)
	{
		const checked = event.target.checked;
		if (typeof checked != 'undefined')
		{
			const field = event.target.name;
			let enquiry = this.state.enquiry;
			enquiry [field] = checked;
			this.setState ({enquiry: enquiry});
		}
	}

	reset (event)
	{
		if (event)
		{
			event.preventDefault();
		}
		this.setState (
			{
				enquiry: {},
				errors: {},
				selectedCelebrationType: "no-selection" // satisfies EnquiryForm PropTypes on mount
			}
		);
	}

	sendEnquiry (event)
	{
		event.currentTarget.blur ();	// prevent focus on button
		event.preventDefault();
		if (this.state.selectedCelebrationType == "Other" &&
				stringIsEmpty (this.state.enquiry.Other))
		{
			this.setState ({errors: {Other: "Please tell us your celebration type"}});
		}
		else if (stringIsEmpty (this.state.enquiry.Name))
		{
			this.setState ({errors: {Name: "Please tell us your name"}});
		}
		else if (stringIsEmpty (this.state.enquiry.Email))
		{
			this.setState ({errors: {Email: "Please tell us your email address"}});
		}
		else
		{
			alert (
				'Enquiry sent',
				{
					timeout: 3000,
					className: 'alert-success'
				}
			);
			this.reset();
		}
	}

	onCelebrationTypeChange (event)
	{
		this.setState (
			{
				selectedCelebrationType: event.target.name
			}
		);
	}

	cakeTypes ()
	{
		return ["Cupcakes", "Cheesecakes", "Butter Cakes", "Mudcakes"];
	}

	celebrationTypes ()
	{
		return ["Birthday", "Wedding", "Corporate", "Other"];
	}

	render ()
	{
		const enquiryFormProps = {
			enquiry: this.state.enquiry,
			cakeTypes: this.cakeTypes (),
			celebrationTypes: this.celebrationTypes(),
			onSubmit: this.sendEnquiry,
			onReset: this.reset,
			onChange: this.updateEnquiryTextInput,
			onCheckboxChange: this.updateEnquiryStateFromCheckbox,
			onCelebrationTypeChange: this.onCelebrationTypeChange,
			selectedCelebrationType: this.state.selectedCelebrationType,
			errors: this.state.errors,
			textInputValueFunction: this.textInputValue
		};
		return (
			<div className = "cake-enquiry">
				<EnquiryForm {...enquiryFormProps}/>
			</div>
		);
	}
}

export default CakeEnquiry;
