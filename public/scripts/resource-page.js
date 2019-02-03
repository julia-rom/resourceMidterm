function createResourceElement(resource) {

  let $resource = `
  <article class="resource-container">
    <!-- Resource includes main image, title, and description -->
    <img src=${resource[0].img_url} class="main-img" height="280" width="auto">
    <!-- Like/Rate buttons-->
    <section class="like-rate">
    <form method="post" action="/like">
      <button class="btn" input type="submit" value=${resource[0].id} name="id"}><img src="/images/like.png"></button>
      </form>
    </section>
    <!-- Resource titles and description -->
    <span class="resource-text" >
      <h2>
        <a href=${resource[0].url}>${resource[0].title}</a>
      </h2>
      <p>${resource[0].description}</p>
    </span>
    <!-- Comment submission form -->
    <section class="new-comment">
      <h4 id="compose-header">Add comment</h4>
      <form action="/comments" method="POST">
        <textarea autofocus name="text" placeholder="What do you think?"></textarea>
        <input type="submit" value="comment">
      </form>
    </section>
    <!-- Comments container: has avatars, usernames, and comment -->
    <div class="comments-container">

    </div>
  </article>
  `
  return $resource;
}

function renderResource(resource) {
  console.log(createResourceElement(resource));
  $('body.mainContainer').append(createResourceElement(resource));
};

const populateResource = () => {
  console.log('Secret text:', $('#secret').text());

  $.ajax({
    method: "GET",
    url: `/popResource/${$('#secret').text()}`,
  })
    .done((resource) => {
      renderResource(resource);

    });;
}

$(document).ready(function () {
  populateResource();

  // changes like button opacity on 'like' click  - Julia
  // $('.resource-container .like-rate').click(function () {
  //   $('.resource-container .like-rate').css({
  //     'opacity': '1'
  //   });
  // });

  console.log('resource loaded');
})
