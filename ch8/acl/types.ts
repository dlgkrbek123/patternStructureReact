// 원격 타입
export type RemoteUser = {
  user_identification: string;
  user_full_name: string;

  is_premium_user: boolean;
  subscription_details: {
    level: string;
    expiry: string;
  };
};

// 클라이언트 타입
export type User = {
  id: string;
  name: string;
  isPremium: boolean;
  subscription: UserSubscription;
  expire: string;
};
export type UserSubscription = "Basic" | "Standard" | "Premium" | "Enterprise";
