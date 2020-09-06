import { giftOptionsResolvers } from '@magento/venia-ui/lib/components/CartPage/PriceAdjustments/GiftOptions/giftOptions.gql';
import { paymentInformationResolvers } from '@magento/venia-ui/lib/components/CheckoutPage/PaymentInformation/paymentInformation.gql';
import { mockedDataResolvers } from '@marcinkwiatkowski/mock-component-plugin/lib/queries/mocked-operations.gql';
/**
 * Type resolvers are merged by the client so spread each resolver into a
 * separate object.
 *
 * NOTE: Be careful not to overwrite type properties. For example, suppose two
 * resolvers are spread into the array resulting in the following. "foo" will be
 * overwritten while "bar" and "baz" will not be.
 *
 * [
 *   { // From Component A resolvers
 *     Query: {
 *       foo: () => { return 1; }
 *       bar: () => { return 2; }
 *     }
 *   },
 *   { // From Component B resolvers
 *     Query: {
 *       foo: () => { return 3; }
 *       baz: () => { return 4; }
 *     }
 *   }
 * ]
 */

export default [
    { ...paymentInformationResolvers },
    { ...giftOptionsResolvers },
    { ...mockedDataResolvers }
];
