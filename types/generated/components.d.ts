import type { Schema, Attribute } from '@strapi/strapi';

export interface CostCost extends Schema.Component {
  collectionName: 'components_money_costs';
  info: {
    displayName: 'cost';
    description: '';
  };
  attributes: {
    totalAmount: Attribute.Component<'total-amount.total-amount'>;
    totalTaxAmount: Attribute.Component<'total-tax-amount.total-tax-amount'>;
  };
}

export interface MerchandiseMerchandise extends Schema.Component {
  collectionName: 'components_merchandise_merchandises';
  info: {
    displayName: 'merchandise';
  };
  attributes: {
    title: Attribute.String;
    selectedOptions: Attribute.String;
    products: Attribute.Relation<
      'merchandise.merchandise',
      'oneToMany',
      'api::product.product'
    >;
  };
}

export interface MoneyMoney extends Schema.Component {
  collectionName: 'components_money_monies';
  info: {
    displayName: 'money';
  };
  attributes: {
    amount: Attribute.Decimal;
    currencyCode: Attribute.String;
  };
}

export interface PriceRangePriceRange extends Schema.Component {
  collectionName: 'components_price_range_price_ranges';
  info: {
    displayName: 'Price Range';
    description: '';
  };
  attributes: {
    maxVariantPrice: Attribute.Component<'money.money'>;
    minVariantPrice: Attribute.Component<'money.money'>;
  };
}

export interface SeoSeo extends Schema.Component {
  collectionName: 'components_seo_seos';
  info: {
    displayName: 'seo';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.String;
  };
}

export interface TotalAmountTotalAmount extends Schema.Component {
  collectionName: 'components_total_amount_total_amounts';
  info: {
    displayName: 'totalAmount';
  };
  attributes: {};
}

export interface TotalTaxAmountTotalTaxAmount extends Schema.Component {
  collectionName: 'components_total_tax_amount_total_tax_amounts';
  info: {
    displayName: 'totalTaxAmount';
  };
  attributes: {};
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'cost.cost': CostCost;
      'merchandise.merchandise': MerchandiseMerchandise;
      'money.money': MoneyMoney;
      'price-range.price-range': PriceRangePriceRange;
      'seo.seo': SeoSeo;
      'total-amount.total-amount': TotalAmountTotalAmount;
      'total-tax-amount.total-tax-amount': TotalTaxAmountTotalTaxAmount;
    }
  }
}
