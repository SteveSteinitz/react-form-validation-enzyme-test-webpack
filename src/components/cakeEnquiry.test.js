import React from 'react';
import expect from 'expect';
import {mount, shallow} from 'enzyme';
import CakeEnquiry from './CakeEnquiry';

describe (
	'Cake Enquiry',
	() =>
	{
		it ('sets error message when trying to save empty name',
			() =>
			{
				const wrapper = mount (
					<CakeEnquiry/>,
					{context: {router: {}}} // SJS - hack to avoid warning: Required child context `router` was not specified in
				);
				const sendButton  = wrapper.find ('button').at(0);
				expect (sendButton.prop ('type')) .toBe ('submit');
				sendButton.simulate ('click');
				expect (
					wrapper.state () .errors.Name
				) .toBe ('Please tell us your name');
			}
		);
		
		it ('sets error message when trying to save empty email',
			() =>
			{
				const wrapper = mount (
					<CakeEnquiry/>,
					{context: {router: {}}} // SJS - hack to avoid warning: Required child context `router` was not specified in
				);
				// put in a name so we can test the next field, email
				const nameInputTextField = wrapper.find ('input').at(0);
				nameInputTextField.node.value = 'David';
				nameInputTextField.simulate('change', nameInputTextField);

				// Submit
				const sendButton    = wrapper.find ('button').at(0);
				expect (sendButton.prop ('type')) .toBe ('submit');
				sendButton.simulate ('click');

				// Name error should be undefined, Email error should be as expected
				expect (
					wrapper.state () .errors.Name
				) .toBe (undefined);
				expect (
					wrapper.state () .errors.Email
				) .toBe ('Please tell us your email address');
			}
		);
		
		it ("sets error message when choosing 'Other' Celebration Type but empty text field",
			() =>
			{
				const wrapper = mount (
					<CakeEnquiry/>,
					{context: {router: {}}} // SJS - hack to avoid warning: Required child context `router` was not specified in
				);
				// put in a name and an email address so we can test the 'Other' field
				const nameInputTextField = wrapper.find ('input').at(0);
				nameInputTextField.node.value = 'David';
				nameInputTextField.simulate('change', nameInputTextField);

				const emailInputTextField = wrapper.find ('input').at(1);
				emailInputTextField.node.value = 'this@that.com';
				emailInputTextField.simulate('change', emailInputTextField);
				
				// set the 'Other' Celebration Type checkbox
				const otherCelebrationTypeTextField = wrapper.find ('input[type="radio"]').at(3);
				otherCelebrationTypeTextField.node.checked = true;
				otherCelebrationTypeTextField.simulate('change', otherCelebrationTypeTextField);
 
				// Submit
				const sendButton    = wrapper.find ('button').at(0);
				expect (sendButton.prop ('type')) .toBe ('submit');
				sendButton.simulate ('click');

				// Name error should be undefined, Email error should be as expected
				expect (
					wrapper.state () .errors.Email
				) .toBe (undefined);
				
				expect (
					wrapper.state () .errors.Other
				) .toBe ('Please tell us your celebration type');
			}
		);
	}
);

/*
describe (
	'Manage Course Page',
	() =>
	{
		it (
			'sets error message when trying to save empty title',
			() =>
			{
				const props = {
					authors: [],
					actions: {saveCourse: () => {return Promise.resolve();}},
					course: {
						id: '',
						watchHref: '',
						title: '',
						authorId: '',
						length: '',
						category: ''
					}
				};
				const wrapper         = mount (<ManageCoursePage {...props}/>); // mount creates a full dom in memory (uses JSDom)
				const saveButton    = wrapper.find ('input').last ();
				expect (saveButton.prop ('type')) .toBe ('submit');
				saveButton.simulate ('click');
				expect (
					wrapper.state () .errors.title
				) .toBe ('Title must be at least 5 characters.');
			}
		);
	}
);
*/
