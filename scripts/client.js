$( document ).ready(onReady);

//songs app.
let songs= [];

function onReady() {
    console.log('in onReady');
    $( '#addSongsButton' ).on('click', addSong);
    $( '#songsOut' ).on('click', '.digButton', digSong);
}//end onReady.

function addSong() {
    console.log('in addSong');
    //select inputs by ID
    //use their data in a new song object (using .val as a 'getter')
    let newSong= {
        artist: $('#artistIn').val(),
        title: $('#titleIn').val(),
        album: $('#albumIn').val(),
        year: $('#yearIn').val()
    }//end newSong
    //empty inputs (using .val as a 'setter')
    $('#artistIn').val('');
    $('#titleIn').val('');
    $('#albumIn').val('');
    $('#yearIn').val('');
    //push the new song object into songs array
    songs.push(newSong);
    //display the songs
    displaySongs();
}//end addSong

function digSong(){
    console.log('in digSong');
    let el = $( this ); //THIS clicked button.
    el.text( 'Hate' );
    //if dig, set to hate, otherwise set to dig
    if (el.text()=== 'Dig'){
        el.text( 'Hate' );
    } //end if
    else{
        el.text( 'Dig' );
    }//end else
    //change style of parent
    //select parent element
    let parent = $( this ).parent();
    console.log( 'my parent is:', parent );
    parent.toggleClass( 'hate' );
    
}//end digSong

function displaySongs() {
    console.log('in displaySongs');
    //target an output element by ID (el just is short for element, also el just exists in function so is reusable outside of function)
    let el = $( '#songsOut' );
    //empty out element
    el.empty();
    //loop through songs array
    for (let i = 0; i<songs.length; i++){
        //append each song to DOM
        el.append(`<li class="dig">${ songs[i].title}: ${ songs[i].artist}, ${ songs[i].album} (${ songs[i].year})
        <button class="digButton">Dig</button></li>`);
    }
}//end displaySongs.

/// - test song
songs.push( {
    artist: 'Red Hot Chili Peppers',
    title: 'Under the Bridge',
    album: 'Blood Sugar Sex Magik',
    year: 1991
});