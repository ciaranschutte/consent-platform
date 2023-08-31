// had to add types to not have an error. zod types might help.
enum ConsentCategory {
	INFORMED_CONSENT = 'INFORMED_CONSENT',
	CONSENT_RELEASE_DATA = 'CONSENT_RELEASE_DATA',
	CONSENT_RESEARCH_PARTICIPATION = 'CONSENT_RESEARCH_PARTICIPATION',
	CONSENT_RECONTACT = 'CONSENT_RECONTACT',
	CONSENT_REVIEW_SIGN = 'CONSENT_REVIEW_SIGN',
}

const consentQuestions = [
	{
		id: 'f1bdf45e-1b1c-11ec-9621-0242ac130002',
		isActive: true,
		createdAt: new Date('Tue Sep 22 2021 16:16:50 GMT-0400 (Eastern Daylight Time)'),
		category: ConsentCategory.INFORMED_CONSENT,
	},
	{
		id: 'f1bdf45e-1b1c-11ec-9621-0242ac140005',
		isActive: true,
		createdAt: new Date('Tue Sep 21 2021 16:16:50 GMT-0400 (Eastern Daylight Time)'),
		category: ConsentCategory.CONSENT_REVIEW_SIGN,
	},
];

export default consentQuestions;
