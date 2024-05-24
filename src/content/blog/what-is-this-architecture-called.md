# What is this architecture called?

I rarely see the classical three-tier architecture in the wild; I frequently see a different architecture.


I don't know this architecture's name. Do you?


## The Three-Tier Architecture

The "three-tier architecture" has been the reference pattern for Internet services:


1. Presentation Tier (Client)
2. Logic Tier (Server)
3. Data Tier (Database)


![A diagram of the Three Tier Architecture](/quad/bc2351e2df4a4a815f8e0d19f36cfa80/raw/1-three-tier.png)


If I say "REST, application server and ORM, and SQL" and you're nodding your head, then we're on the same page. Replace "REST" with "GraphQL" or "gRPC"; "ORM" with "type-safe queries"; "SQL" with "non-relational" and you're ready to work at Big Tech.


## The Unnamed Architecture

I rarely see the classical three-tier architecture in the wild. The pattern I often see looks different:


1. Presentation Tier (Client)
2. (External Services)
3. Application Tier (Requests)
4. Worker Tier (Tasks)
5. Data Tier (Database)


![A diagram of the Unnamed Architecture](/quad/bc2351e2df4a4a815f8e0d19f36cfa80/raw/1-unnamed.png)


My understanding of what makes a "tier" a tier is that a tier can be developed and operated independently. As such, I've split the logic tier into separate application and worker tiers because:


* Their responsibilities are different; responding to a client vs. reliably completing a task (functional separation)
* Their resources are independently managed; storage, compute, and network (physical separation)
* Their programming models are not the same; synchronous vs. asynchronous (logical separation)
* Their staffing needs are unique; frontend vs. backend (organisational separation)


Moreover, in my experience, most often it's tasks that are pulled out into new services by new teams formed to run them.


### Requests vs. Tasks

This is a prototypical request:



```
@app

.route

("/"

)


def

 hello\_world

():
  return

 "<p>Hello, World!</p>"


```
Because all state and resources are released at the end of a request, the program running this code is trivial to horizontally scale— that is, we need only to run more copies on more computers to get more throughput. Is it Black Friday? Add more compute and network. Is it Sunday? Scale to zero.


And this is a prototypical task:



```
class

 NewsletterTask


  max\_attempts

 3



  def

 run

(

text

,

 email

)


    Mailer

.

deliver\_text\_to\_email

(

text

,

 email

)


  end


end



Customers

.

pluck

(

:email

)

.

each

 do

 |e

|
  Task

.

enqueue

 NewsletterTask

,


    text

: 'lorem ipsum...'

,


    email

: e


end


```
A task carries both state and code and has its own lifecycle. In this case, the task is to deliver a newsletter email. If it doesn't succeed after three attempts, then the task will fail. But every good task queue1 also has the ability to retry a task.


For example, perhaps our mail server was down yesterday, and now it's back up? There are 100 million potential customers patiently waiting to be spammed; we'll add more compute and clear the backlog before lunch.


## Wait, it's all three-tier?

One part of me says, "the first diagram is the bedtime story; the second diagram is the war story." The second diagram grows out of building and scaling the first diagram. Moreover, the second diagram elides other gory details like caches, load balancers, and queues.


The part of me asking the question responds:


* The logic tier's server quickly bifurcates into two2 categories of hot paths:
	1. Requests that mostly do three things:
		1. Query databases
		2. Start tasks
		3. Respond to the client
	2. Tasks that ensure work gets done!
* And so money is spent (re)inventing safe and reliable task systems, with a skill tree like:
	+ Task queues
	+ Distributed schedulers
	+ (Handcrafted state machines, the Saga pattern)
	+ Durable execution frameworks


## The Starbucks Architecture?

Generations ago, in Internet-time, Starbucks Does Not Use Two-Phase Commit went viral in my part of the programming world. In it, Gregor Hohpe uses what happens after ordering a coffee as an analogy for distributed systems design. I (and others) think the metaphor goes deeper.


Front and Back of house (FOH / BOH) both map directly to Frontend and Backend:


* Customer admission control, load balancing between servers, request / response, information design, payments…
* Queues are used everywhere
	+ … with the accompanying criticality of capacity planning and backlogs
	+ … and the capability to bypass, in case of an emergency
* Front cares about quality of the experience; Back care about quality of the product
* Front is stereotyped as more presentable to the general public than Back
* Brigade de cuisine
* "We need to scale up our service to support another order of magnitude for the Christmas season"\

—"Sir, this is a Wendy's."
* "Chefs are too highly paid to unionise"
* 99% of restaurants fail
* Where the most left-leaning workers are found
* Owners are either absentee or micromanaging
* AWS is a ghost kitchen company


But, more seriously, even the smallest food service operation specialise their FOH and BOH roles. Their functional and non-functional requirements have little overlap! And their techniques, tools, platforms, and frameworks specialise with scale.


As an aside, I couldn't find a name for hospitality or restaurant management's FOH / BOH meta-pattern either.


So, what's this architecture called? Is it even a single architecture?


(Thanks to Alec Thomas for his feedback. Lobste.rs thread.)



