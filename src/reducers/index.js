// Created by steinitz on 7 Jul 2016

import {combineReducers} from 'redux';

function dummyReducer (state = {}, action)
{
	return {};
}

const rootReducer = combineReducers (
	{
		dummyReducer
	}
);

export default rootReducer;
