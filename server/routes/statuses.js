export const listStatuses = (req, res) => res.status(200).json({
  pending: {
    next: 'In Progress',
    updateLabel: 'Start'
  },
  inProgress: {
    next: 'Done',
    updateLabel: 'Finish'
  },
  done: {
    next: 'Pending',
    updateLabel: 'Re-open'
  }
})
