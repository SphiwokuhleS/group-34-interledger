import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RegistrationFormModel } from '@/models/registration-form-model'

export const RegistrationForm = ({ user, setUser, onSubmit }: RegistrationFormModel) => (
  <form onSubmit={onSubmit} className="space-y-4">
    <div>
      <Label htmlFor="name">First Name</Label>
      <Input 
        id="name" 
        value={user.firstName} 
        onChange={(e) => setUser({...user, firstName: e.target.value})}
        placeholder="Enter your name"
        required
      />
    </div>
    <div>
      <Label htmlFor="lastName">Last Name</Label>
      <Input 
        id="lastName" 
        value={user.lastName} 
        onChange={(e) => setUser({ ...user, lastName: e.target.value })}
        placeholder="Enter your last name"
        required
      />
    </div>
    <div>
      <Label htmlFor="Email">Email Address</Label>
      <Input 
        id="emailAddress" 
        value={user.email} 
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        placeholder="Enter your last name"
        required
      />
    </div>
    <div>
      <Label htmlFor="WalletAddress">Interledger Wallet Address</Label>
      <Input 
        id="walletAddress" 
        value={user.walletAddress} 
        onChange={(e) => setUser({ ...user, walletAddress: e.target.value })}
        placeholder="Enter your last name"
        required
      />
    </div>
    <div>
      <Label htmlFor="billing">Billing Schedule</Label>
      <Select onValueChange={(value) => setUser({...user, billingSchedule: value})}>
        <SelectTrigger id="billing">
          <SelectValue placeholder="Select billing schedule" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="hourly">Hourly</SelectItem>
          <SelectItem value="daily">Daily</SelectItem>
          <SelectItem value="weekly">Weekly</SelectItem>
          <SelectItem value="monthly">Monthly</SelectItem>
        </SelectContent>
      </Select>
    </div>
    <Button type="submit" className="w-full">Register</Button>
  </form>
)