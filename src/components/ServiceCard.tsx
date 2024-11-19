import React from 'react';
import { Service } from '../types';
import * as Icons from 'lucide-react';

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const Icon = Icons[service.icon as keyof typeof Icons];

  return (
    <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all">
      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-blue-600" />
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
      <p className="text-gray-600">{service.description}</p>
    </div>
  );
}