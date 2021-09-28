export interface Field {
  label: string;
  name: string;
  type: string;
  placeholder?: string;
  required?: boolean;
}

export interface Step {
  slug: string;
  title: string;
  description?: string;
  position: number;
  fields: Field[];
}

export interface FormData {
  steps: Step[];
}
