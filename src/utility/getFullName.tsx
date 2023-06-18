import { Author } from "@/type";

export function getFullName({ firstName, middleName, lastName }: Author) {
  return (
    firstName + (middleName && " " + middleName) + (lastName && " " + lastName)
  );
}
