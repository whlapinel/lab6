"use strict";

const MAX_LENGTH = 200;

const authors = ['Tyrone', 'Ava', 'Elijah', 'Lucas', 'Ebony', 'Keisha', 'Jemila', 'Daniel'];

const articles = [
  {
    title: 'CSS Selectors',
    author: 'Tyrone',
    date: new Date(2023, 1, 20),
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, dolore? Eveniet numquam quam qui quae laboriosam maxime deleniti aperiam quasi culpa veniam, voluptatibus molestias soluta error ratione assumenda sunt. Sapiente doloribus, nulla a tempora assumenda nostrum est enim corporis fugit quasi ipsam eveniet distinctio impedit dolorum eum dolor. Distinctio, reiciendis!'
  },

  {
    title: 'Cascading',
    author: 'Jemila',
    date: new Date(2023, 2, 1),
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, voluptatum iste? Nisi exercitationem, consectetur unde ab placeat nemo deserunt consequuntur.'
  },

  {
    title: 'CSS Grid',
    author: 'Keisha',
    date: new Date(2023, 2, 12),
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur laboriosam aliquam debitis dolores dolorem corporis ipsum itaque culpa, et eaque? Aliquam, est eveniet voluptatem nemo doloremque esse odit dolorum dicta consectetur ipsam corrupti perspiciatis voluptas cupiditate et sapiente. Eligendi modi fugiat pariatur facere, molestiae nihil accusamus animi a impedit laboriosam tempora, eum in iure tenetur fugit praesentium consectetur mollitia ut obcaecati delectus ipsa dolores commodi? Rerum, temporibus velit eum iste praesentium modi amet molestiae illum enim quos pariatur quasi vero quidem, minus placeat assumenda recusandae fugit sunt voluptatem est neque qui! Ut optio quis accusamus placeat ipsa laboriosam laborum debitis.'
  }
];



articles.forEach(article=>{
  addEntry(article);
});



/**
 * This function creates a DOM elment with information from the article object, and adds the element into the DOM.
 * @param {object} article - an article
 */
function addEntry(article) {
  // Step 4 add articles
  const articleContainer = document.createElement("article");
  console.log(articleContainer);
  articleContainer.classList.add("article-container");
  const articlesWrapper = document.querySelector(".articles-wrapper");
  articlesWrapper.appendChild(articleContainer);
  // Step 5 add the delete button
  const delBtn = document.createElement("button");
  delBtn.innerHTML = "✕";
  delBtn.classList.add("delete-btn");
  articleContainer.appendChild(delBtn);
  // Step 6 add the article header (avatar photo, name, posted date)
  const articleHeader = document.createElement("div");
  articleHeader.classList.add("article-header");
  const avatarImg = document.createElement("img");
  avatarImg.classList.add('avatar');
  let filePath = ("images/default.jpeg");
  if (authors.includes(article.author)) {
    const authorIndex = authors.indexOf(article.author)
    filePath = ("images/avatar" + authorIndex + ".png");
  }
  avatarImg.setAttribute("src",filePath);
  avatarImg.setAttribute("alt","avatar picture");
  const articleInfo = document.createElement('div');
  const formattedDate = article.date.toDateString();
  articleInfo.innerHTML = article.author + " · " + formattedDate;
  articleHeader.appendChild(avatarImg);
  articleHeader.appendChild(articleInfo);
  articleContainer.appendChild(articleHeader);
  // Step 7 add body of the article
  const articleBody = document.createElement('div');
  articleBody.classList.add('article-body');
  const articleTitle = document.createElement('h3');
  articleTitle.innerHTML = article.title;
  const articlePreview = document.createElement('p');
  articlePreview.innerHTML = article.content;
  articleBody.appendChild(articleTitle);
  articleContainer.appendChild(articleBody);
  articleBody.appendChild(articlePreview);
  // Step 8-11 hide excess content
  if (article.content.length > MAX_LENGTH) {
    const hiddenContent = articlePreview.innerHTML.substring(MAX_LENGTH); 
    console.log(hiddenContent);
    articlePreview.innerHTML = articlePreview.innerHTML.substring(0,MAX_LENGTH) + '...';
    const hiddenSpan = document.createElement('span');
    hiddenSpan.classList.add('hidden');
    hiddenSpan.innerHTML = hiddenContent;
    const readMoreBtn = document.createElement('button');
    readMoreBtn.innerHTML = 'Read More';
    readMoreBtn.classList.add('btn');   
    articleBody.appendChild(readMoreBtn);
  }


  




}




