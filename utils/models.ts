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

  export interface productOrderType {
    id: number,
    name: string,
    price: number,
    amount: number,
  }