---
layout: analysis
coin: zilliqa
tldr: "First blockchain with sharding"
score: 2
researcher: thellimist
date: 2018-04-30
conclusion: "Zilliqa is a platform to do technological innovation. It doesn't stand a chance to compete with Ethereum."
---

- Rather than side chains, uses sharding to scale. Has smart contracts and will try to import ETH smart contracts automatically.  
- Has done Mindshare deal. This is extremely important. Ad market is one of the few markets that might need 2000 tx per second. Although, I don't think in the next few years the network will have even 100 tx per second.
- Techincal workings short version: PoW to enter Epoch, then do pBFT inside the shard, winner txs in shards will be collected in another shard by the leader nodes (randomly selected) of each shards and then the leader nodes construct a final block with the txs collected.  
- pBFT same as Ripple and Stellar  
- PoW is done once every 20 hours for now. This means a node must wait at most 20 hours before contributing to the network.
- NEO invested in Zilliqa
