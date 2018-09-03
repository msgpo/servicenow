module.exports = [
  {
    path: 'number',
    depth: 0,
    icon: 'ticket',
    type: 'title',
    link: true
  },
  {
    path: 'short_description',
    depth: 0,
    type: 'block'
  },
  {
    path: 'active',
    depth: 0
  },
  {
    path: 'category',
    depth: 0
  },
  {
    path: 'scope',
    depth: 0
  },
  {
    path: 'urgency',
    depth: 0
  },
  {
    path: 'opened_at',
    depth: 0
  },
  {
    path: 'resolved_at',
    depth: 0
  },
  {
    path: 'closed_at',
    depth: 0
  },
  {
    path: 'opened_by',
    depth: 1,
    type: 'title',
    icon: 'door-open',
    link: true
  },
  {
    path: 'opened_by.details.name',
    depth: 1
  },
  {
    path: 'opened_by.details.title',
    depth: 1
  },
  {
    path: 'opened_by.details.location.details.name',
    depth: 1
  },
  {
    path: 'requested_by',
    depth: 1,
    type: 'title',
    icon: 'concierge-bell',
    link: true
  },
  {
    path: 'requested_by.details.name',
    depth: 1
  },
  {
    path: 'requested_by.details.title',
    depth: 1
  },
  {
    path: 'requested_by.details.email',
    depth: 1
  },
  {
    path: 'requested_by.details.location.details.name',
    depth: 1
  },
  {
    path: 'assigned_to',
    depth: 1,
    type: 'title',
    icon: 'user',
    link: true
  },
  {
    path: 'assigned_to.details.name',
    depth: 1
  },
  {
    path: 'assigned_to.details.title',
    depth: 1
  },
  {
    path: 'assigned_to.details.email',
    depth: 1
  },
  {
    path: 'assigned_to.details.location.details.name',
    depth: 1
  },
  {
    path: 'closed_by',
    depth: 1,
    type: 'title',
    icon: 'door-closed',
    link: true
  },
  {
    path: 'closed_by.details.name',
    depth: 1
  },
  {
    path: 'closed_by.details.title',
    depth: 1
  },
  {
    path: 'closed_by.details.email',
    depth: 1
  },
  {
    path: 'closed_by.details.location.details.name',
    depth: 1
  },
  {
    path: 'close_code',
    depth: 1
  },
  {
    path: 'close_notes',
    depth: 1
  }
];
