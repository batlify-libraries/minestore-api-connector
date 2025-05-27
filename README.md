# minestore-api-connector

A TypeScript API client library for interacting with the Minestore webstore backend.  
Provides classes to manage users, authentication, cart, products, payments, and more.

---
## Installation

npm:

```bash
npm i @batlify/minestore-api-connector
```

yarn:

```bash
yarn add @batlify/minestore-api-connector
```

pnpm:

```bash
pnpm add @batlify/minestore-api-connector
```

---

## Library Overview

### AuthClassic
- `login(username: string): Promise<{status: string, username?: string, token?: string}>`  
  Logs in a user using classic username authentication.  
  **Note:** Authorization token is not required.

---

### AuthMinecraft
- `init(username: string): Promise<any>`  
  Initializes Minecraft in-game authentication.
- `check(username: string): Promise<any>`  
  Checks Minecraft in-game authentication status.  
  **Note:** Authorization token is not required.

---

### AuthDiscord
- `getUrl(): Promise<{url: string}>`  
  Gets OAuth URL for Discord login.  
  **Note:** Authorization token is not required.

---

### User
- `getUser(token: string): Promise<any>`  
  Retrieves the currently logged-in user's data.  
  **Note:** Authorization token is required.

---

### Accessibility
- `check(): Promise<any>`  
  Checks website accessibility for user's IP/country.  
  **Note:** Authorization token is not required.

---

### Discounts
*(Submodule for cart discounts, detailed functions as implemented)*

---

### Cart
- `getCart(token: string): Promise<any>`  
  Gets the current cart data.
- `isCartEmpty(token: string): Promise<boolean>`  
  Checks if the cart is empty.
- `addPackage(token: string, id: string, promoted: boolean, payment_type: boolean): Promise<any>`  
  Adds a package to the cart.
- `removePackage(token: string, id: string): Promise<any>`  
  Removes a package from the cart.
- `quantityPackage(token: string, id: string, quantity: number): Promise<any>`  
  Updates package quantity in the cart.
- `pricePackage(token: string, id: string, price: number): Promise<any>`  
  Updates package price in the cart.
- `variablePackage(token: string, id: string, variable: number, value: string): Promise<any>`  
  Updates package variable in the cart.
- `selectServerPackage(token: string, id: string, server: number): Promise<any>`  
  Selects a server for the package.
- `getSelectableServers(token: string): Promise<any>`  
  Retrieves list of selectable servers.
- `checkStatus(orderId: string): Promise<any>`  
  Checks payment status by order ID.  
  **Note:** Authorization token is not required.

---

### Referrals
- `apply(code: string, token: string): Promise<any>`  
  Applies a referral code to the user's cart.
- `remove(token: string): Promise<any>`  
  Removes the referral code from the cart.

---

### Categories
- `get(): Promise<any>`  
  Retrieves the list of product categories.  
  **Note:** Authorization token is not required.

---

### ProductsAuthorized
- `get(token: string, id: string): Promise<any>`  
  Gets product details by ID (authorized user).
- `getFromCategory(token: string, path: string): Promise<any>`  
  Gets products by category path (authorized user).
- `getFeatured(token: string): Promise<any>`  
  Gets featured/highlighted products.  
  **Note:** Authorization token is required.

---

### ProductsForGuest
- `get(id: string): Promise<any>`  
  Gets product details by ID without authorization (guest access).

---

### Announcement
- `get(): Promise<any>`  
  Retrieves site announcements.  
  **Note:** Authorization token is not required.

---

### Pages
- `get(path: string): Promise<any>`  
  Retrieves page content by URL path.  
  **Note:** Authorization token is not required.

---

### Profile
- `get(username: string): Promise<any>`  
  Retrieves user profile by username.  
  **Note:** Authorization token is not required.

---

### Staff
- `get(): Promise<any>`  
  Retrieves list of staff members.  
  **Note:** Authorization token is not required.

---

### Settings
- `get(): Promise<any>`  
  Retrieves webstore settings.  
  **Note:** Authorization token is not required.

---

### Patrons
- `get(): Promise<any>`  
  Retrieves list of patrons/supporters.  
  **Note:** Authorization token is not required.

---

### Payment
- `getMethods(token: string): Promise<any>`  
  Gets available payment methods.
- `create(token: string, data: any): Promise<any>`  
  Creates a payment with provided data.

---

### Context
Base class providing the generic `request` method for API calls with optional authorization and error handling.

---

## Usage Example

```ts
import { AuthClassic, User } from '@batlify/minestore-api-connector';

const auth = new AuthClassic();
const loginResponse = await auth.login('myusername');

if (loginResponse.status === 'success') {
  const user = new User();
  const userData = await user.getUser(loginResponse.token);
  console.log(userData);
}
