---
layout: analysis
coin: perlin
tldr: "Decentralized Cloud Computing"
score: 0
researcher: thellimist
date: 2018-07-14
conclusion: "The review is too early to be useful. Need to check Perlin again when there is more information."
---

The review is based only on a draft [whitepaper](https://s3.amazonaws.com/perlin-launch-whitepaper/PerlinWhitepaper.pdf). 

Perlin is comprised of three categories of parties: validators, miners, and customers. Any given
party may choose to belong to more than one category at any point in time.


**Miners**. Miners are suppliers of compute power within the network, providing customers compute
power for the execution of a wide variety of computational tasks. Miners supply compute
power by spawning a virtual machine instance with a specied set of resources a miner wishes
to reserve for potential customers. Once a virtual machine instance is created, miners broadcast
their compute supply on Perlin's market in terms of their reserved RAM capacity and CPU clock
frequency. Should any computational task be open on the market requiring resource specications
equivalent to or less than a miner's provisioned resources, miners may choose to register to work on
said computational task. Miners are paid out based on both how long they rent out their compute
supply and how powerful their compute supply is.

**Customers**. Customers register computational tasks onto the network with a xed pool of perls
to be paid out to miners. Customers specify both the bare minimum and cumulative total set
of resources required from miners looking to work on a supervisor's submitted tasks in terms of
both RAM capacity and CPU clock frequency. Customers access a miner's virtual machine instance
through SSH, and are responsible for coordinating, supervising, and executing computational tasks
on the virtual machine instance of a miner. Through the use of the Perlin SDK, customers can
easily program decentralized applications and computational tasks powered by rented miner virtual
machine instances using a wide number of programming languages.

**Validators**. Validators come to consensus and log transactions made between miners and customers
through a distributed ledger. Validators are elected through a rotating quorum mechanism
in which candidates from a pool of candidate validators are probabilistically more likely to be
elected should they stake greater amounts of perls than other candidate validator. Validators benet
from taking a commission in the form of a transaction fee from every single transaction they
verify and broadcast from miners or customers. Transaction fees for each transaction are determined
by the customer sending the transaction, and hence are incentives for a validator to quickly
validate and broadcast the transaction across the network. Elections for choosing validators out
of a candidate pool of validators occur at a timely basis roughly equivalent to 1 minute.

Additionally, Perlin has an easy to use Go library for P2P communication. 