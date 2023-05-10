export interface LoginResponse {
  authenticationToken: string;
  expiresAt: Date;
  issuedAt: Date;
  username: string;
}
