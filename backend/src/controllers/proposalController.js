const Proposal = require('../models/Proposal');
const aiService = require('../services/aiService');

exports.getProposalsForRfp = async (req, res) => {
  try {
    const { rfpId } = req.params;
    const proposals = await Proposal.find({ rfp: rfpId }).populate('vendor');
    res.json(proposals);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getProposal = async (req, res) => {
  try {
    const p = await Proposal.findById(req.params.id).populate('vendor rfp');
    if (!p) return res.status(404).json({ error: 'Proposal not found' });
    res.json(p);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.scoreProposalWithAI = async (req, res) => {
  try {
    const id = req.params.id;
    const proposal = await Proposal.findById(id).populate('rfp vendor');
    if (!proposal) return res.status(404).json({ error: 'Proposal not found' });

    const scoreObj = await aiService.scoreProposal(proposal.parsed);

    proposal.score = scoreObj.score;
    proposal.analysis = scoreObj.analysis;

    await proposal.save();

    res.json(proposal);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createProposal = async (req, res) => {
  try {
    const { rfp, vendor, rawEmail, parsed } = req.body;
    const proposal = new Proposal({ rfp, vendor, rawEmail, parsed });
    await proposal.save();
    res.json(proposal);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
