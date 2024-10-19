import { UserModel } from "./user-model";

export interface RegistrationFormModel {
    user: UserModel | null;
    setUser: React.Dispatch<React.SetStateAction<UserModel | null>>;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}