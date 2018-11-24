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
                    var seedCounter = 0;
                    var voteCounter = 0;
                    if (seed.stage === "seed" && seed.parent === true) {
                        seedCounter += 1;
                    }
                    if (seed.parent === "") {
                        $('.results').append(`<div class="uk-card uk-card-small uk-card-default uk-width-1-2@m">
    <div id="${seed.topic}" class="uk-card-header">
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
        <ul uk-accordion>
            <li>
                <a class="uk-accordion-title" href="#">Discussion</a>
                <div class="uk-accordion-content">
                    <p>${seed.discussion}</p>
                </div>
            </li>
        </ul>
        
        <i id="t-up" class="fa fa-thumbs-up space" aria-hidden="true">(${voteCounter})</i>
        <i id="t-down" class="fa fa-thumbs-down space" aria-hidden="true">(${voteCounter})</i><br>
        <a id="reply-link" class="uk-button uk-button-text uk-text-primary" stage="${seed.stage}">Reply</a>
        <a id="comments">Comments(${seedCounter})</a>
    </div>`)
                    }

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
                    var saplingCounter = 0;
                    var voteCounter = 0;
                    if (sapling.stage === "seed" && sapling.parent === true) {
                        seedCounter += 1;
                    }
                    if (sapling.parent === "") {
                        $('.results').append(`<div class="uk-card uk-card-small uk-card-default uk-width-1-2@m">
    <div id="${sapling.topic}" class="uk-card-header">
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
        <ul uk-accordion>
            <li>
            <a class="uk-accordion-title" href="#">Discussion</a>
            <div class="uk-accordion-content">
                <p>${sapling.discussion}</p>
            </div>
            </li>
        </ul>
        <i id="t-up" class="fa fa-thumbs-up space" aria-hidden="true">(${voteCounter})</i>
        <i id="t-down" class="fa fa-thumbs-down space" aria-hidden="true">(${voteCounter})</i><br>
        <a id="reply-link" class="uk-button uk-button-text uk-text-primary" stage="${sapling.stage}">Reply</a>
        <a id="comments">Comments(${saplingCounter})</a>
    </div>`)
                    }

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
                    var treeCounter = 0;
                    var voteCounter = 0;
                    if (tree.stage === "seed" && tree.parent === true) {
                        treeCounter += 1;
                    }
                    if (tree.parent === "") {
                        $('.results').append(`<div class="uk-card uk-card-small uk-card-default uk-width-1-2@m">
    <div id="${tree.topic}" class="uk-card-header">
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
        <ul uk-accordion>
            <li>
            <a class="uk-accordion-title" href="#">Discussion</a>
            <div class="uk-accordion-content">
                <p>${tree.discussion}</p>
            </div>
            </li>
        </ul>
        <i id="t-up" class="fa fa-thumbs-up space" aria-hidden="true">(${voteCounter})</i>
        <i id="t-down" class="fa fa-thumbs-down space" aria-hidden="true">(${voteCounter})</i><br>
        <a id="reply-link" class="uk-button uk-button-text uk-text-primary" stage="${tree.stage}">Reply</a>
        <a id="comments">Comments(${treeCounter})</a>
   </div>`)
                    }

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
                    var ideasCounter = 0;
                    var voteCounter = 0;
                    if (ideas.stage === "seed" && ideas.parent === true) {
                        ideasCounter += 1;
                    }
                    if (ideas.parent === "") {
                        $('.results').append(`<div class="uk-card uk-card-small uk-card-default uk-width-1-2@m">
    <div id="${ideas.topic}" class="uk-card-header">
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
        <ul uk-accordion>
            <li>
            <a class="uk-accordion-title" href="#">Discussion</a>
            <div class="uk-accordion-content">
                <p>${ideas.discussion}</p>
            </div>
            </li>
        </ul>
        <i id="t-up" class="fa fa-thumbs-up space" aria-hidden="true">(${voteCounter})</i>
        <i id="t-down" class="fa fa-thumbs-down space" aria-hidden="true">(${voteCounter})</i><br>
        <a id="reply-link" class="uk-button uk-button-text uk-text-primary" stage="${ideas.stage}">Reply</a>
        <a id="comments">Comments(${ideasCounter})</a>
   </div>`)

                    }
                }
            }
        })
})

var topic = "";
var parent = "";
var stage = "";
var discussion = "";

$(document).on('click', '#reply-link', function () {
    topic = $(this).parent().siblings().attr('id');
    parent = $(this).parent().siblings().attr('id');
    stage = $(this).attr('stage');

    $(this).parent().parent().append(`<div class="uk-card uk-card-small uk-card-default uk-width-1-2@m">
            <div class="uk-card-header">
                <div class="uk-grid-small uk-flex-middle" uk-grid>
                    <div class="uk-width-auto">
                        <img class="uk-border-circle" width="40" height="40" src="./pics/girl.jpg">
                    </div>
                    <form id="reply-form" class="uk-width-expand">
                        <div>
                            <input id="reply-box" type="text" placeholder="What's your idea?"/>
                        </div>
                        <input id="input-btn" type="submit" value="post" class="uk-button uk-button-small uk-button-primary"/>
                    </form>
                </div>
            </div>`)
})

var counter = 0;
$(document).submit('#reply-form', function () {
    event.preventDefault();
    counter += 1;
    topic = topic + "-" + counter
    discussion = $('#reply-box').val();

    fetch('/ideas', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify({
                topic: topic,
                discussion: discussion,
                declaration: "",
                stage: stage,
                parent: parent,
                user_id: "2"
            })
        })
        .then(r => console.log(r.status))
        .catch(e => console.log(e))
})

$(document).on('click', '#comments', function() {

})

$(document).on('click','#t-up', function() {
    topic = $(this).parent().siblings().attr('id');
    fetch('/votes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify({
            topic: topic,
            upvote: true,
            downvote:false,
            user_id: "2"
        })
    })
    .then(r => console.log(r.status))
    .catch(e => console.log(e))
})

$(document).on('click', '#t-down', function(){
    topic = $(this).parent().siblings().attr('id');
    fetch('/votes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify({
            topic: topic,
            upvote: false,
            downvote:true,
            user_id: "2"
        })
    })
    .then(r => console.log(r.status))
    .catch(e => console.log(e))
})

// NEW SEED BUTTON FUNCTION

$('#new-seed').on('click', function () {
    $('.wrapper-search').css("display", "none")
    $('.wrapper').append(`
    <form class="uk-position-center form">
    <fieldset class="uk-fieldset">
      <legend class="uk-legend new-seed-title">New Seed Idea</legend>
      <div class="uk-margin">
        <input class="uk-input" type="text" placeholder="Seed Subject">
      </div>
      <div class="uk-margin">
        <textarea class="uk-textarea" rows="5" placeholder="Your Thoughts"></textarea>
      </div>
  
      <p uk-margin>
          <button id="submit-btn" class="uk-button uk-button-secondary">Submit</button>
      </p>
    </fieldset>
  </form>
    `)
  })
  
  $(document).on('click', '#submit-btn', function() {
  
  })