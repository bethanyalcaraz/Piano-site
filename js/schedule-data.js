/*
  New Song Worship Studio -- Schedule Data
  =========================================
  This file controls which weekly lesson times show as open on the website.

  HOW IT WORKS
  Each time slot below has a capacity of 4 -- meaning it can hold up to 4
  weekly occurrences per month (one for every week). A student's package
  determines how many of those 4 "weeks" they use up each month:

    - Launch Program / 4x Monthly Package  -> uses 4 (fills the slot completely)
    - 2x Monthly Package                   -> uses 2 (slot stays partly open)
    - A La Carte Session                   -> one-off, doesn't hold a weekly slot

  A slot shows as "Full" on the website once its "booked" number reaches
  its capacity (4). If a family cancels, lower the "booked" number and the
  slot opens back up automatically the next time the site is published.

  HOW TO UPDATE
  Change the "booked" number for the slot that changed, save, and publish
  the site. For example, if a family starts 4x/week lessons on Mondays at
  1:00, change:
      { id: "mon-1", day: "Monday", time: "1:00 PM", booked: 0 }
  to:
      { id: "mon-1", day: "Monday", time: "1:00 PM", booked: 4 }

  If a 2x/month family takes that same slot instead, use 2 -- the slot
  will still show as open since 2 of the 4 weekly spots remain.

  If a family cancels, subtract however many "weeks" they were using (or
  set it back to 0 if they were the only one in that slot).

  You can always just tell Claude, in plain language, what changed --
  e.g. "Monday at 1:00 is now booked for the 4x package" or "Wednesday at
  2:00 just opened back up" -- and it will make this edit and publish the
  site for you.
*/

window.SCHEDULE_DATA = {
  capacity: 4,
  slots: [
    { id: "mon-10", day: "Monday", time: "10:00 AM", booked: 0 },
    { id: "mon-11", day: "Monday", time: "11:00 AM", booked: 4 },
    { id: "mon-12", day: "Monday", time: "12:00 PM", booked: 0 },
    { id: "mon-1", day: "Monday", time: "1:00 PM", booked: 0 },
    { id: "mon-2", day: "Monday", time: "2:00 PM", booked: 0 },
    { id: "mon-3", day: "Monday", time: "3:00 PM", booked: 0 },
    { id: "wed-1", day: "Wednesday", time: "1:00 PM", booked: 0 },
    { id: "wed-2", day: "Wednesday", time: "2:00 PM", booked: 0 },
    { id: "wed-3", day: "Wednesday", time: "3:00 PM", booked: 4 },
    { id: "wed-4", day: "Wednesday", time: "4:00 PM", booked: 0 }
  ]
};
