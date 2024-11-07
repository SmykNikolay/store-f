export interface ProductMeasurements {
  chestCircumference?: boolean;
  waistCircumference?: boolean;
  hipCircumference?: boolean;
  neckCircumference?: boolean;
  armholeCircumference?: boolean;
  frontLength?: boolean;
  backLength?: boolean;
  skirtLength?: boolean;
  slitLength?: boolean;
  thighHeight?: boolean;
  sleeveLength?: boolean;
  armCircumference?: boolean;
  wristCircumference?: boolean;
}

export interface ProductDetails {
  color?: boolean;
  composition?: boolean;
  material?: boolean;
}

export interface Product extends ProductMeasurements, ProductDetails {
  id: number;
  documentId: string;
  title: string;
  price: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}
