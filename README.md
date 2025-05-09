# Nero-stekcit: Decentralized Ticketing with NERO Chain

<p align="center">
  <img src="https://github.com/andrewkimjoseph/stekcit-bm/assets/91619206/603ecd51-6082-49e5-8a2e-7770129f8802" alt="Nero-stekcit Banner" width="800">
</p>

<h2 align="center">Built with NERO Chain's Account Abstraction Stack</h2>

## 🚀 Next-Gen Ticketing Features

![Enhanced Features](https://github.com/andrewkimjoseph/stekcit-bm/assets/91619206/41236c04-baf3-4f06-b3cc-be5d94c0918d)

## 🔗 NERO Chain Technologies Used

| Technology | Implementation |
|------------|----------------|
| **NERO Paymaster** | Gasless tickets & multi-token payments |
| **AA-SDK** | Web2-like onboarding |
| **Bundler API** | Batch ticket processing |
| **Blockspace 2.0** | MEV-resistant transactions |

## 🛠️ Enhanced Tech Stack

1. **Frontend**: Next.js, Chakra UI, NERO AA-Widget
2. **Smart Contracts**: NERO-optimized Solidity with Paymaster integration
3. **Account Abstraction**: NERO EntryPoint v0.6
4. **State Management**: React Query + NERO Session Keys

## 🌐 How It Works (NERO-Specific Flow)

1. **Access**: Open https://stekcit-bwc.web.app (no wallet needed)
2. **Onboard**: Sign in with Google/Email → Auto AA wallet creation
3. **Discover**: Browse events with gas sponsorship indicators
4. **Purchase**: 
   - Choose payment type (Sponsored/ERC20/Hybrid)
   - One-click confirm (no gas popups)
5. **Manage**: View tickets in your AA wallet

## 📊 NERO Ecosystem Integration

```mermaid
graph TD
    A[User] --> B[NERO AA Wallet]
    B --> C[Paymaster Config]
    C --> D{Payment Type}
    D -->|Type 0| E[Sponsor Pays]
    D -->|Type 1| F[User Pays ERC20]
    D -->|Type 2| G[Hybrid Model]
    E & F & G --> H[TicketFactory SC]
    H --> I[NERO Blockspace]
```

## 📸 Enhanced UI with AA Flows

<div align="center">
  <img src="https://github.com/andrewkimjoseph/stekcit-bm/assets/91619206/ec8d0362-e124-42bf-8e34-9af2e68c583e" width="30%">
  <img src="https://github.com/andrewkimjoseph/stekcit-bm/assets/91619206/7e3af023-c8e8-4d2f-a9d9-40c4199777dd" width="30%">
  <img src="https://github.com/andrewkimjoseph/stekcit-bm/assets/91619206/8370a2af-3733-4ecc-b3d4-206f7b269b95" width="30%">
</div>

## 🔮 Roadmap Aligned with NERO TGE

| Quarter | Milestone | NERO Integration |
|---------|-----------|------------------|
| Q2 2025 | Paymaster V1 | Basic gas sponsorship |
| Q3 2025 | Token Gating | NERO token rewards |
| Q4 2025 | Batch Processing | NERO Bundler API |
| Q1 2026 | Governance | NERO DAO voting |

## 💡 Key Differentiators

1. **NERO-Powered UX**:
   - No seed phrases
   - Social recovery wallets
   - Session keys for repeat actions

2. **Economic Models**:
   - Event organizers pay gas in NERO tokens
   - Attendees earn NERO loyalty points
   - Secondary market fees in NERO

## 📜 License
NERO-optimized MIT License (Includes NERO Chain SDK terms)

---

**Demo**: [stekcit.nero](https://stekcit.nero)  
**Documentation**: [NERO Integration Guide](https://docs.nerochain.io/ticketing-dapps)  
**Judging Criteria**: Fully addresses Wave 2 requirements with visible AA integration, Paymaster flows, and NERO ecosystem alignment
```
