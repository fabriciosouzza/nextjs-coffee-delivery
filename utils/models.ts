export interface Product {
  id: number;
  attributes: ProductAttributes;
}

export interface ProductAttributes {
  name: string;
  description: string;
  tags: ProductTags;
  price: number;
  image: ProductImage;
}

export interface ProductTags {
  data: TagsInfo[];
}

interface TagsInfo {
  id: number;
  attributes: TagsAttributes;
}

interface TagsAttributes {
  type: string;
}

interface ProductImage {
  data: ImagesInfo;
}

interface ImagesInfo {
  id: number;
  attributes: ImagesAttributes;
}

interface ImagesAttributes {
  url: string;
}

export interface ResumeActionOrderType {
  data: ProductOrderType;
}

export interface ProductOrderType {
  id: number;
  name?: string;
  price?: number;
  image?: string;
  amount?: number;
}

export interface Order {
  user: UserOrderType;
  products: ProductOrderTypeToFetch[];
  address: RegistrationType;
  payment: PaymentProps;
  total: number;
  createdAt?: string;
}

interface UserOrderType {
  name: string;
  email: string;
}

export interface ProductOrderTypeToFetch {
  coffeeId: string;
  price: number;
  amount: number;
}

export interface RegistrationType {
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

interface PaymentProps {
  data: PaymentAttributes;
}

interface PaymentAttributes {
  id: number;
  attributes: PaymentData;
}

interface PaymentData {
  paymentForm: string;
}

export interface ProductCardProps {
  id: number;
  data: ProductAttributes;
}

export interface SuccessOrderInfo {
  id: number;
  attributes: Order;
}

export interface HeaderPinAddressType {
  cidade: string;
  estado: string;
}

export interface ProductPropsDataType {
  coffees: Product[];
}

export interface ProductTagsPropsDataType {
  tags: TagsInfo[];
}

export interface PaymentListProps {
  id: number;
  attributes: PaymentListAttributes;
}

interface PaymentListAttributes {
  paymentForm: string;
  icon: PaymentIconData;
}

interface PaymentIconData {
  data: PaymentIconProps;
}

interface PaymentIconProps {
  id: number;
  attributes: PaymentIconAttributes;
}

interface PaymentIconAttributes {
  url: string;
}
