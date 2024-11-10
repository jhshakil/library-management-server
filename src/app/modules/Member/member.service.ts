import { Member } from "@prisma/client";
import { prisma } from "../../utils/prisma";

const createMember = async (data: Member) => {
  const result = await prisma.member.create({
    data,
  });

  return result;
};
const getAllMember = async () => {
  const result = await prisma.member.findMany();

  return result;
};

const getMemberById = async (memberId: string) => {
  const result = await prisma.member.findUnique({
    where: {
      memberId,
    },
  });

  return result;
};

const updateMember = async (memberId: string, data: Partial<Member>) => {
  const result = await prisma.member.update({
    where: {
      memberId,
    },
    data,
  });

  return result;
};

const deleteMember = async (memberId: string) => {
  const result = await prisma.member.delete({
    where: {
      memberId,
    },
  });

  return result;
};

export const MemberServices = {
  createMember,
  getAllMember,
  getMemberById,
  updateMember,
  deleteMember,
};
