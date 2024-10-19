'use client'

import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/ui/home-page-components/header.component"
import { RegistrationForm } from "@/components/ui/home-page-components/registration-form.component"
// import { FileUpload } from "@/components/ui/home-page-components/file-upload.component"
import { FeaturesList } from "@/components/ui/home-page-components/features-list.component"
import { UserModel } from '@/models/user-model'

export default function HomePage() {
  const [user, setUser] = useState<UserModel>({
    firstName: '',
    lastName: '',
    email: '',
    billingSchedule: '',
    walletAddress: ''
  });
  const [isRegistered, setIsRegistered] = useState(false)
  const [files, setFiles] = useState([])

  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (user.firstName && user.billingSchedule) {
      setIsRegistered(true)
    }
  }

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    // const uploadedFiles = Array.from(e.target.files)
    // setFiles([...files, ...uploadedFiles])
    console.log("uploadedFiles")
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white p-8">
      <Header />

      <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Get Started</CardTitle>
            <CardDescription>Create your account and start backing up</CardDescription>
          </CardHeader>
          <CardContent>
            {!isRegistered ? (
              <RegistrationForm user={user} setUser={setUser} onSubmit={handleRegister} />
            ) : (
              <div className="space-y-4">
                <p className="text-green-600 font-semibold">Welcome, {user.firstName}!</p>
                <p>Your billing schedule: {user.billingSchedule}</p>
                {/* <FileUpload onFileUpload={handleFileUpload} files={files} /> */}
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Why Choose SmartBackup?</CardTitle>
            <CardDescription>Flexible, affordable, and secure cloud storage</CardDescription>
          </CardHeader>
          <CardContent>
            <FeaturesList />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}