import { UserModel } from "./user-model";

export interface RegistrationFormModel {
    user: UserModel;
    setUser: React.Dispatch<React.SetStateAction<UserModel>>;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}