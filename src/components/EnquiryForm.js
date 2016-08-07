// Created by steinitz on 07 Aug 2016

import React from "react";
import TextInput from './common/TextInput';
import Checkbox from './common/Checkbox';

class EnquiryForm extends React.Component
{
	render ()
	{
		let that = this;
		let cakeTypeCheckboxes = this.props.cakeTypes.map (
			function (aCakeType)
			{
				return (
					<Checkbox
						key			= {aCakeType}
						name		= {aCakeType}
						label		= {aCakeType}
						onChange	= {that.props.onCheckboxChange}
						checked		= {that.props.enquiry[aCakeType]}
					/>
				);
			}
		);
		
		let celebrationTypeRadioButtons = this.props.celebrationTypes.map (
			function (aCelebrationType)
			{
				let radioButton = (
					<div key={aCelebrationType}>
						<input
							type		= "radio"
							name		= {aCelebrationType}
							checked		= {that.props.selectedCelebrationType == aCelebrationType}
							onChange	= {that.props.onCelebrationTypeChange}
							label		= {aCelebrationType}
							key			= {aCelebrationType}
						/>
						<label className = "checkboxLabel" htmlFor={aCelebrationType}>{aCelebrationType}</label>
					</div>
				);
				return radioButton;
			}
		);
				
		return (
			<div className="enquiry-form u-clearfix">
				<fieldset className = "enquiry"> <legend className = "enquiry">Cake Enquiry Form</legend>
				<TextInput
					name		="Name"
					label		="Name:"
					value		={this.props.enquiry.Name}
					onChange	={this.props.onChange}
					error		={this.props.errors.Name}/>
				<TextInput
					name		="Email"
					label		="Email:"
					value		={this.props.enquiry.Email}
					onChange	={this.props.onChange}
					error		={this.props.errors.Email}/>

					<label>Type of cake:</label>
					{cakeTypeCheckboxes}
					<br />
					<label>Celebration type:</label>
					{celebrationTypeRadioButtons}
				<TextInput
					name="Other"
					value={this.props.enquiry.Other}
					onChange={this.props.onChange}
					error={this.props.errors.Other}/>
					<label>Tell us about your dream cake:</label>
					<br />
					<textarea className = "form-control dark-form-control" rows="3" />
					<br /><br />
					<button id="submit-cake-enquiry" type = "submit" onClick={this.props.onSubmit}>Send away</button>
					<button type = "reset" onClick={this.props.onReset}>Restart</button>
				</fieldset>
			</div>
		);
	}
}

// let checkbox = (
//        <div key = {aCakeType}>
//            <input
//                type		= "checkbox"
//                name		= {aCakeType}
//                value		= {that.props.enquiry[aCakeType]}
//                checked	= {false}
//                onChange	= {that.props.onCheckboxChange}
//                key		= {aCakeType}
//            />
//            <label className = "checkboxLabel">{aCakeType}</label>
//        </div>
//    );
//    return checkbox;

EnquiryForm.propTypes = {
	enquiry: React.PropTypes.object,
	onSubmit: React.PropTypes.func.isRequired,
	onReset: React.PropTypes.func.isRequired,
	onChange: React.PropTypes.func.isRequired,
	cakeTypes: React.PropTypes.array.isRequired,
	celebrationTypes: React.PropTypes.array.isRequired,
	onCelebrationTypeChange: React.PropTypes.func.isRequired,
	selectedCelebrationType: React.PropTypes.string.isRequired,
	errors: React.PropTypes.object
};


export default EnquiryForm;

