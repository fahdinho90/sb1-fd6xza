import React from 'react';
import { Notary } from '../types';
import { Phone, Mail, MapPin, CreditCard } from 'lucide-react';

interface NotaryCardProps {
  notary: Notary;
}

export default function NotaryCard({ notary }: NotaryCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">{notary.name}</h3>
      <div className="space-y-3">
        <div className="flex items-center gap-3 text-gray-600">
          <CreditCard className="w-5 h-5 text-blue-600" />
          <span>N° {notary.registrationNumber}</span>
        </div>
        <div className="flex items-start gap-3 text-gray-600">
          <MapPin className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
          <span>{notary.address}</span>
        </div>
        <div className="flex items-center gap-3 text-gray-600">
          <Phone className="w-5 h-5 text-blue-600" />
          <a href={`tel:${notary.phone}`} className="hover:text-blue-600">{notary.phone}</a>
        </div>
        <div className="flex items-center gap-3 text-gray-600">
          <Mail className="w-5 h-5 text-blue-600" />
          <a href={`mailto:${notary.email}`} className="hover:text-blue-600">{notary.email}</a>
        </div>
      </div>
    </div>
  );
}