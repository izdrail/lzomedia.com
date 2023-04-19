---
title: Learn how to build a Raspberry Pi IoT Gateway
publishDate: 2023-19-04 00:00:00
img: https://i.imgur.com/aGXFip9.jpg
img_alt: Laravel Design Patterns
description: |
  Build your own raspberry pi gateway with lora wan and the console thing oof network. 
tags:
  - LoraWan
  - Raspberry Pi
  - IoT
  - LoRa
  - Gateway
  - Sensors
  - Console Thing
---


# IOT Raspberry Pi Gateway & Sensors

LoRaWAN is a wireless communication protocol used for Internet of Things (IoT) devices. It operates in the unlicensed radio spectrum, making it ideal for low-power, low-cost, and long-range communication. To establish a LoRaWAN network, you need to have a gateway that acts as a bridge between the devices and the internet. In this DIY article, we'll show you how to integrate your own LoRaWAN gateway.

Before we get started, let's talk about the hardware and software requirements. You'll need the following:

This article is based on the RAK2245 Pi HAT, but you can use any LoRa concentrator board that is compatible with the Raspberry Pi.


# Hardware:

* Raspberry Pi (version 3 or later)
* LoRa concentrator board (e.g., RAK2245 Pi HAT)
* Antenna (e.g., a 868 MHz or 915 MHz antenna depending on your region)
* Power supply (e.g., a 5V 2.5A micro-USB power supply)
* Ethernet cable (to connect the gateway to your router)

# Software:
* Operating system: Raspberry Pi OS (32/64-bit) - depends on your Raspberry Pi version
* Image writer: Etcher
* Gateway software: https://github.com/RAKWireless/rak_common_for_gateway

#### Step 1: Install the operating system following their documentation
#### Step 2: The gateway software is already installed on the image, but you need to configure it.
#### Step 3: Configure the gateway software
#### Step 4: Connect the gateway to your router
#### Step 5: Connect the gateway to the console thing network

Following this [PDF helped me](https://drive.google.com/file/d/1PYn1lw4enTvPQeUZq0vigTpBxVR65NBf/view?usp=sharing)



# Sensors
I've used the following sensors:
* Heltec AB02S

For documentation on how to get setup, follow here [Cubecell documentation](https://docs.heltec.org/en/node/cubecell/index.htmlhttps://docs.heltec.org/en/node/cubecell/index.html)



For doing this, I will use the Arduino IDE & The console for the things of network.
You will need an account to get all the api keys and stuff.
Then you will have to burn the sensors with the arduino code and all the api eys accordingly.
![Image](https://i.imgur.com/vdyo76H.png)

I've attached the arduino code to the sensors. in this repo [iot-gateway](https://cornatul/io-gateway) it's quite simple
it's a good starting point.

![Sensor](https://i.imgur.com/K2jF85x.jpg)


https://github.com/cornatul/iot-gateway


# What I've wanted to achieve
I've wanted to test the range of the sensors and the gateway.
I've placed the gateway in my house and the sensors outside.
I've placed the sensors in a tree and even walk for a distance the max range that I've got with this setup


# Extra stuff
I've used a LED IP66 because it had a setup a battery storage and a solar panel to power the gateway and my phone for the sensor.

![Full Setup](https://i.imgur.com/aGXFip9.jpg)


For the sensor, I decided to use a battery storage because my plan is to have this studying moving objects.
For now, I've tested using my phone-charging port to power the sensors.

[picture here of the sensor setup]


# Testing
I've placed the gateway in my house and placed the sensor in random places.
[insert picture setup of the sensor outside]


## Test 1 —I've added the sensor in a tree
Over a distance of 50 yards I've got a signal and maged to transmit data without any problems.

![](https://i.imgur.com/2eQf20J.jpg)

## Test 2 - Testing long range
For this, I've left the gateway in my house and walked around the street using my watch to track my distance and my route to see how far I can get with the sensors.
The most I've got was 1.5 miles away from the gateway.

# Future plans
* Test this in an open field and see how far I can get with the sensors since this is a portable system that can work in a open field.
* Place this on a pole at the end of my street and see how far I can get with the sensors.
* Test the sensors in a forest and see how far I can get with the sensors.
* Test the sensors in a mountain and see how far I can get with the sensors.
* Study how I can use this in industrial environment for tracing indoor vehicles.
* Implement more sensors like temperature, humidity, air pressure,  etc.
* Implement a camera to the sensors to see what's going on in the environment.
* Implement a microphone to the sensors to hear what's going on in the environment (I saw IBM has interesting tech when it comes to IOT)
  git remote add origin git@github.com:Cornatul/iot-gateway.git

## What I've achieved
A working gateway and sensors that can transmit data over a long range.
This can be used in tons of different applications like:
* Monitoring animals
* Monitoring plants
* Monitoring weather
* Monitoring people
* Monitoring objects
* Monitoring industrial vehicles & equipment

## Share the love and share this article with your friends and colleagues.
## If you have any questions or interested in building one yourself, let me know via email.
