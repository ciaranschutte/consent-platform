import { Request } from 'express';
import prisma, {
  ParticipantResponse,
  Participant,
  ConsentQuestion,
} from '../prismaClient';

// TODO: implement with some good defaults. do we need pagination etc?
const getSearchParams = (req: Request) => {};

export const getParticipant = async (id: string): Promise<Participant> => {
  const result = await prisma.participant.findUniqueOrThrow({
    where: {
      id,
    },
  });
  return result;
};

export const getParticipants = async (): Promise<Participant[]> => {
  const result = await prisma.participant.findMany();
  return result;
};

export const getConsentQuestion = async (
  id: string
): Promise<ConsentQuestion> => {
  const result = await prisma.consentQuestion.findUniqueOrThrow({
    where: {
      id,
    },
  });
  return result;
};

export const getConsentQuestions = async (
  parameters: any = {}
): Promise<ConsentQuestion[]> => {
  const result = await prisma.consentQuestion.findMany({ where: parameters });
  return result;
};

export const getLatestParticipantResponseByParticipantIdAndQuestionId = async (
  participantId: string,
  consentQuestionId: string
): Promise<ParticipantResponse> => {
  const result = await prisma.participantResponse.findFirstOrThrow({
    where: {
      consentQuestionId,
      participantId,
    },
    orderBy: {
      submittedAt: 'desc',
    },
  });
  return result;
};
