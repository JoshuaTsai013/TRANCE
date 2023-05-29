import { Badge, theme } from "antd";
import { HeartFilled } from "../Icons";
import { useUserInfo } from "../../react-query";
import styles from "./favorite.module.css";

export default function Favorite() {
  const { data: userInfo} = useUserInfo() || {};
  const favorites = userInfo.favorites || [];
  const count = favorites.length;
  const toggleOpen = () => {};

  return (
    <div onClick={toggleOpen} className={styles.favorite}>
      <Badge count={count} color="#F19D38" style={{ color: "white" }}>
        <HeartFilled  style={{ color: '#efeef7' }}/>
      </Badge>
    </div>
  );
}
