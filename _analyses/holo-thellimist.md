---
layout: analysis
coin: holo
tldr: "Dapp platfom"
score: 2
researcher: thellimist
date: 2018-05-09
conclusion: "The tech looks promising but the token economics will probably not work"
---

- Targeted 1000x potential ($300B market). Might target more as well.
- It’s not a cryptocurrency. It’s signature signed bittorent (DHT). 
- They plan to make dApps without cryptocurrencies
- It’s not ideal to make cryptocurrencies or ICOs in Holo.
- Holofuel is a digital debit system. Might not work properly?  - Value of Holofuel will diminish in long term. It only has value in short to medium term.
- Team looks smart. CEO is definitely smart. 
- The community is smart and healthy (mattermost) - They are doing something different than everyone else
- Their code is actually working 
- They have Holo Box a hardware to host dApps. It’s crowdfunded on Indiegogo rather than venture capital.
- %1 Holo transaction fees go toward Holochain.
- Centralization in Holo https://www.reddit.com/r/holochain/comments/8h5hyz/centralization_in_holo/
- Page 16-18 https://files.holo.host/2018/03/Holo-Green-Paper.pdf. So many roles. Seems complicated for a simple double ledger system.
- Holo is a dApp platform. CEO says any currency can be built on top of it however his definition of currency is different than Satoshi’s vision. Holo is trying to solve dApps problem. I’m not sure if there is a problem there. Facebook might own my data but it is providing me value and I’m using it. Why should I use dApp Facebook? 
- Holo Fuel value will diminish in long term because it’s backed by compute power. Compute power gets cheaper everyday. In short to medium term the price will probably jump because they started really cheap.

Questions: 

- Holo Organisation owns Holo Fuel and it seems more like bank than a decentralised currency.
- After ICO tokens are swapped with Holo Fuel, is it possible to cash out Holo Fuel?

Comments by Synth from Skycoin:

- I did not do peer-to-peer apps for coins like holochain is doing, because its pointless; bitorrent works already, any overlay you put on top of it will just be slower. You have to be able to get people to switch what they are doing to use the new thing. Then you have to build on the platform from there.
- I have already taken all of the core innovations in holochain and put them in the Skycoin development roadmap. They have a few good ideas.
- I cannot figure out purpose of holochains crypto currency. They do not seem to need it at all 
- There is no solution to the consensus problem at all. Anywhere in the paper. They are trying to justify the fact that they have no automatic way of doing consensus. They have no automatic conflict resolution procedure in the network.
- Anyone can write any data or any balance they want onto the network and say they have as many holofuel as they want and no one can cap the number of coins that are in existence. There is no method to mediate between conflicts between different users.
- "Hosts will be required to register if they want to redeem credits for outside currencies through reserve account". The coin is completely centralized
- There is no mechanism in holo to verify that users are not creating coins.
- There is no way to resolve double spends.
- There is no conflict or double spending resolution mechanism.
- "You can  always audit your counterpart’s chain to validate their state and know that they have the credits  they’re spending." The only way to validate the counter party, is to validate his counter parties and the counter parties of the counter parties of the counter parties, etc until you have validated EVERY node in the network (assuming the data is even public or still exists). And the older data drops off the network because its a DHT. So no one will even have a copy. And if there are any errors or discrepencies in the credit system, there is no dispute or resolution mechanism and no method of consensus.
- The devs are big on "immune" systems and claim they can kick out any bad actors from the network if they wanted. At the first sign of trouble it will collapse no doubt.
- There are several trivial denial of service attacks on the network too, wtf; there is not way to rate limit network activity to a level where validation can actual occur (even in theory).
