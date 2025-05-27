/**
 * Central export point for all API classes and core Context.
 * Usable for easy imports in client code, e.g.:
 *
 * import { User, Cart, AuthClassic } from './api';
 */

import User from './api/user';
import Accessibility from './api/accessibility';
import Discounts from './api/cart/discounts';
import Cart from './api/cart';
import Referrals from './api/referrals';
import Categories from './api/categories';
import ProductsAuthorized from './api/products/authorized';
import ProductsForGuest from './api/products/guest';
import Announcement from './api/cms/announcement';
import Pages from './api/cms/pages';
import Profile from './api/cms/profile';
import Staff from './api/cms/staff';
import Settings from './api/cms/settings';
import Patrons from './api/cms/patrons';
import Payment from './api/payment';
import AuthClassic from './api/auth/classic';
import AuthMinecraft from './api/auth/ingame/minecraft';
import AuthDiscord from './api/auth/discord';
import Context from './core/context';

export {
    AuthClassic,
    AuthMinecraft,
    AuthDiscord,
    User,
    Accessibility,
    Discounts,
    Cart,
    Referrals,
    Categories,
    ProductsAuthorized,
    ProductsForGuest,
    Announcement,
    Pages,
    Profile,
    Staff,
    Settings,
    Patrons,
    Payment,
    Context,
};
