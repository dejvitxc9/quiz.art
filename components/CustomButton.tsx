import { CustomButtonProps } from "@/types";

const CustomButton = ({
  title,
  btnStyle,
  textStyle,
  isDisabled,
  btnType,
  handleClick,
}: CustomButtonProps) => {
  return (
    <button
      className={`custom-btn ${btnStyle}`}
      disabled={isDisabled}
      type={btnType || "button"}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyle}`}>{title}</span>
    </button>
  );
};
export default CustomButton;
