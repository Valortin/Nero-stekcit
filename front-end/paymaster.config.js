module.exports = {
  defaultSponsorship: {
    type: 'HYBRID',
    sponsorCoverage: 1.0, 
    fallbackToken: '0x...NERO' 
  },
  eventSpecific: {
    'eventId1': {
      type: 'ERC20',
      acceptedTokens: ['USDC', 'DAI']
    }
  }
}