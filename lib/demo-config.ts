export interface DemoAgent {
  agentId: string
  phoneNumber: string
  title: string
  description: string
  businessName: string
}

export const demoAgents: Record<string, DemoAgent> = {
  plumber: {
    agentId: 'agent_d57dffd09455503d0e94e90421',
    phoneNumber: '+441273110770',
    title: 'Plumber Demo',
    description: 'Experience what your customers hear when RingCatch answers calls for a plumbing business',
    businessName: 'Clear Flow Plumbing',
  },
  electrician: {
    agentId: 'agent_a981e71de520d213987091d0cc',
    phoneNumber: '+441273110770',
    title: 'Electrician Demo',
    description: 'Experience what your customers hear when RingCatch answers calls for an electrical business',
    businessName: 'Spark Right Electrical',
  },
  roofer: {
    agentId: 'agent_2612ddd3b63c69d627dead4430',
    phoneNumber: '+441273110770',
    title: 'Roofer Demo',
    description: 'Experience what your customers hear when RingCatch answers calls for a roofing business',
    businessName: 'Summit Roofing',
  },
  builder: {
    agentId: 'agent_3ac41c9ca762eb3dd70b3e4e96',
    phoneNumber: '+441273110770',
    title: 'Builder Demo',
    description: 'Experience what your customers hear when RingCatch answers calls for a building business',
    businessName: 'Ironclad Builders',
  },
}

export const validTrades = Object.keys(demoAgents)
