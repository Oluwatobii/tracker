/** Start with a Lower or upppercase letter
 * then followed by anywhere from 2 - 23 characters
 * that can be lower or upper case letters, digits, - or _
 * Overall, it must be 3 - 24 characters
 * */
const USERNAME_REGEX = /^[A-z][A-z0-9-_]{2,23}$/

/** Start with a Lower or upppercase letter
 * then followed by anywhere from 2 - 23 characters
 * */
const NAME_REGEX = /^[A-z][A-z]{2,23}$/

/** Verify Email Address and also prevent multiple @ signs */
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

/** Requires at lest one lowercase letter,
 * one uppercase letter,
 * one digit,
 * and one of these special characters; [!@#$.%]
 * and it must be 8 - 24 characters
 * */
const PASSWORD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$.%]).{8,24}$/

module.exports = { USERNAME_REGEX, NAME_REGEX, EMAIL_REGEX, PASSWORD_REGEX }
