import * as Types from '../types';

type DefinedFields = {
  Paypal: 'id' | 'url';
  CreditCard: 'id' | 'cardNumber' | 'cardOwner';
  Donation: 'id' | 'sender' | 'recipient' | 'amount';
  Mutation: 'donate';
  User: 'paymentOptions';
};

export type Paypal = Pick<Types.Paypal, DefinedFields['Paypal']>;
export type CreditCard = Pick<Types.CreditCard, DefinedFields['CreditCard']>;
export type PaymentOption = Types.PaymentOption;
export type User = Types.User;
export type Donation = Pick<Types.Donation, DefinedFields['Donation']>;
export type DonationInput = Types.DonationInput;
export type Mutation = Pick<Types.Mutation, DefinedFields['Mutation']>;

export type PaypalResolvers = Pick<Types.PaypalResolvers, DefinedFields['Paypal']>;
export type CreditCardResolvers = Pick<Types.CreditCardResolvers, DefinedFields['CreditCard']>;
export type DonationResolvers = Pick<Types.DonationResolvers, DefinedFields['Donation']>;
export type MutationResolvers = Pick<Types.MutationResolvers, DefinedFields['Mutation']>;
export type UserResolvers = Pick<Types.UserResolvers, DefinedFields['User']>;

export type Resolvers = {
  Paypal: PaypalResolvers;
  CreditCard: CreditCardResolvers;
  Donation: DonationResolvers;
  Mutation: MutationResolvers;
  User: UserResolvers;
};
