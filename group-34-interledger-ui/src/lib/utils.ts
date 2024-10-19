import { UserModel } from "@/models/user-model";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function completeUser(user: UserModel) {
  return (
    !!user.firstName &&
    !!user.lastName &&
    !!user.email &&
    !!user.walletAddress &&
    !!user.billingSchedule &&
    !!user.registered
  );
}
