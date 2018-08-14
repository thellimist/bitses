---
layout: analysis
coin: Seele
tldr: "dApp platform with high tps"
score: 0
researcher: thellimist
date: 2018-09-14
conclusion: "It's still really early. They are in a crowded market and their marketting is not that good to be competitive."
---

- They are making a new consensus algorithm based on percentages rather than yes or no. This method needs to be peer reviewed which I have not came across.
- There is a multi-step sampling process. The nodes are sampled a few times until the small number of nodes achieve consensus. I'm not sure whether they will have a single blockchain or multiple. They mention both even DAG but I haven't found an indication on how the data is stored.
- Sampling is done non-interactively. There isn't much information on this but from my understanding there is an initial seed. From that each user can know whether they are selected from a number that can be generated from their private to fit the seed. Then there is another step where sampling is done multiple times. I'm not sure how the next step of the sampling is achieved. The network needs to be in consensus of another seed to allow sampling another set of nodes. 
- Sybil attack is prevented by amount of stake each node has. So basically it's a kind of PoS. 
- They use IPFS for storage.
- They claim they can do thousands of tps. I'm always sceptical when a project claims this.
