import styles from "../style";
import { arrowUp } from "../assets";

export const GetStarted = () => (
  <div
    className={`${styles.flexCenter} w-[140px] h-[140px] 
  bg-blue-gradient rounded-full p-[3px] cursor-pointer ml-3`}
  >
    <div
      className={`${styles.flexCenter} flex-col  w-[100%] h-[100%] rounded-full bg-primary`}
    >
      <div className={`${styles.flexStart} flex-row`}>
        <p className="font-poppins font-medium text-[18px] leading-[23.4px] mr-2">
          <span className="text-gradient">Get</span>
        </p>
        <img
          src={arrowUp}
          alt="arrow"
          className="w-[23px] h-[23px] object-contain"
        />
      </div>
      <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
        <span className="text-gradient">Started</span>
      </p>
    </div>
  </div>
);
