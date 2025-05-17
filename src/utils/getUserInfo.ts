import { authKey } from "@/constants/authkey";
import { LocalStorageUtil } from "@/service/localstorage";
import { jwtDecode } from "jwt-decode";

// {
//   "id": "04152521-c1bb-4337-96c4-cde77832aa5d",
//   "name": "Kirby Hoffman",
//   "email": "nova@oletters.com",
//   "role": "USER",
//   "iat": 1742974378,
//   "exp": 1745566378
// }

type UserInfo = {
  id: string;
  name: string;
  email: string;
  role: string;
  iat: number;
  exp: number;
};

const getUserInfo = () => {
  // check for client site
  if (typeof window === "undefined") return null;
  const token = LocalStorageUtil.getItem(authKey);
  if (!token) return null;
  const userInfo: UserInfo = jwtDecode(token as string);
  return userInfo;
};

export default getUserInfo;
