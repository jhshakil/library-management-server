import { Router } from "express";
import { validateRequest } from "../../middlewares/validateRequest";
import { MemberValidationSchemas } from "./member.validation";
import { MembersControllers } from "./member.controller";

const router = Router();

router.post(
  "/",
  validateRequest(MemberValidationSchemas.createMemberSchema),
  MembersControllers.createMember
);
router.get("/", MembersControllers.getAllMember);
router.get("/:memberId", MembersControllers.getMemberById);
router.patch(
  "/:memberId",
  validateRequest(MemberValidationSchemas.updateMemberSchema),
  MembersControllers.updateMember
);
router.delete("/:memberId", MembersControllers.deleteMember);

export const MemberRouters = router;
