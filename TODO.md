# TODO: Correct All Errors in Project

## Step 1: Rename User service class to UserService ✅
- File: ProjetGit/src/app/services/user.ts
- Change class name from 'User' to 'UserService'

## Step 2: Update import in users component ✅
- File: ProjetGit/src/app/components/users/users.ts
- Change import from 'UserService' to match new class name (already correct)
- Add OnInit interface to the class

## Step 3: Fix import paths in components ✅
- File: ProjetGit/src/app/components/cart/cart.ts
- Change import from '../../services/cart' to '../../services/cart.service' (corrected to '../../services/cart')
- File: ProjetGit/src/app/components/product-list/product-list.ts
- Change import from '../../services/product' to '../../services/product.service' (corrected to '../../services/product')

## Step 4: Remove unnecessary NgModule from app.ts ✅
- File: ProjetGit/src/app/app.ts
- Remove the NgModule decorator and related code, keep only the standalone component

## Step 5: Correct brand value in product data ✅
- File: ProjetGit/src/app/services/product.ts
- Fix brand for product id 9 from 'Paradoxe Intense' to 'Prada'

## Step 6: Followup - Run and test
- Run the Angular project to check for compilation errors
- Test application functionality
