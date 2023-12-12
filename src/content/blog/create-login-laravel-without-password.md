---
title: Create a passwordless login with Laravel Breeze
publishDate: 2023-19-04 00:00:00
description: |
  Hey there, coding connoisseurs! Buckle up for a wild ride as we embark on a journey to create a web application that dances to the tunes of TypeScript and PHP. Welcome to the Angular and Laravel Extravaganza!
image: https://silvanhagen.com/content/images/2023/10/DALL-E-2023-10-27-16.08.48---Illustration-set-against-a-dark-green-background.-It-prominently-features-a-magician-s-hat-and-a-magic-wand-pointing-towards-a-computer-monitor.-The-m-1.png
tags:
  - Laravel
  - No Password
  - Breeze
  - Programming
  - Free
---

Hey there, coding connoisseurs! Buckle up for a wild ride as we embark on a journey to create a web application that dances to the tunes of TypeScript and PHP. Welcome to the Angular and Laravel Extravaganza!

For a project I'm working on, I wanted to implement password-less logins with a magic login link sent to your email instead. We are going to use the Laravel Breeze starter-kit and the Laravel Passwordless Login package by Ed Grosvenor.

## What you need

* A fresh local Laravel install
* A database for the project
* Some tool to capture emails for testing like HELO

## Install and configure Laravel Breeze

In your fresh Laravel install we are going to install Laravel Breeze next:


```
composer require laravel/breeze --dev
```
The next step will be installing breeze in your project. For the purpose of this tutorial we will be using the Laravel Livewire version of Breeze using the Volt Class based variant, but the changes should be adaptable for all flavors of the Breeze starter kit.

In your terminal type the following command and follow the instructions:


```
php artisan breeze:install
```
Next up let's run the migrations and check if Breeze is working as expected:


```
php artisan migrate
```
Next up go to your project and check that you can successfully register as a new user. For this navigate to `<project-url>/register` and fill out the form.

## Install and configure Laravel Passwordless Login

Before we bring it all together, we are going to install the Laravel Passwordless Login package by Ed Grosvenor.


```
composer require grosv/laravel-passwordless-login
```
That's it for this package, you can however adjust the settings in your `.env` file or publish and adjust the config.

## Create the magic login notification

For this, we are going to create an Event, a Listener and a Notification. The event and the listener will be added to the `EventServiceProvider` class.

### Create the Event

To create the `RequestMagicLoginLink` event, type the following in your terminal:


```
php artisan make:event RequestMagicLoginLink
```
This will generate the file `RequestMagicLoginLink.php` for you. Here is the content of the file:


### Create the Listener

Now that we created our event, we need to create an event listener that gets called whenever the `RequestMagicLoginLink` event occurs. Back to the terminal and type:


```
php artisan make:listener
```
When prompted, give it the name `SendMagicLoginLinkNotification` for example and select our previously created event as the event to listen for.

We now have a new file `SendMagicLoginLinkNotification.php` and we will add the following code to it:


### Create the Notification and method on the User model

![Screenshot of the magic login notification email](https://silvanhagen.com/content/images/2023/10/laravel-breeze-magic-login-email.png)Let's go ahead and create a new notification to actually send to our users. In your terminal type:


```
php artisan make:notification MagicLoginLink
```
This creates a new file `app/Notifications/MagicLoginLink.php` which we will fill with the following code:


Now we need to adjust the `User` model in order to send out the notification when the user requests the magic login link. In your user model add the following code:


### Make sure the EventServiceProvider knows

In your `EventServiceProvider.php` add the following snippet to the `$listen` array:


```
RequestMagicLoginLink::class => [
  SendMagicLoginLinkNotification::class,
],
```
Now the whenever a user requests a magic login link, the send magic login link notification will be fired.

## Adjust the login component

In order to use the passwordless login, we need to adjust the login component that shipped with Laravel Breeze. In my app I want users to exclusively login without a password. So here is the code for the `pages/auth/login.blade.php` file:


Compared to the original file, we changed quite a bit. Your login route will look something like this now:

![Screenshot of the changed login route](https://silvanhagen.com/content/images/2023/10/laravel-breeze-livewire-magic-login-link.png)So this is it. You now have Laravel Breeze configured in a way that instead of a password, users will get an email to login to their account, but wait there is more...

## Taking it further

For my project Wire in the Wild, a collection of Laravel Livewire projects, I require email verification and don't allow users to set a password at all. As this is quite long already, here are the steps you can take on your own in order to achieve this:

1. Make a migration to make the password field on the Users table nullable.
2. Change the User model to implement the `MustVerifyEmail` contract.
3. Alter the registration component to not require a password.
4. Let me know in the comments what you came up with or if you need more help to implement these changes.

