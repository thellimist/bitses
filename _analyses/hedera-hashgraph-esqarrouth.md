---
layout: analysis
coin: hedera-hashgraph
tldr: "Fair, BFT, bandwidth efficient DAG-like voting system. "
score: 3
researcher: esqarrouth
date: 2018-09-10
conclusion: ""
---

Hedera Hashgraph Review


- Hedera Hashgraph Council will provide governance. It will be maintained by a council of up to 39 known and reputable global organizations.
- Claims to be tested for 500K transactions per second. 
- Claims to achieve the theoretical limits of aBFT security. (Verified)
- It isn’t possible for a network node to fork the official version, but a party can fork it, but all the clients will know which one is the real network.
- All communications are encrypted with TLS 1.2, all events are digitally signed, and the hashgraph is constructed using cryptographic hashes.
- The hashgraph is asynchronous Byzantine Fault Tolerant. (Means no forks, no member can stop reaching consensus)
- Every transaction is assigned a consensus time, which is the median of the times at which each member says it first received it. 
- Transactions are put into order according to their timestamps and not on a single block, resulting in a fair transaction order. 
- No PoW or computation required, no energy wasted. 
- A home computer could handle more than visa transactions.
- Transaction finality seems to be achieved under 11 seconds.
- Hedera has a Permissioned Governance Model with Permissionless Consensus. 
- Governing Members receive fees from operating nodes on Hedera. Node operators that are not Governing Members can also receive fees for their contribution to the network, but non-members do not receive council governance votes.
- Hedera technical and legal controls ensure the platform will not fork into a competing platform and cryptocurrency. Signed State Proofs, Ledger Id, 
- Hedera Hashgraph Council will pay Swirlds 10% of revenue (with monthly minimums) and Swirlds will own 5% of Hedera coins. 
- Hedera will enable KYC and AML through an Opt-In Escrowed Identity system.
- Wants to use identity to tie banks and hashgraph account together for a seemless connection.
- Microtransactions are feasible on this network.
- Mathematically proven to be secure until 1/3 of the network become attackers. 
- Aims to become the first mass-adopted public distributed ledger. 
- Solidity smart contracts runs in Hashgraph. (I don't know how this happens since it uses a different architecture)
- There is work on sharding to scale it even further.
- Hashgraph core is written in Java and LISP, the SDK makes it possible to build applications with any JVM language (Java, Scala, etc)
- Each node is given a fee on transactions. Each service or task has a fee. 
- Fees are calculated as amount per transaction + amount per bytes.
- Hedera system gets part of the fee for each action and uses that to pay the nodes and pay dividends on the governance systems.
- Each node checks if client has the balance to pay for the transaction before sending ot to other nodes. Then covers the cost for them, if there is a false reporting, helping nodes lose money.
- http://prntscr.com/kf02sy
- http://prntscr.com/kf049c
- http://prntscr.com/kf053a

- Once an event occurs, within seconds everyone in the community will know where it should be placed in history with 100% certainty. At that point, they can just incorporate the effects of the transaction and then discard it. So in a minimal cryptocurrency system, each member would only need to store the current balance of each account that isn’t empty. They wouldn’t need to remember the full history of the transactions that resulted in those balances all the way back to ‘genesis’.
- Swirlds makes it possible for the Hedera governing body not only to specify the software changes to be made to network nodes, but also to ensure precisely when those changes are adopted, and to guarantee that they are. When the Hedera governing body releases a software update, all honest network providers will have their software automatically update, and all will do so at exactly the same moment in history. Anyone with invalid software will no longer be able to modify the hashgraph and have the world accept their version of the hashgraph as legitimate. // This is concerning in a way, they have a body who votes on the code. But the main software version isn't decentralized, only the contents inside it are.
- The Hedera codebase will be governed by the council, and will be released for public review with Version 1.0. It will not be open source, but anyone will be able to read the source code, recompile it, and verify that it is correct. No license will be required to use the Hedera platform. No license will be required to write software that uses the services of the Hedera platform. No license will be required to build smart contracts on top of the Hedera platform. Applications built upon the Hedera platform can be open source or proprietary. They do not require any license or any approval from Hedera. Swirlds and Hedera will simultaneously embrace open review, while bringing stability by using the patents defensively. In this way, Hedera will provide a transparent codebase that will provide the stability that markets demand for mainstream adoption of a public ledger
- REGULATORY COMPLIANCE - The Hedera technical framework includes an Opt-In Escrow Identity mechanism that gives users a choice to bind verified identities to otherwise anonymous cryptocurrency accounts, which will in our opinion provide governments with the oversight necessary to ensure regulatory compliance. This is completely optional, and each user can decide what kinds of credentials, if any, to reveal. We intend to work with governments to provide the same level of protection to distributed public ledgers as is currently present in the financial system.
- Any user can create an account by simply creating a key pair, without any name or address attached to it. Optionally, provisions are made to allow a user to attach hashes of identity certificates. These can come from any third party certificate authority or identity authority that the user chooses. This is intended to allow regulatory compliance, for cryptocurrency accounts that will be used in a jurisdiction with Know Your Customer (KYC) or Anti-MoneyLaundering (AMC) laws. 
- Sharding: Each shard must be able to trust the consensus decision of each of the other shards. Therefore, each shard must be composed of randomly-chosen members, and must be large enough so that it can be trusted to never have 1/3 of its staked cryptocurrency being owned by malicious nodes.
- Achieves fairness, in the sense that it is difficult for an attacker to manipulate which of two transactions will be chosen to be first in the consensus order. It has complete asynchrony, no leaders, no round robin, no proof-ofwork, eventual consensus with probability one, and high speed in the absence of faults. It is based on a gossip protocol, in which the participants don’t just gossip about transactions. They gossip about gossip. 

Fundraising:

- Currently on series 3. 
- Option A: $0.12 per token: 20% of tokens issued 6-months after network launch, 10% per month after that. (14 month for all tokens)
- Option B $0.096 per token (20% discount): 20% of tokens issued 6-months after network launch, 20% per year after that. (4.5 year for all tokens)
- Total capital raised would be $100M.
- The total supply of tokens is fixed at 50 billion tokens

- 65%: Hedera Council Treasury
- 17%: Hedera management and employees
- 13%: SAFT purchasers and developers
- 5%: Swirlds


- Treasury tokens are held by the Hedera Hashgraph Council (HHC) as an entity; no individual member of the Council has any ownership rights over treasury tokens.
- Hedera’s token release schedule calls for less than 10% of the total token supply to be released by the first anniversary of the network launch (5 Billion), and less than 33% by the fifth anniversary of network launch. (16 Billion)

- Expected valuation at 1st year: 600M ($0.12 per token)
- Expected valuation at 5th year: $2B ($0.12 per token)

- This current SAFT offering is expected to encompass approximately 2% of the total token supply.
- The initial issuance of tokens pursuant to the SAFTs will occur in Q1/Q2 2019

Team:

- Founder & CTO Leemon Baird is one of the most knowledgable academic in the field in the league of Gavin, Mazières. 
- Most of his academic career he researched these topics in order of volume: Machine Learning, Jam resistant communication, Security, Math, Applied Cryptography .
- Leemon: CS PhD from CMU, best school in the field.
- Both founders past research ML scientist from the air force.
- 2 founders together founded Trio Security, which was acquired by Symbol, which was acquired by Motorola.
- 2 founders together founded Bluewave Security, which was acquired by JST Partners.
- Later CEO Mance worked in another fast growing identity company (which got acquired for $600M) for a few years while Leemon was working on research. 
- Their professional company experience was all in the field of security, identity, authentication, encryption, computer networks, wifi. Which fits in very well with blockchains.
- It seems after that Leemon got the breakthrough for hashgraph he worked for a year on it then he recruited his old buddy to join as ceo. 
- Mance's old company where he worked as an executive invested in Hashgraph. 