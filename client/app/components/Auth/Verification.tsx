import { styles } from "@/app/styles/style";
import { useActivationMutation } from "@/redux/features/auth/authApi";
import React, { FC, useActionState, useEffect, useRef, useState } from "react";
import { toast } from "react-hot-toast";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { useSelector } from "react-redux";

type Props = {
  setRoute: (route: string) => void;
};

type VerifyNumber = {
  "0": string;
  "1": string;
  "2": string;
  "3": string;
  "4": string;
  "5": string;
};

const Verification: FC<Props> = ({ setRoute }) => {
  const { token } = useSelector((state: any) => state.auth);
  const [activation, { isSuccess, error }] = useActivationMutation();
  useEffect(() => {
    if (isSuccess) {
      toast.success("Account Verified");
      setRoute("Login");
    }
    if (error) {
      if ("data" in error) {
        const errorData = error as any;
        toast.error(errorData.data.message);
        setInvalideError(true);
      } else {
        console.log("An error occured :", error);
      }
    }
  }, [isSuccess, error]);
  const [invalidError, setInvalideError] = useState<boolean>(false);
  const inputrefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  const [verifyNumber, setVerifyNumber] = useState<VerifyNumber>({
    0: "",
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
  });

  const verifictionHandler = async () => {
    const VerificationNumber = Object.values(verifyNumber).join("");
    if (VerificationNumber.length !== 6) {
      setInvalideError(true);
      return;
    }
    await activation({
      activation_token: token,
      activation_code: VerificationNumber,
    });
  };

  const handleInputChange = (index: number, value: string) => {
    setInvalideError(false);

    if (value === "" && index >= 0) {
      const newVerifyNumber = { ...verifyNumber, [index]: value };
      setVerifyNumber(newVerifyNumber);
      inputrefs[index - 1].current?.focus(); // Move focus to previous input
    } else if (/^[0-9]$/.test(value)) {
      // Ensure only numbers are entered
      const newVerifyNumber = { ...verifyNumber, [index]: value };
      setVerifyNumber(newVerifyNumber);

      if (index < 5) {
        inputrefs[index + 1].current?.focus(); // Move focus to next input
      }
    }
  };
  return (
    <div>
      <h1 className={`${styles.title}`}>Verify Your Account</h1>
      <br />
      <div className="w-full flex items-center justify-center mt-2">
        <div className="w-[80px] h-[88px] rounded-full bg-[#497DF2] flex items-center justify-center">
          <VscWorkspaceTrusted size={40} />
        </div>
      </div>
      <br />
      <br />
      <div className="m-auto flex items-center justify-around">
        {Object.keys(verifyNumber).map((key, index) => (
          <input
            type="number"
            key={key}
            ref={inputrefs[index]}
            className={`w-[65px] h-[65px] bg-transparent border-[3px] rounded-[10px] flex items-center text-black dark:text-white justify-center text-[18px] font-Poppins outline-none text-center ${
              invalidError
                ? "shake border-red-500"
                : "dark:border-white border-[#0000004a]"
            }`}
            placeholder=""
            maxLength={1}
            value={verifyNumber[key as keyof VerifyNumber]}
            onChange={(e) => handleInputChange(index, e.target.value)}
          />
        ))}
      </div>
      <br />
      <br />
      <div className="w-full flex items-center justify-center">
        <button onClick={verifictionHandler} className={`${styles.button}`}>
          Verify OTP
        </button>
      </div>
      <br />
      <h5 className="text-center pt-4 font-Poppins text-[14px]">
        Go to back to sign in?{" "}
        <span
          className="text-[#2190ff] pl-1 cursor-pointer"
          onClick={() => setRoute("Login")}
        >
          Sign In
        </span>
      </h5>
    </div>
  );
};

export default Verification;
