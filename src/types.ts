export interface ItineraryStop {
  id: string;
  time: string;
  category: string;
  categoryColorClass: string;
  title: string;
  description: string;
  badge: string;
  badgeIcon: string;
  subInfo: string;
  dotColorClass: string;
  details?: string[];
  tips?: string;
}

export interface MenuItem {
  id: number;
  name: string;
  tag: string;
  tagClass: string;
  description: string;
  iconName?: string;
}

export interface BudgetItem {
  name: string;
  unitPrice: number;
  type: 'fixed' | 'per_person' | 'per_table';
  peoplePerTable?: number;
  note: string;
}

export interface InquiryFormData {
  companyName: string;
  contactPerson: string;
  phone: string;
  email: string;
  headcount: number;
  dietaryNotes: string;
  preferredDate: string;
  needInvoice: boolean;
  taxId: string;
  specialRequests: string;
}
