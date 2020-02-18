---
id: introducing-burni
title: Introducing Burni
author: iRyanBell
featuredImage: https://vimlabs.com/img/article_assets/2020-02-17-introducing-burni-featured.jpg
tags:
  [
		ethereum,
		blockchain,
		smart-contract,
		dapp,
		defi,
		nft,
		ipfs,
		burni
  ]
---

# Poof. Gone.

Most of the blockchain-based digital collectibles have a valuation based on their rarity, attributes, or connection to a particular brand.

Burni was created to inherit a valuation via proof-of-burn (_see proof-of-burn: https://en.bitcoin.it/wiki/Proof_of_burn_).

> The way it works, is fungible ERC-20 tokens are destroyed, or burnt up in the forging of new ERC-721 non-fungible tokens. Each token can set an IPFS content identifier multihash a single time, connecting the token to real-world assets and peer-to-peer distributed content. (see: Why IPFS?: https://youtu.be/zE_WSLbqqvo)

A distributed pseudorandom genesis hash is calculated as:

```
sha3(join([CONTRACT_ADDRESS, TOKEN_ID,
           MINT_BLOCK_HASH+1, MINT_BLOCK_HASH+2,
           MINT_BLOCK_HASH+3, MINT_BLOCK_HASH+4,
           MINT_BLOCK_HASH+5]))
```

The genesis hash in combination with the underlying CID multihash, and the delay between minting and setting this value allows for flexible data structures and client-side state hydration options. For example, an IPLD MerkleDAG (https://ipld.io/) can be used to point each token at the other for collectible mixing with genesis-hash entropy.

Running a genesis hash as a latent space seed through a GAN results in a unique photo-realistic image bound to the token. This never-before-seen cat is the result of one such token:

![NFT GAN Cat](https://vimlabs.com/img/article_assets/2020-02-17-introducing-burni-gan_cat.png)

As the base token used to mint the collectibles is "used up" during the minting process, there's a deflationary process akin to a virtual resource being consumed in the creation of new materials. The NFTs have a getValuation() function to find the amount of Burni used to create the NFT.

Learn more @ Burni.co
https://burni.co
