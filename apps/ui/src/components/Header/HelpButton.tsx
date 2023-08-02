'use client';

import Button from '@/components/Button';

const HelpButton = () => {
	return (
		<Button color="green" onClick={() => console.log('HALP')}>
			Help
		</Button>
	);
};

export default HelpButton;
