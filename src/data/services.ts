import { Service } from '../types';
import { Building2, FileText, Scale, Briefcase } from 'lucide-react';

export const services: Service[] = [
  {
    id: '1',
    title: 'Transactions immobilières',
    description: 'Gestion complète des transactions immobilières et hypothèques',
    icon: 'Building2'
  },
  {
    id: '2',
    title: 'Actes authentiques',
    description: 'Rédaction et authentification des actes officiels',
    icon: 'FileText'
  },
  {
    id: '3',
    title: 'Successions',
    description: 'Gestion des testaments et procédures de succession',
    icon: 'Scale'
  },
  {
    id: '4',
    title: 'Services aux entreprises',
    description: 'Constitution et modification de sociétés',
    icon: 'Briefcase'
  }
];