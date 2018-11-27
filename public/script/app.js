$(document).ready(() => {
    $('.results').css("display", "none")
    $('.signing-up').css("display", "none")
    $('.signing-in').css("display", "none")
    $('#sign-in').css("display", "")
    $('#sign-up').css("display", "")
    $('#sign-out').css("display", "none")
    $('#open-profile').css("display", "none")
    displayUserMenu()
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
        
        
        <i id="t-up" class="fa fa-thumbs-up space thumbs thumbs-up" aria-hidden="true">(${voteCounter})</i>
        <i id="t-down" class="fa fa-thumbs-down space thumbs" aria-hidden="true">(${voteCounter})</i>
        <a id="comments">Comments(${seedCounter})</a>
        <div>
            <textarea id="text-reply" placeholder="Reply to Discussion"></textarea>
            <button id="reply-btn-comment" class="uk-button uk-button-deafault uk-button-primary" stage="${seed.stage}">Reply</button>
        </div>
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
        <i id="t-up" class="fa fa-thumbs-up space thumbs thumbs-up" aria-hidden="true">(${voteCounter})</i>
        <i id="t-down" class="fa fa-thumbs-down space thumbs" aria-hidden="true">(${voteCounter})</i>
        <a id="comments">Comments(${saplingCounter})</a>
        <div>
            <textarea id="text-reply" placeholder="Reply to Discussion"></textarea>
            <button id="reply-btn-comment" class="uk-button uk-button-deafault uk-button-primary" stage="${sapling.stage}">Reply</button>
        </div>
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
        <i id="t-up" class="fa fa-thumbs-up space thumbs thumbs-up" aria-hidden="true">(${voteCounter})</i>
        <i id="t-down" class="fa fa-thumbs-down space thumbs" aria-hidden="true">(${voteCounter})</i>
        <a id="comments">Comments(${treeCounter})</a>
        <div>
            <textarea id="text-reply" placeholder="Reply to Discussion"></textarea>
            <button id="reply-btn-comment" class="uk-button uk-button-deafault uk-button-primary" stage="${tree.stage}">Reply</button>
        </div>
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
    var keyword = $('search-box').val()
    fetch(`/ideas`)
        .then(r => r.json())
        .then(r => {
            for (const key in r) {
                if (r.hasOwnProperty(key)) {
                    const ideas = r[key];
                    var ideaCounter = 0;
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
        <i id="t-up" class="fa fa-thumbs-up space thumbs thumbs-up" aria-hidden="true">(${voteCounter})</i>
        <i id="t-down" class="fa fa-thumbs-down space thumbs" aria-hidden="true">(${voteCounter})</i>
        <a id="comments">Comments(${ideaCounter})</a>
        <div>
            <textarea id="text-reply" placeholder="Reply to Discussion"></textarea>
            <button id="reply-btn-comment" class="uk-button uk-button-deafault uk-button-primary" stage="${ideas.stage}">Reply</button>
        </div>
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
var text = "";
var counter = 0;

$(document).on('click', '#reply-btn-comment', function () {
    topic = $(this).parent().parent().siblings().attr('id');
    parent = $(this).parent().parent().siblings().attr('id');
    stage = $(this).attr('stage');
    discussion = $('#text-reply').val()

    // console.log(`topic is ${topic} parent is ${parent} stage is ${stage} text from textbox is ${discussion}`)

    counter += 1;
    topic = topic + "-" + counter

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
                user_id: "4"
            })
        })
    
        .then(r => console.log(r.status))
        .catch(e => console.log(e))
});


$(document).on('click', '#comments', function () {
    topic = $(this).parent().siblings().attr('id');

    fetch(`/ideas/parent/${topic}`)
        .then(r => r.json())
        .then(r => {

            for (const key in r) {
                if (r.hasOwnProperty(key)) {
                    const reply = r[key];
                    var disc = reply.discussion;
                    var userId = reply.user_id;

                    fetch(`/users/id/${userId}`)
                        .then(r2 => r2.json())
                        .then(r2 => {
                            console.log(r2)
                            var uname = r2.userName;
                            console.log(uname)

                            fetch(`/votes/${topic}`)
                                .then(r2 => r2.json())
                                .then(r2 => {
                                    for (const key in r2) {
                                        if (r2.hasOwnProperty(key)) {
                                            const votes = r2[key];
                                            console.log(votes)
                                        }
                                    }

                                    
                                })

                            $(this).parent().append(`
                           <hr>
                <div>
                    <table>
                        <tr>
                            <th><button id="reply-image"></button></th>
                            <th id="u-header">${uname}</th>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <p>${disc}</p>
                            </td>
                        </tr>
                    </table>
                    <div id="reply-reply">
                        <i id="t-up" class="fa fa-thumbs-up space thumbs thumbs-up" aria-hidden="true">(${0})</i>
                        <i id="t-down" class="fa fa-thumbs-down space thumbs" aria-hidden="true">(${0})</i>
                        <a id="comments">Comments(${0})</a>
                        <div>
                            <textarea id="text-reply" placeholder="Reply to Discussion"></textarea>
                            <button id="reply-btn-comment" class="uk-button uk-button-deafault uk-button-primary">Reply</button>
                        </div>
                    </div>
                </div>

                           `)
                        })
                }
            }
        })

})

$(document).on('click', '#t-up', function () {
    topic = $(this).parent().siblings().attr('id');
    fetch('/votes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify({
            topic: topic,
            upvote: true,
            downvote: false,
            user_id: "2"
        })
    })
        .then(r => console.log(r.status))
        .catch(e => console.log(e))
})

$(document).on('click', '#t-down', function () {
    topic = $(this).parent().siblings().attr('id');
    fetch('/votes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify({
            topic: topic,
            upvote: false,
            downvote: true,
            user_id: "2"
        })
    })
        .then(r => console.log(r.status))
        .catch(e => console.log(e))
})

// NEW SEED BUTTON FUNCTION
if (isLoggedIn()) {
    $(document).on('click', '#new-seed', function () {
        
        $('.wrapper-search').css("display", "none")
        $('.wrapper').append(`
    <form id="form" class="uk-position-center form">
    <fieldset class="uk-fieldset">
      <legend id="form-title" class="uk-legend new-seed-title">New Seed Idea</legend>
      <div class="uk-margin">
        <input id="seed-subject" class="uk-input" type="text" placeholder="Seed Subject">
      </div>
      <div class="uk-margin">
        <textarea id="your-thoughts" class="uk-textarea" rows="5" placeholder="Your Thoughts"></textarea>
      </div>
  
      <p uk-margin>
          <button id="submit-btn" class="uk-button uk-button-secondary">Submit</button>
      </p>
    </fieldset>
  </form>
    `)
    }

    )
}



$(document).on('click', '#submit-btn', function () {
    var newTopic = $('#seed-subject').val();
    var yourThoughts = $('#your-thoughts').val()

    fetch('/ideas', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify({
            topic: newTopic,
            discussion: yourThoughts,
            declaration: "",
            stage: 'seed',
            parent: '',
            user_id: "2"
        })
    })
        .then(r => console.log(r.status))
        .catch(e => console.log(e))
})

// ------------------User Authentication-----------------
$('#sign-in').on('click', function () {
    $('.wrapper-body').css("display", "none");
    $('.signing-in').html('');
    $('.signing-up').hide();
    $('.signing-in').css("display", "")
    $('.signing-in').append(`
    <h1 align="center">Sign In</h1>
    <p align="center">The world is awaiting you!</p>
    <hr>
    <form>

    <div class="uk-margin">
        <div class="uk-inline">
            <span class="uk-form-icon" uk-icon="icon: mail"></span>
            <input id="email" class="uk-input" type="text" placeholder="Email Address">
        </div>
    </div>

    <div class="uk-margin">
        <div class="uk-inline">
            <span class="uk-form-icon" uk-icon="icon: lock"></span>
            <input id="password" class="uk-input" type="password" placeholder="Password">
        </div>
    </div>

</form>
<hr>
<button id="sign-in-btn" class="uk-button uk-button-default uk-button-primary uk-button-small">Sign in</button>
    `)
})

$('#sign-up').on('click', function () {
    $('.wrapper-body').css("display", "none");
    // Empty the div content before adding any new content
    $('.signing-up').html('');
    $('.signing-in').hide();
    $('.signing-up').css("display", "")
    $('.signing-up').append(`
    <h1 align="center">Sign Up</h1>
    <p align="center">Spread your ideas</p>
    <hr>
    <form>

    <div class="uk-margin">
        <div class="uk-inline">
            <span class="uk-form-icon" uk-icon="icon: user"></span>
            <input id="first-name" class="uk-input" type="text" placeholder="First Name">
        </div>
    </div>

    <div class="uk-margin">
        <div class="uk-inline">
            <span class="uk-form-icon" uk-icon="icon: user"></span>
            <input id="last-name" class="uk-input" type="text" placeholder="Last Name">
        </div>
    </div>

    <div class="uk-margin">
        <div class="uk-inline">
            <span class="uk-form-icon" uk-icon="icon: mail"></span>
            <input id="email" class="uk-input" type="text" placeholder="Email Address">
        </div>
    </div>

    <div class="uk-margin">
        <div class="uk-inline">
            <span class="uk-form-icon" uk-icon="icon: lock"></span>
            <input id="password" class="uk-input" type="password" placeholder="Password">
        </div>
    </div>

</form>
<hr>
<button id="sign-up-btn" class="uk-button uk-button-default uk-button-primary uk-button-small">Sign Up</button>
    `)
})

$(document).on('click', '#sign-up-btn', function () {
    var fname = $('#first-name').val();
    var lname = $('#last-name').val();
    var email = $('#email').val();
    var password = $('#password').val();


    $.ajax({
        // url:'/users?userName'+email,
        url: '/users/' + email,
        method: 'GET',
        // data: JSON.stringify({ userName: email }),
        contentType: "application/json; charset=utf-8",
        success: function (r) {
            // console.log('return find');
            // console.log(r);
            // console.log(r.length);
            if(r != null)
            {
                alert(email + ' already been registered ');
            }
            else
            {
                fetch('/users', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json; charset=utf-8'
                    },
                    body: JSON.stringify({
                        firstName: fname,
                        lastName: lname,
                        userName: email,
                        password: password,
                        loggedIn: false
                    })
                })
                    .then(res => console.log(res))
                    .then(r => {
                        // console.log(r);
                        // console.log(r.status);
                        //alert('a');
                        console.log(email);
                        // Sig in after sign up
                        $('#sign-in').click();
                        $(".signing-in").hide();
                        $('#email').val(email);
                        $('#password').val(password);
                        $('#sign-in-btn').click();

                    });
                    // .catch(err => {
                    //     alert(email + ' already been registered ');
                    // });

                $('.wrapper-body').css("display", "");
                $('.signing-up').css("display", "none")

            }
        },
        error: function (error) {
            console.log('error find');
            console.log(error);
            alert(email + ' already been registered ');
        }
    })

    // $.ajax({
    //     url: '/users',
    //     method: 'POST',
    //     contentType: "application/json; charset=utf-8",
    //     data : JSON.stringify({
    //         firstName: fname,
    //         lastName: lname,
    //         userName: email,
    //         password: password,
    //         loggedIn: false
    //     }),
    //     success : function (r) {
    //         console.log(r);
    //         console.log(r.status);
    //         alert('a');
    //         console.log(email);
    //         // Sig in after sign up
    //         $('#sign-in').click();
    //         $(".signing-in").hide();
    //         $('#email').val(email);
    //         $('#password').val(password);
    //         $('#sign-in-btn').click();
    //     },
    //     error : function (error) {
    //         alert(email + ' already been registered ');
    //     }
    // });

    

    
})


function deleteSession() {
    delete window.sessionStorage["UserID"];
    delete window.sessionStorage["UserFullName"];
}

function setSession(r) {
    window.sessionStorage["UserID"] = r.id;
    window.sessionStorage["UserFullName"] = r.firstName + ' ' + r.lastName;
}

function isLoggedIn() {
    return typeof window.sessionStorage["UserID"] != 'undefined' && window.sessionStorage["UserID"] != null;

}
function displayUserMenu() {
    if (isLoggedIn()) {
        $('.wrapper-body').css("display", "");
        $('#sign-in').css("display", "none")
        $('#sign-up').css("display", "none")
        $('#sign-out').css("display", "")
        $('#open-profile').css("display", "")
        $('.signing-in').css("display", "none")
    }
}
$(document).on('click', '#sign-in-btn', function () {

    var email = $('#email').val();
    var password = $('#password').val();
    
    fetch(`/users/userName/${email}`)
        .then(r => r.json())
        .then(r => {
            if (r === null) {
                alert('email address does not exist');
            } else if (r.password === password && r.userName === email) {

                setSession(r);
                displayUserMenu();
                

            } else {
                alert("Username / Password combination not correct")
            }
            //HideUserMenu();
            location.reload()
            // DisabledLinksAfterSignOut();
        })
        
    
})
//The reload() function takes an optional parameter that can be set to true to force a reload from the server rather than the cache. The parameter defaults to false, so by default the page may reload from the browser's cache.
$('#sign-out').on('click', () => {
    deleteSession();
    //HideUserMenu();
    location.reload();
    
})


function DisabledLinksAfterSignOut()
{
    $("#new-seed").css('disabled', 'disabled');
}

function DisabledLinksAfterSignOut() {
    $("#new-seed").css('disabled', '');
}

function HideUserMenu() {
    if (!isLoggedIn()) {
        $('.wrapper-body').css("display", "none");
        $('#sign-in').css("display", "")
        $('#sign-up').css("display", "")
        $('#sign-out').css("display", "none")
        $('#open-profile').css("display", "none")
        $('.signing-in').css("display", "")
    }
}
