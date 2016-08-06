// Created by steinitz on 01 Jul 2016

import expect from 'expect';

describe (
	'Mocha and Expect test (tests the setup)',
	() =>
	{
		it (
			'true equals true',
			() =>
			{
				expect (true) .toEqual (true);
			}
		);
	}
);

