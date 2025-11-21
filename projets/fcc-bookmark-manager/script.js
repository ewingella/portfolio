const mainSection = document.getElementById('main-section');
const formSection = document.getElementById('form-section');
const addBookmarkBtn = document.getElementById('add-bookmark-button');// Button to display the form
const addBookmarkBtnForm = document.getElementById('add-bookmark-button-form');// Button to add bookmark from the form
const categoryDropdown = document.getElementById('category-dropdown');
const nameInput = document.getElementById('name');
const urlInput = document.getElementById('url');
const bookmarkListSection = document.getElementById('bookmark-list-section');
const viewCategoriesBtn = document.getElementById('view-category-button');
const categoryList = document.getElementById('category-list');
const closeListBtn = document.getElementById('close-list-button');
const deleteBookmarksBtn = document.getElementById('delete-bookmark-button');
const categoryNameList = document.querySelectorAll('.category-name');
const closeFormBtn = document.getElementById('close-form-button');
let bookmarksByCategory = [];
let categorySelected = '';


const getBookmarks = () => {
  const data = localStorage.getItem('bookmarks');

  if (!data || !data.trim().startsWith('[')) {
    return [];
  }

  const parsed = JSON.parse(data);

  // Return [] if it's NOT an array or contains invalid items
  if (
    !Array.isArray(parsed) ||
    !parsed.every(b => typeof b === 'object' && b !== null)
  ) {
    return [];
  }

  return parsed;
};
//function to display or close the form
function displayOrCloseForm() {
    mainSection.classList.toggle('hidden');
    formSection.classList.toggle('hidden');
}
// function to display form to add bookmark
addBookmarkBtn.addEventListener('click', function () {
    displayOrCloseForm();
    categorySelected = categoryDropdown.value;
    categoryNameList.forEach(el => el.innerText = categorySelected);

});
// function to close the form and return to main section
closeFormBtn.addEventListener('click', function () {
    categorySelected = '';
    displayOrCloseForm();
})

//function to add bookmark from the form
addBookmarkBtnForm.addEventListener('click', function (event) {
    event.preventDefault();

    const bookmark = {
        name: nameInput.value,
        url: urlInput.value,
        category: categoryDropdown.value
    };
    const bookmarks = getBookmarks();
    bookmarks.push(bookmark);
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

    nameInput.value = '';
    urlInput.value = '';
    categorySelected = '';


    displayOrCloseForm();


});

function displayOrHideCategory() {
    mainSection.classList.toggle('hidden');
    bookmarkListSection.classList.toggle('hidden');

}
// function to find bookmarks by category
function findBookmarksByCategory(category) {
    const bookmarks = getBookmarks();
    return bookmarks.filter(bookmark => bookmark.category === category);
}

viewCategoriesBtn.addEventListener('click', () => {
    categorySelected = categoryDropdown.value;

    categoryNameList.forEach(el => el.innerText = categorySelected);
    bookmarksByCategory = findBookmarksByCategory(categorySelected);
    if (bookmarksByCategory.length === 0) {
        categoryList.innerHTML = '<p>No Bookmarks Found</p>';
    }else{
        updateCategoryList(bookmarksByCategory);
    }


    displayOrHideCategory();
});

closeListBtn.addEventListener('click', () => {
    bookmarksByCategory = [];
    categorySelected = '';
    displayOrHideCategory();
});


function updateCategoryList(list){
      let radioButton =``;
        list.forEach(bookmark => {
            radioButton += `
              <input type="radio" id="${bookmark.name}" name="${bookmark.category}" value="${bookmark.name}" />
             <label for="${bookmark.name}"><a href="${bookmark.url}">${bookmark.name}</a></label>
            `
        })

        categoryList.innerHTML= radioButton;

}
//function to delete element selected by radio button
deleteBookmarksBtn.addEventListener('click', (e) => {
    const selectedRadio = categoryList.querySelector('input[name="' + categorySelected + '"]:checked');
    if (selectedRadio) {
        const bookmarkNameToDelete = selectedRadio.value;
        let bookmarks = getBookmarks();
        bookmarks = bookmarks.filter(bookmark => (bookmark.category !== categorySelected || bookmark.name !== bookmarkNameToDelete) );
        bookmarksByCategory = bookmarksByCategory.filter(bookmark => bookmark.name !== bookmarkNameToDelete);
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    }
   


     
    updateCategoryList(bookmarksByCategory);

});
