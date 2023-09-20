---
title: Working with Folders in Python
publishDate: 2023-20-04 00:00:00
img: https://static-assets.codecademy.com/assets/course-landing-page/meta/16x9/learn-python-3.jpg
img_alt: python folders
description: |
  Working with file and folder paths in Python might feel like searching for treasure in a maze sometimes. But fret not, brave coder! Python has got your back with a couple of nifty packages to rescue you from path-puzzlement! 
tags:
  - Python
  - Folders
  - Path
  - OS
---



Working with file and folder paths in Python might feel like searching for treasure in a maze sometimes. But fret not, brave coder! Python has got your back with a couple of nifty packages to rescue you from path-puzzlement!

So, sharpen your swords and let's embark on this path-expanding adventure together!

## Expanding the User with os.path

Behold the magic in just three lines of Python wizardry:

```python
>>> import os
>>> os.path.expanduser("~/test.log")
'/Users/mike/test.log'
```

Here, we're taking a path that starts with a tilde (~) and expanding it using **os.path.expanduser()**. Say goodbye to cryptic tildes!

## Expanding the User with pathlib

Now, let's level up our path-expanding game with pathlib instead of os.path!

Check out this incantation:

```python
>>> from pathlib import Path
>>> p = Path("~/test.log")
>>> p.expanduser()
PosixPath('/Users/mike/test.log')
```
The main difference here is that we're crafting a magical **Path()** object. Once you have that, you can simply summon the **expanduser()** method to work its enchantment!

The **pathlib module** is like a treasure chest full of magical methods. For instance, if you only need the current user's home folder, you can use the home() method:

```python
>>> p.home()
PosixPath('/Users/mike')
```
Now you're armed and ready to venture forth and explore the world of expanding environment variables!

## Expanding Environment Variables with os.path

Each operating system has its own set of environment variables waiting to be tapped into. To discover this hidden bounty, take a peek into os.environ.

Here's a glimpse from the author's secret scrolls:

```python
>>> import os
>>> os.environ
environ({'SECURITYSESSIONID': '186a4', 'USER': 'mike', ... (a bunch of other mystical variables) ...})
```
With this knowledge in your arsenal, let's try expanding a couple of these magical variables mentioned above:

```python
>>> os.path.expandvars("$TMPDIR")
'/var/folders/2q/yhh5dc6n367gftpg043m0x3r0000gn/T/'
>>> os.path.expandvars("$PATH")
'/opt/homebrew/bin:/opt/homebrew/sbin:/Library/Frameworks/Python.framework/Versions/3.11/bin:/usr/local/bin:/System/Cryptexes/App/usr/bin:/usr/bin:/bin:/usr/sbin:/sbin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/local/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/appleinternal/bin'
```
Now, try it on your machine. If it doesn't work, consult your own version of os.environ to ensure you call upon the correct incantations.

Unfortunately, pathlib doesn't have the spell book for expanding environment variables. Stick to os.path for that potion.

When you find yourself tangled in the labyrinth of file and folder paths, remember the powerful incantations of os.path and the mystical spells of pathlib. Most modern Python wizards prefer pathlib, as it's the newer and shinier wand, making some things easier. However, don't banish os.path to the dungeons of history, for you may encounter it in legacy scrolls. Happy coding, fellow adventurer!
