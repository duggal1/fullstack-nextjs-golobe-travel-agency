"use client";
import { Input } from "@/components/local-ui/input";
import { Button } from "@/components/ui/button";
import { ErrorMessage } from "@/components/local-ui/errorMessage";
import { SuccessMessage } from "@/components/local-ui/successMessage";
import { setNewPasswordAction } from "@/lib/actions";
import { useFormState, useFormStatus } from "react-dom";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
export function SetNewPasswordForm() {
  const router = useRouter();
  const [state, dispatch] = useFormState(setNewPasswordAction, undefined);

  useEffect(() => {
    if (state?.success === true) {
      setTimeout(() => router.replace("/login"), 1000);
    }
  }, [state?.success]);
  return (
    <div>
      <div className={"mb-5"}>
        {state?.success === false && state?.message && (
          <ErrorMessage message={state?.message} />
        )}
        {state?.success === true && state?.message && (
          <SuccessMessage message={state?.message} />
        )}
      </div>
      <form id={"set-new-password-form"} action={dispatch}>
        <Input
          label={"Create Password"}
          type={"password"}
          name="password"
          placeholder="Enter new password"
          className={"mb-3"}
          error={state?.error?.password}
        />
        <Input
          label={"Re-enter Password"}
          type={"password"}
          name="confirmPassword"
          placeholder="Enter new password"
          className={"mb-3"}
          error={state?.error?.confirmPassword}
        />
        <SubmitBtn formId={"set-new-password-form"} />
      </form>
    </div>
  );
}
function SubmitBtn({ formId }) {
  const { pending } = useFormStatus();
  return (
    <Button form={formId} disabled={pending} size="lg" type="submit">
      Set password
    </Button>
  );
}