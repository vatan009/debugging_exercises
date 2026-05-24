function applyFeedback(battlescape, enemy, position) {
  if ((battlescape[position] = enemy)) return DISPENSE_TREAT;
  else return RELEASE_NITROGEN_SHOWER;
}
