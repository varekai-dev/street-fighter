import {showModal} from './modal'

export function showWinnerModal(fighter) {
  showModal({
    title: 'WE HAVE A WINNER',
    bodyElement: fighter.name
  })
}
