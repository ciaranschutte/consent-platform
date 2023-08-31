import { PrismaClient } from '@prisma/client';

import consentQuestions from './data/consentQuestions';

const prisma = new PrismaClient();

async function runSeeders() {
	await Promise.all(
		consentQuestions.map(async (consentQuestion) =>
			prisma.consentQuestion.upsert({
				where: { id: consentQuestion.id },
				create: consentQuestion,
				// type error if i use a map for some reason
				update: {},
			}),
		),
	);
}

runSeeders()
	.catch((e) => {
		console.error(`There was an error while seeding: ${e}`);
		process.exit(1);
	})
	.finally(async () => {
		console.log('Successfully seeded database. Closing connection.');
		await prisma.$disconnect();
	});
