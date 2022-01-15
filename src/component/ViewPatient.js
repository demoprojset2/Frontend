import React, { Component } from "react";
import "./View.css";
class ViewPatient extends Component {
    render() {
        return (
          <div>
              
<div class="container mt-5">
<div class="container d-flex justify-content-center">
<section class="projects no-padding-top">
<div class="container">
<form class="example" action="action_page.php">
  <input type="text" placeholder="Search.." name="search"></input>
  <button type="submit"><i class="fa fa-search"></i></button>
</form>
  <div class="project">
    <div class="row bg-white has-shadow">
      <div class="left-col col-lg-6 d-flex align-items-center justify-content-between">
        <div class="project-title d-flex align-items-center">
          
          <div class="image has-shadow"><img src={"https://www.w3schools.com/howto/img_avatar.png"} alt="..." class="img-fluid"></img></div>
          <div class="text">
            <h3 class="h4">Patient name</h3><small>patient id</small>
          </div>
        </div>
        <div class="project-date"><span class="hidden-sm-down">Today at 4:24 AM</span></div>
      </div>
      <div class="right-col col-lg-6 d-flex align-items-center">
        <div class="time"><i class="fa fa-clock-o"></i>12:00 PM </div>
        <div class="comments"><i class="fa fa-comment-o"></i>20</div>
        
      </div>
    </div>
  </div>
 
  <div class="project">
    <div class="row bg-white has-shadow">
      <div class="left-col col-lg-6 d-flex align-items-center justify-content-between">
        <div class="project-title d-flex align-items-center">
          <div class="image has-shadow"><img src={"https://www.w3schools.com/howto/img_avatar2.png"} alt="..." class="img-fluid"></img></div>
          <div class="text">
            <h3 class="h4">Project Title</h3><small>Lorem Ipsum Dolor</small>
          </div>
        </div>
        <div class="project-date"><span class="hidden-sm-down">Today at 4:24 AM</span></div>
      </div>
      <div class="right-col col-lg-6 d-flex align-items-center">
        <div class="time"><i class="fa fa-clock-o"></i>12:00 PM </div>
        <div class="comments"><i class="fa fa-comment-o"></i>20</div>
        <div class="project-progress">
          <div class="progress">
            
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="project">
    <div class="row bg-white has-shadow">
      <div class="left-col col-lg-6 d-flex align-items-center justify-content-between">
        <div class="project-title d-flex align-items-center">
          {/* <div class="image has-shadow"><img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="..." class="img-fluid"></div> */}
          <div class="text">
            <h3 class="h4">Project Title</h3><small>Lorem Ipsum Dolor</small>
          </div>
        </div>
        <div class="project-date"><span class="hidden-sm-down">Today at 4:24 AM</span></div>
      </div>
      <div class="right-col col-lg-6 d-flex align-items-center">
        <div class="time"><i class="fa fa-clock-o"></i>12:00 PM </div>
        <div class="comments"><i class="fa fa-comment-o"></i>20</div>
        <div class="project-progress">
          <div class="progress">
            {/* <div role="progressbar" style="width: 50%; height: 6px;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" class="progress-bar bg-violet"></div> */}
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <div class="project">
    <div class="row bg-white has-shadow">
      <div class="left-col col-lg-6 d-flex align-items-center justify-content-between">
        <div class="project-title d-flex align-items-center">
          {/* <div class="image has-shadow"><img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="..." class="img-fluid"></div> */}
          <div class="text">
            <h3 class="h4">Project Title</h3><small>Lorem Ipsum Dolor</small>
          </div>
        </div>
        <div class="project-date"><span class="hidden-sm-down">Today at 4:24 AM</span></div>
      </div>
      <div class="right-col col-lg-6 d-flex align-items-center">
        <div class="time"><i class="fa fa-clock-o"></i>12:00 PM </div>
        <div class="comments"><i class="fa fa-comment-o"></i>20</div>
        <div class="project-progress">
          <div class="progress">
            {/* <div role="progressbar" style="width: 50%; height: 6px;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" class="progress-bar bg-orange"></div> */}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</section>
</div>
</div>
</div>
  );
}
	}

export default ViewPatient;