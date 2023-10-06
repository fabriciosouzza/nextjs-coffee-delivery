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
  products: productOrderTypeToFetch[];
  address: addressType;
  payment: string;
}

export interface productOrderTypeToFetch {
  coffeeId: string
  price: number
  amount: number
}

export interface addressType {
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