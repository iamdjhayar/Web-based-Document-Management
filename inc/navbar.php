<nav class="navbar fixed-top navbar-expand-lg navbar-custom">
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
<div class="border-right">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item dropdown">
              <a  class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fa fa-user"></i><span class="sr-only">(current)</span>
                    <?php session_start();
                          print_r($_SESSION['userdata']['username']) ?></a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item logOut" href="#">Logout</a>
              </div>
            </li>
            </ul>
      </div>
<ul class="navbar-nav">
  <li class="nav-item navbtn">
          <a class="nav-link" href="home.php" title="Home-Document Management"><i class="fa fa-home navlink"></i><span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item navbtn">
        <a class="nav-link" href="#" title="Message"><i class="fa fa-envelope-o navlink"></i><span class="sr-only">(current)</span></a>
    </li>
      <li class="nav-item navbtn">
        <a class="nav-link" href="#" title="Notifications"><i class="fa fa-bell-o navlink"></i><span class="sr-only">(current)</span></a>
    </li>
      <li class="nav-item navbtn">
        <a class="nav-link"  onclick="addNote();" href="#" title="Add Note"><i class="fa fa-sticky-note-o navlink"></i><span class="sr-only">(current)</span></a>
    </li>
    <li class="nav-item navbtn">
        <a class="nav-link" href="#" data-toggle="modal" title="Settings" data-target=".bd-example-modal-lg"><i class="fa fa-cog navlink"></i><span class="sr-only">(current)</span></a>   
      </li>
    </ul>

    
      <ul class="navbar-nav ml-auto">
      <a class="navbar-brand" href="#">Document Management</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  </nav>
  