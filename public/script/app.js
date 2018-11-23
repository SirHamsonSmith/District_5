$(document).ready(() => {
  $('.results').css("display", "none")
})

// ----------------------Main Button On Click Functions-------------------------

// -----------Seed Button Click---------------
$('#seed').on('click', function () {
  $('.wrapper-body').css("display", "none");
  $('.results').css("display", "")
  fetch('/ideas/stage/seed')
      .then(r => r.json())
      .then(r => {
          for (const key in r) {
              if (r.hasOwnProperty(key)) {
                  const seed = r[key];
                  
                  $('.results').append(`<div class="uk-card uk-card-small uk-card-default uk-width-1-2@m">
                  <div class="uk-card-header">
                      <div class="uk-grid-small uk-flex-middle" uk-grid>
                          <div class="uk-width-auto">
                              <img class="uk-border-circle" width="40" height="40" src="./pics/girl.jpg">
                          </div>
                          <div class="uk-width-expand">
                              <h3 class="uk-card-title uk-margin-remove-bottom">${seed.topic}</h3>
                              <p class="uk-text-meta uk-margin-remove-top"><time datetime="2016-04-01T19:00">${seed.createdAt}</time></p>
                          </div>
                      </div>
                  </div>
                  <div class="uk-card-body">
                      <p>${seed.discussion}</p>
                      <i class="fa fa-thumbs-up space" aria-hidden="true"></i>
                      <i class="fa fa-thumbs-down space" aria-hidden="true"></i><br>
                      <a id="reply-link" href="#" class="uk-button uk-button-text uk-text-primary">Reply</a>
                 </div>`)
              }
          }
      })
})

// -------------Sapling Button Click--------------------
$('#sapling').on('click', function () {
  $('.wrapper-body').css("display", "none");
  $('.results').css("display", "")
  fetch('/ideas/stage/sapling')
      .then(r => r.json())
      .then(r => {
          for (const key in r) {
              if (r.hasOwnProperty(key)) {
                  const sapling = r[key];
                  
                  $('.results').append(`<div class="uk-card uk-card-small uk-card-default uk-width-1-2@m">
                  <div class="uk-card-header">
                      <div class="uk-grid-small uk-flex-middle" uk-grid>
                          <div class="uk-width-auto">
                              <img class="uk-border-circle" width="40" height="40" src="./pics/girl.jpg">
                          </div>
                          <div class="uk-width-expand">
                              <h3 class="uk-card-title uk-margin-remove-bottom">${sapling.topic}</h3>
                              <p class="uk-text-meta uk-margin-remove-top"><time datetime="2016-04-01T19:00">${sapling.createdAt}</time></p>
                          </div>
                      </div>
                  </div>
                  <div class="uk-card-body">
                      <p>${sapling.discussion}</p>
                      <i class="fa fa-thumbs-up space" aria-hidden="true"></i>
                      <i class="fa fa-thumbs-down space" aria-hidden="true"></i><br>
                      <a id="reply-link" href="#" class="uk-button uk-button-text uk-text-primary">Reply</a>
                 </div>`)
              }
          }
      })
})

// -----------------Tree Button Click----------------
$('#tree').on('click', function () {
  $('.wrapper-body').css("display", "none");
  $('.results').css("display", "")
  fetch('/ideas/stage/tree')
      .then(r => r.json())
      .then(r => {
          for (const key in r) {
              if (r.hasOwnProperty(key)) {
                  const tree = r[key];
                  
                  $('.results').append(`<div class="uk-card uk-card-small uk-card-default uk-width-1-2@m">
                  <div class="uk-card-header">
                      <div class="uk-grid-small uk-flex-middle" uk-grid>
                          <div class="uk-width-auto">
                              <img class="uk-border-circle" width="40" height="40" src="./pics/girl.jpg">
                          </div>
                          <div class="uk-width-expand">
                              <h3 class="uk-card-title uk-margin-remove-bottom">${tree.topic}</h3>
                              <p class="uk-text-meta uk-margin-remove-top"><time datetime="2016-04-01T19:00">${tree.createdAt}</time></p>
                          </div>
                      </div>
                  </div>
                  <div class="uk-card-body">
                      <p>${tree.discussion}</p>
                      <i class="fa fa-thumbs-up space" aria-hidden="true"></i>
                      <i class="fa fa-thumbs-down space" aria-hidden="true"></i><br>
                      <a id="reply-link" href="#" class="uk-button uk-button-text uk-text-primary">Reply</a>
                 </div>`)
              }
          }
      })
})

// -----------------Search Button Click----------------------
$('#search-btn').on('click', function () {
  $('.wrapper-body').css("display", "none");
  $('.results').css("display", "")
  fetch('/ideas')
      .then(r => r.json())
      .then(r => {
          for (const key in r) {
              if (r.hasOwnProperty(key)) {
                  const ideas = r[key];
                  
                  $('.results').append(`<div class="uk-card uk-card-small uk-card-default uk-width-1-2@m">
                  <div class="uk-card-header">
                      <div class="uk-grid-small uk-flex-middle" uk-grid>
                          <div class="uk-width-auto">
                              <img class="uk-border-circle" width="40" height="40" src="./pics/girl.jpg">
                          </div>
                          <div class="uk-width-expand">
                              <h3 class="uk-card-title uk-margin-remove-bottom">${ideas.topic}</h3>
                              <p class="uk-text-meta uk-margin-remove-top"><time datetime="2016-04-01T19:00">${ideas.createdAt}</time></p>
                          </div>
                      </div>
                  </div>
                  <div class="uk-card-body">
                      <p>${ideas.discussion}</p>
                      <i class="fa fa-thumbs-up space" aria-hidden="true"></i>
                      <i class="fa fa-thumbs-down space" aria-hidden="true"></i><br>
                      <a id="reply-link" href="#" class="uk-button uk-button-text uk-text-primary">Reply</a>
                 </div>`)
              }
          }
      })
})

$(document).on('click', '#reply-link', function(){
  
  console.log($(this).parent().attr('id'));

})