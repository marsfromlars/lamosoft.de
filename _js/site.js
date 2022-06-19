function setupPage() {

  let titleString = document.title ? document.title : "unknown title"
  let titleDiv = document.body.querySelector( '.title' )
  if( titleDiv ) {
    titleDiv.innerHTML = titleString
  }

  let navbarEl = document.body.querySelector( '.navbar' )
  if( navbarEl ) {
    let pathStrings = window.location.pathname.split('/')
    let pathElements = []
    for( let i = 0; i < pathStrings.length; i++ ) {
      let pathString = pathStrings[ i ]
      if( pathString.trim().length > 0 ) {
        if( !pathString.endsWith( '.html' ) ) {
          pathElements.push( pathString )
        }
      }
    }
    navbarEl.innerHTML = '<a href="/">home</a>'
    for( let i = 0; i < pathElements.length; i++ ) {
      navbarEl.innerHTML += ' > ' + '<a href="/' + pathElements[ i ] + '">' + pathElements[ i ] + '</a>'
    }  
  }

}

setupPage()
