---
layout: analysis
coin: dadi
tldr: "Distributed Cloud Computing and Storage (AWS competitor)"
score: 0
researcher: thellimist
date: 2018-07-09
conclusion: "They are competing with really big players and they haven’t shown 10x improvement. DADI might succeed moderately but I don’t think it’ll be a billion dollar company. "
---

- Dadi tries to be a competitor to AWS
- It has 4 different actors, website owner, stargate, gateway, host. A company or a person can be any of these or all. 
- The website owner is the one who pays others to host their content.
- Stargate is will be a limited number. Computers with Stargate title are high powered high bandwidth. They are the same as  Gateway with DNS. There actors will be selected by DADI Foundation.
- Gateway can be thought like a load balancer but it's not. The hosts pull the request from a queue inside Gateway. 
- Host is the minicomputers which do most of the processing. Hosts may have min 20% uptime.
- Everything runs in Docker containers encrypted on Host machines.
- Dadi does not use Blockchain or DHT for storage of computation. They have their own system with load balancers. The blockchain is only used for the payments system. Users can stake their tokens to be a Host, Gateway, Stargate. There are systems like Proof of Availability to track the uptime of these actors and give payment accordingly. 
- Dadi Foundation is a centralized company who has control over the whole system. The foundation earns 5% of the networks' revenue.
- DADI token is an ERC20 token used for staking and rewarding. 
- The total revenue of the system will be divided among all the actors based on their uptime.
- The foundation mentioned they have $180k in revenue yearly. DADI token market cap is $10M where 20% of the tokens belong to the team thus $8M is the amount that has been staked to earn $180k revenue. Not a good business to be in as a Host, however, if the actors have extra capacity and bandwidth thus it's free money for them. It's actually a nice ROI. There are other projects which target extra bandwidth, CPU, storage of users. I'm not sure if DADI will be profitable compared to others. This might need extra research.
- It doesn’t work with every language or stack however they may support it in the future.
- They have designed it simple enough. Just follow the tutorial. It also uses NPM packages which makes installing simple as well. 
- They have well-written documentation on a lot of different topics including migrating old system. 
- The website owner will pay end of the month via BTC, ETH, Fiat or DADI. The DADI foundation converts the payment to DADI tokens and distributes to the stakeholders. This is another centralized element.
- The team looks good at first glance. Might need more research.

 Pros

- They are working well. Technology design, design, tools, libraries, website, and support are all A level. I want to emphasize this more. The results are amazing. 
- They have been working for 4 years
- They already have customers and revenue
- The market they tackle is huge. 
- They have entered the market from the correct niche. CDN. Although it looks like their revenues are more from websites. This might need to be checked. 

 Cons

- It has to obey deal with a legal stuff. This is a con compared to other distributed competitors but it’s not a con compared to other cloud computing platforms.
- Doesn’t actually need blockchain. However, this is not a big issue since the core product is not on the blockchain. Only the payment and staking attributes are on the blockchain. This design choice is not bad either. Blockchain does provide some value but not significant.
- The market is too crowded. Competing with tech giants like Google, Microsoft and Amazon are hard. They claim they’ll be 10x cheaper. Actually, they have tested with a customer of theirs and the result was %60 cheaper, ~2x cheaper. I’m still skeptical. The project hasn’t scaled yet.
- $8M / $180k = ~40 years for ROI. Hosts should only be people with extra bandwidth and computation. It’s not worth to open a dedicated system for this ROI. 
- DADI foundation has the right to determine the revenue of actors. They claim that they’ll update the rewards of actors at least once per quarter. If they mess this up, they might actually ruin peoples lives. There is not a free market and I don’t know why they made a decision like this. This might need to be rechecked
- The libraries they built are public on Github, however, Stargate, Gateway and Host code are not public. 
- They have plagiarized SONM whitepaper in early 2018 and been criticized by the community.

 Neutral

It’s not a decentralized system. There is a company who controls DADI. I'm not saying this a bad thing. This is an alright business. It might be worth investment. Not everything should be decentralized. 

 Questions

- Not sure if every website or system can be hosted on DADI. They claim they can do AI and machine learning apps as well. 
- Not sure how Gateway handles resilience, reliability, and consistency of Hosts. They have solved harder problems so I don't worry about this much.
