import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { MemberServices } from "./member.service";

const createMember = catchAsync(async (req, res) => {
  const result = await MemberServices.createMember(req.body);

  sendResponse(res, {
    message: "Member created successfully",
    data: result,
  });
});

const getAllMember = catchAsync(async (req, res) => {
  const result = await MemberServices.getAllMember();

  sendResponse(res, {
    message: "Members retrieved successfully",
    data: result,
  });
});

const getMemberById = catchAsync(async (req, res) => {
  const result = await MemberServices.getMemberById(req.params.memberId);

  sendResponse(res, {
    message: "Member retrieved successfully",
    data: result,
  });
});

const updateMember = catchAsync(async (req, res) => {
  const result = await MemberServices.updateMember(
    req.params.memberId,
    req.body
  );

  sendResponse(res, {
    message: "Member updated successfully",
    data: result,
  });
});

const deleteMember = catchAsync(async (req, res) => {
  const result = await MemberServices.deleteMember(req.params.memberId);

  sendResponse(res, {
    message: "Member successfully deleted",
    data: result,
  });
});

export const MembersControllers = {
  createMember,
  getAllMember,
  getMemberById,
  updateMember,
  deleteMember,
};
