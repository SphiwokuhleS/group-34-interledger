"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Header } from "@/components/home-page-components/header.component";
import { RegistrationForm } from "@/components/home-page-components/registration-form.component";
import { FeaturesList } from "@/components/home-page-components/features-list.component";
import { useUserState } from "@/context/user-context";
import { completeUser } from "@/lib/utils";
import router from "next/router";

export default function HomePage() {
  const { user, setUser } = useUserState();

  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (user && completeUser(user)) {
      setUser({ ...user, registered: true });
      router.push("/dashboard");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white p-8">
      <Header />
      <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Get Started</CardTitle>
            <CardDescription>
              Create your account and start backing up
            </CardDescription>
          </CardHeader>
          <CardContent>
            <RegistrationForm
              user={user}
              setUser={setUser}
              onSubmit={handleRegister}
            />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Why Choose SmartBackup?</CardTitle>
            <CardDescription>
              Flexible, affordable, and secure cloud storage
            </CardDescription>
          </CardHeader>
          <CardContent>
            <FeaturesList />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
