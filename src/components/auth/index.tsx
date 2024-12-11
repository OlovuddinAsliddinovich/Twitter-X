import Button from "@/components/ui/button";
import Image from "next/image";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

export default function Auth() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center h-screen">
        <Image src={"/images/x.svg"} width={450} height={450} alt={"Twitter"} className="justify-self-center hidden md:block" />
        <div className="flex flex-col justify-center md:justify-between gap-6 h-full md:h-[70vh]">
          <div>
            <Image src={"/images/x.svg"} width={50} height={50} alt={"Twitter"} className="justify-self-center block md:hidden" />
          </div>
          <h1 className="text-6xl font-bold">Happening now</h1>
          <div className="w-full md:w-[60%]">
            <h2 className="font-bold text-3xl mb-4">Join today.</h2>
          </div>
          <div className="flex flex-col space-y-2 w-full md:w-[60%]">
            <Button
              label={
                <div className="flex items-center justify-center gap-2">
                  <FcGoogle />
                  Sign up with google
                </div>
              }
              fullWidth={true}
              secondary={true}
            />
            <Button
              fullWidth={true}
              secondary={true}
              label={
                <div className="flex items-center justify-center gap-2">
                  <AiFillGithub />
                  Sign up with github
                </div>
              }
            />
            <div className="flex items-center justify-center">
              <div className="h-px w-1/2 bg-gray-700" />
              <p className="mx-4">or</p>
              <div className="h-px w-1/2 bg-gray-700" />
            </div>
            <Button label={"Create account"} fullWidth />
            <div className="text-[10px] text-gray-400">
              By signing up, you agree to the <span className="text-sky-500">Terms of Service</span> and{" "}
              <span className="text-sky-500">Privacy Policy</span>, including <span className="text-sky-500">Cookie Use</span>.
            </div>
          </div>
          <div className="w-full md:w-[60%]">
            <h3 className="font-medium text-xl mb-4">Already have an account?</h3>
            <Button label={"Sign in"} fullWidth outline />
          </div>
        </div>
      </div>
    </>
  );
}
