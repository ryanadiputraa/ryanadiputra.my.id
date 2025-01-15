export const setCookie = (
  name: string,
  val: string,
  expireDate: Date,
): void => {
  document.cookie = `${name}=${val};path=/;expires=${expireDate.toUTCString()};SameSite=Lax;Secure;`;
};

export const getCookie = (name: string): string | null => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length !== 2) return null;
  return parts.pop()?.split(";").shift() ?? null;
};

export const removeCookie = (name: string) => {
  document.cookie = `${name}=;expires=${new Date(Date.now() - 1).toUTCString()};path=/;SameSite=Lax;`;
};
