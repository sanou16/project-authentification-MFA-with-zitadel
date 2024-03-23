import React from 'react'

function Header() {
  return (
    <div >
    <header>
    <nav class="navbar navbar-expand-md navbar-light bg-light fixed-top col-md-12 col-xs-12 col-sm-12 col-lg-12 col-xl-12">
            <ul class="navbar-nav mr-auto">
                <div><li class="col-6 nav-item active"> <a href="/" class="nav-link">Home</a></li></div>
                <div><li class="col-6 nav-item"> <a href="/about" class="nav-link">About</a></li></div>
            </ul>
        </nav>  
    </header>
    </div>
    
  )
}

export default Header