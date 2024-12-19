import {auth} from './api/auth';
import {user} from './api/user';
import {accessibility} from './api/accessibility';
import {discounts} from './api/cart/discounts';
import {cart} from './api/cart';
import {referrals} from './api/referrals';

async function main() {
    await auth.login('classic', 'sxagondev').then((r) => console.log("login", r));
    await auth.isLoggedIn().then((r) => console.log("isLoggedIn", r));
    //await auth.logout().then((r) => console.log(r));
    await user.getUser().then((r) => console.log("getUser", r));
    await accessibility.check().then((r) => console.log("checkAccessibility", r));
    await discounts.check('giftcard', '123456789').then((r) => console.log("giftcard check", r));
    await discounts.check('coupon').then((r) => console.log("coupon check", r));
    await discounts.apply('123456789').then((r) => console.log("apply giftcard", r));
    await discounts.remove('giftcard').then((r) => console.log("remove giftcard", r));
    await discounts.remove('coupon').then((r) => console.log("remove coupon", r));
    await cart.getCart().then((r) => console.log("getCart", r));
    await cart.addPackage('1', true, true).then((r) => console.log("addPackage", r));
    await cart.variablePackage('1', 1, 'test').then((r) => console.log("variablePackage", r));
    await cart.selectServerPackage('1', 8).then((r) => console.log("selectServerPackage", r));
    await cart.removePackage('1').then((r) => console.log("removePackage", r));
    await cart.quantityPackage('1', 2).then((r) => console.log("quantityPackage", r));
    await cart.pricePackage('1', 100).then((r) => console.log("pricePackage", r));
    await cart.getSelectableServers().then((r) => console.log("getSelectableServers", r));
    await referrals.apply('123456789').then((r) => console.log("apply referral", r));
    await referrals.remove().then((r) => console.log("remove referral", r));
}

main();