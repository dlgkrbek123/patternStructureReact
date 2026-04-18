import { convertUserFrom } from "./convert";

export async function fetchUserData<T>(id: string) {
  const response = await fetch(`/api/users/${id}`);
  const rawData = await response.json();

  return convertUserFrom(rawData) as T;
}
