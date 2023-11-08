/**
 * Plain Authorization
 */
type PlainAccessCode = {
  type: ["plain", "accessCode"];
  code: string;
};

type PlainEmail = {
  type: ["plain", "email"];
  email: string; // must be valid email address
  password: string; // must be longer than 8 characters, and contain at least one number and one special character
};

export type Authorization = PlainAccessCode | PlainEmail;
