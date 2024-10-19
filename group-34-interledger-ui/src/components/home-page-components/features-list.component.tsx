import React from 'react'
import { Upload } from 'lucide-react'

export const FeaturesList = () => (
  <div className="space-y-4">
    <div className="flex items-center space-x-2">
      <Upload className="h-5 w-5 text-blue-500" />
      <p>Pay only for what you use: 0.001 cents per MB per hour</p>
    </div>
    <div className="flex items-center space-x-2">
      <Upload className="h-5 w-5 text-blue-500" />
      <p>Customizable billing schedules to fit your needs</p>
    </div>
    <div className="flex items-center space-x-2">
      <Upload className="h-5 w-5 text-blue-500" />
      <p>Secure and reliable cloud storage solution</p>
    </div>
    <div className="flex items-center space-x-2">
      <Upload className="h-5 w-5 text-blue-500" />
      <p>Easy-to-use interface for quick backups</p>
    </div>
  </div>
)