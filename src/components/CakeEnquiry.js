// Created by steinitz on 07 Jul 2016

import React from 'react';
import EnquiryForm from './enquiryForm';

class CakeEnquiry extends React.Component {
	cakeTypes ()
	{
		return ["Cupcakes", "Cheesecakes", "Butter Cakes", "Mudcakes"];
	}
	
	celebrationTypes ()
	{
		return ["Birthday", "Wedding", "Corporate", "Other"];
	}
	
	dummy ()
	{}
	
	render () {
		const enquiryFormProps = {
			enquiry: {},
			cakeTypes: this.cakeTypes (),
			celebrationTypes: this.celebrationTypes(),
			onSubmit: this.dummy,
			onReset: this.dummy,
			onChange: this.dummy,
			onCelebrationTypeChange: this.dummy,
			selectedCelebrationType: "Other",
			errors: {}
		};
		return (
			<div>
				<EnquiryForm {...enquiryFormProps}/>
			</div>
		);
	}
}

export default CakeEnquiry;
