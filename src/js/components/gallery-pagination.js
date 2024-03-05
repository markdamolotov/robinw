const galleryPagination = document.querySelector('.gallery__pagination')
const galleryPaginationButtons = galleryPagination.querySelectorAll(
  '.gallery__pagination-button',
)
const galleryImagesListWrapper = document.querySelector(
  '.gallery__images-list-wrapper',
)
const galleryImagesLists = galleryImagesListWrapper.querySelectorAll(
  '.gallery__images-list',
)

galleryPagination.addEventListener('click', (e) => {
  if (e.target.nodeName !== 'BUTTON') return

  const currentGalleryImagesList = getcurrentList(e.target)

  setIsActiveButton(e.target)
  showCurrentList(currentGalleryImagesList)
})

const getcurrentList = (currentButton) => {
  return galleryImagesListWrapper.querySelector(
    `[data-country-list="${currentButton.dataset.country}"]`,
  )
}

const setIsActiveButton = (currentButton) => {
  galleryPaginationButtons.forEach((button) => {
    button.classList.remove('is-active')
  })

  currentButton.classList.add('is-active')
}

const showCurrentList = (currentList) => {
  galleryImagesLists.forEach((list) => {
    list.classList.add('is-hidden')
  })

  currentList.classList.remove('is-hidden')
}