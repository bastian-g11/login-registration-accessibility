const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
// Usar nombres menos obvios
const ROLES = {
  admin: 'ADMIN',
  user: 'REGULAR',
};

export { USER_REGEX, PWD_REGEX, ROLES };
