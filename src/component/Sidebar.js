import React from "react";
import Sidebar from "react-sidebar";

class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: true
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }

  render() {
    return (
      <Sidebar
        sidebar={<b>Sidebar content</b>}
        open={this.state.sidebarOpen}
        onSetOpen={this.onSetSidebarOpen}
        styles={{ sidebar: { background: "white" } }}
      >
        <button onClick={() => this.onSetSidebarOpen(true)}>
          Open sidebar
        </button>
      </Sidebar>
    );
  }
}

export default SideBar;
// import React from 'react'
// import "./Sidebar.css"

// const Sidebar = () => {
//   return (
//     <div>
//        <h1 class="visually-hidden">Sidebars examples</h1>

// <div class="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style="width: 280px;">
//   <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
   
//     <span class="fs-4">Sidebar</span>
//   </a>
//   <hr />
//   <ul class="nav nav-pills flex-column mb-auto">
//     <li class="nav-item">
//       <a href="#" class="nav-link active" aria-current="page">
//         <svg class="bi me-2" width="16" height="16"><use xlink:href="#home"/></svg>
//         Home
//       </a>
//     </li>
//     <li>
//       <a href="#" class="nav-link text-white">
//         <svg class="bi me-2" width="16" height="16"><use xlink:href="#speedometer2"/></svg>
//         Dashboard
//       </a>
//     </li>
//     <li>
//       <a href="#" class="nav-link text-white">
//         <svg class="bi me-2" width="16" height="16"><use xlink:href="#table"/></svg>
//         Orders
//       </a>
//     </li>
//     <li>
//       <a href="#" class="nav-link text-white">
//         <svg class="bi me-2" width="16" height="16"><use xlink:href="#grid"/></svg>
//         Products
//       </a>
//     </li>
//     <li>
//       <a href="#" class="nav-link text-white">
//         <svg class="bi me-2" width="16" height="16"><use xlink:href="#people-circle"/></svg>
//         Customers
//       </a>
//     </li>
//   </ul>
//   <hr />
//   <div class="dropdown">
//     <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
//       <img src="https://github.com/mdo.png" alt="" width="32" height="32" class="rounded-circle me-2" />
//       <strong>mdo</strong>
//     </a>
//     <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
//       <li><a class="dropdown-item" href="#">New project...</a></li>
//       <li><a class="dropdown-item" href="#">Settings</a></li>
//       <li><a class="dropdown-item" href="#">Profile</a></li>
//       <li><hr class="dropdown-divider" /></li>
//       <li><a class="dropdown-item" href="#">Sign out</a></li>
//     </ul>
//   </div>
// </div>
//     </div>
//   )
// }

// export default Sidebar

