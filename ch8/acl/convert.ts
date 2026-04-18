import { RemoteUser, User, UserSubscription } from "./types";

export const convertUserFrom = (remoteUser: RemoteUser): User => {
  const {
    user_identification,
    user_full_name,
    is_premium_user,
    subscription_details,
  } = remoteUser;

  return {
    id: user_identification,
    name: user_full_name,
    isPremium: is_premium_user,
    subscription: subscription_details.level as UserSubscription, // as 쓰면 원래는 UM...
    expire: subscription_details.expiry,
  };
};
