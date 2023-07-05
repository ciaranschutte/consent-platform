import prisma from '../prismaClient';

export const createResponse = async ({
  consentQuestionId,
  participantId,
  response,
}: {
  consentQuestionId: string;
  participantId: string;
  response: boolean;
}): Promise<any> => {
  const updateObj = {
    consentQuestionId,
    participantId,
    response,
  };

  const newResponse = await prisma.participantResponse.create({
    data: updateObj,
  });

  return newResponse;
};
