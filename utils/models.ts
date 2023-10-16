export interface Product {
  id: number;
  attributes: productAttributes;
}

export interface productAttributes {
  name: string;
  description: string;
  tags: productTags;
  price: number;
  image: productImage;
}

interface productTags {
  data: tagsInfo[];
}

interface tagsInfo {
  id: number;
  attributes: tagsAttributes;
}

interface tagsAttributes {
  type: string;
}

interface productImage {
  data: imagesInfo;
}

interface imagesInfo {
  id: number;
  attributes: imagesAttributes;
}

interface imagesAttributes {
  url: string;
}

export interface resumeActionOrderType {
  data: productOrderType;
}

export interface productOrderType {
  id: number;
  name?: string;
  price?: number;
  image?: string;
  amount?: number;
}

export interface order {
  user: userOrderType;
  products: productOrderTypeToFetch[];
  address: registrationType;
  payment: string;
  total: number;
  createdAt?: string;
}

interface userOrderType {
  name: string;
  email: string;
}

export interface productOrderTypeToFetch {
  coffeeId: string;
  price: number;
  amount: number;
}

export interface registrationType {
  username?: string;
  email?: string;
  cep: string;
  rua: string;
  numero: string;
  complemento: string;
  bairro: string;
  cidade: string;
  uf: string;
  payment?: string;
}

export interface ProductCardProps {
  id: number;
  data: productAttributes;
}

export interface successOrderInfo {
  id: number;
  attributes: order;
}

export interface headerPinAddressType {
  cidade: string;
  estado: string;
}
