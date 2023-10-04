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
  id: number;
  products: productOrderType[];
  address: addressType;
  payment: string;
}

export interface addressType {
  cep: number;
  rua: string;
  numero: number;
  complemento: string;
  bairro: string;
  cidade: string;
  uf: string;
}
