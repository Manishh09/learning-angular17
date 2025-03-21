## Angular 18 Features

### 1. Dependencies

1. TypeScript - `v5.4`
2. NodeJS - `v22`

### 2. Angular CLI

We have an alias for `ng serve` command which is `ng dev`
So `ng dev` should in turn , runs `ng serve`

### 3. New Build System

   - Available from `@angular/build` pkg
   - Does not require Webpack - works with `browser-esbuild` and `vite`

   - Here, `browser-esbuild` is the new build system and, `vite` is the tool for bundling

   - `Hint:` If you have migrated the angular project from `previous` versions to angular `v18` ,you might have encountered these changes.

   - Angular will automatically update the build system

   - `Question:` We know that Angular Unit tests are being run with `Karma Test Runner`. And Karma test runner needs `webpack` to be present. How will this be handled in `angular v18` and future angular versions ?

   - `Answer:` Yes. Webpack is indeed needed for Karma Test runner.

   - So, When you run unit tests, Angular will use `webpack`

   - But , when you run application in development mode, Angular will use new build system - `browser-esbuild`


   ### browser-esbuild

   * The `browser-esbuild` builder builds only the client-side bundle of an application designed to be compatible with the existing `browser` builder that provides the preexisting build system.
   * This builder provides equivalent build options, and in many cases, it serves as a drop-in replacement for existing browser applications.




   ### Previous: build system is `browser`

   ```typeScript
       "architect": {
       "build": {
           "builder": "@angular-devkit/build-angular:browser",
       ...
   ```

   ### Current build system is `browser-esbuild`

   A builder named `browser-esbuild` is available within the `@angular-devkit/build-angular` package that is present in an `Angular CLI generated` application. 
     ```typeScript
       "architect": {
       "build": {
           "builder": "@angular-devkit/build-angular:browser-esbuild",
       ...
     ```


   ### Build system for newly created angular apps is `application`

   * Available from new angular applications
     
   * A builder named `application` is also available within the `@angular-devkit/build-angular` package that is present in an Angular CLI generated application.
     
   * This builder is the `default` for all new applications created via `ng new` command using Angular CLI.

   * Note: the new build system is `application` which supports current and new features like server side rendering apps

   * If your application `do not` features the ssr then you can stick with the build system as `esbuild` or `browser-esbuild`


### 4. Defer API is stable

  * Tells when the content is loaded based on a certain condition

  * Syntax:
  
  ```typescript
    @defer(<trigger>){
      // components
    }
    @placeholder(minimum 1s) {
      // rendered before defer block's content got rendered
    }
    @loading() {
      // show loading indicator while deferred content is loading
    }
    @error() {
      // error message if any error occurred while defer content is loading
    }

  ```

  * If we add a `defer` block -> It will create a lazy chunk file separate from the main bundle of the app.
  * Reduces the initial load time.

  * By default applies the `on idle` trigger
  
  **triggers**: 

  * on viewport
  * on timer
  * on hover
  * on interaction
  * when <a condition>