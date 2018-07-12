---
layout: analysis
coin: dadi
tldr: "Distributed Cloud Computing and Storage (AWS competitor)"
score: 0
researcher: thellimist
date: 2018-07-09
conclusion: "They are competing with really big players and they haven’t shown 10x improvement. DADI might succeed moderately but I don’t think it’ll be a billion dollar company. "
---

- Dadi is in Cloud Computing market thus tries to be a competitor to AWS, Google Cloud etc. 
- It has 2 different actors: customers and contributors
- The customer is the one who pays contributors to host their content.
- Stargate, Gateway, Host are different ways a person or a company can be a contributor
- Stargate is will be a limited number. Computers with Stargate title are high powered high bandwidth. They do the same as tasks as a Gateway additinally it deals with consensus and  with DNS. These actors will be selected by DADI Team.
- Gateway can be thought like a load balancer but it's not. The hosts pull the request from a queue inside Gateway. 
- Host is the minicomputers which do most of the processing. Hosts may have min 20% uptime.
- Everything runs in Docker containers encrypted on Host machines.
- Dadi does not use Blockchain or DHT for storage of computation. They have their own system with load balancers. The blockchain is only used for the payments system. Users can stake their tokens to be a Host, Gateway, Stargate. There are systems like Proof of Availability to track the uptime of these actors and give payment accordingly. 
- The DADI foundation earns 5% of the networks' revenue.
- Dadi Team has control over the whole system. 
- The code for Host, Gateway, Stargateway are all closed sourced. 
- DADI token is an ERC20 token used for staking and rewarding. 
- The total revenue of the system will be divided among all the actors based on their uptime and a few more parameters.
- To check whether a host is computing correctly, they introduced a trust-based hierarchy. Peer reviews are carried out regularly to compare results. If a machine is incorrectly responding to a request, whether because of an internal failure or a potential violation, trust is reduced. 
- The foundation mentioned they have $180k in revenue yearly. DADI token market cap is $10M where 20% of the tokens belong to the team thus $8M is the amount that has been staked to earn $180k revenue. Not a good business to be in as a Host, however, if the actors have extra capacity and bandwidth thus it's free money for them. It's actually a nice ROI. There are other projects which target extra bandwidth, CPU, storage of users. I'm not sure if DADI will be profitable compared to others. One should research their if they have spare resources to lend. DADI might be a good opportunity but there might be better opportunities. 
- It doesn’t work with every language or stack however they may support it in the future.
- They have designed it simple enough. Just follow the tutorial. It also uses NPM packages which makes installing simple as well. 
- They have well-written documentation on a lot of different topics including migrating old system. 
- The website owner can pay end of the month via BTC, ETH, Fiat or DADI. The DADI Team (DADI Cloud Limited) has an internal exchange converts the payment to DADI tokens and distributes to the stakeholders. This is another centralized element.
- The team looks capable of what they are trying to achieve.

 Pros

- They are working well. Technology design, design, tools, libraries, website, and support are all A level. I want to emphasize this more. The results are amazing. 
- They have been working for 4 years
- They already have customers and revenue
- The market they tackle is huge. 
- They have entered the market from the correct niche. CDN. Although it looks like their revenues are more from websites. This might need to be checked. 
- Rather than making a fully centralized system, they have used blockchain and contracts to guarantee that DADI will not have power to change the revenue of their contributors.

 Cons

- DADI Cloud Limited is a company. Resources hosted on Dadi network can be removed by DADI
- DADI is not trustless, it’s not permisionless. It’s not a platform for dApps.
- The market is too crowded. Competing with tech giants like Google, Microsoft and Amazon are hard. They claim they’ll be 10x cheaper. Actually, they have tested with a customer of theirs and the result was %60 cheaper, ~2x cheaper. I’m still skeptical. The project hasn’t scaled yet. If they can achieve the order of magnitude difference, they can disrupt the market like AirBnB did. 
- $8M / $180k = ~40 years for ROI. Hosts should only be people with extra bandwidth and computation. It’s not worth to open a dedicated system for this ROI. These numbers will change a lot in the early days. Don’t take this as granted.
- The libraries they built are public on Github, however, Stargate, Gateway and Host code are not public. 

 Neutral

- Doesn’t actually need blockchain. They could’ve built the samething as how AirBnB built it. However, this is not an issue. The payment and staking attributes are on the blockchain. Non-trival parts are closed sourced, permissioned. 
- It’s not decentralized as in it’s not immutability, censorship-resistance, and permissionless. 
- There is a rumour of them plagiarizing SONM whitepaper in early 2018 and been criticized by the community. SONM and DADI overlap in a small portion of the market they are serving. The systems they built is not even close. 

 Other Questions

- Not sure if every website or system can be hosted on DADI. They claim they can do AI and machine learning apps as well. There probably is some limit where after some scale, and application can’t satisfy it’s use cases being Hosted on Dadi. The limit exists in all kinds of systems where access to the machine is limited (like Heroku)
