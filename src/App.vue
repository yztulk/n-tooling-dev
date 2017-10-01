<template>
  <div id="app" class="nav-md"> 
    <div class="hello">

      <!-- START CONTAINER BODY -->
      <div class="container body">

        <!-- START CONTAINER -->
        <div class="main_container">
          <div class="col-md-3 left_col">
            <div class="left_col scroll-view">
              <div class="navbar nav_title" style="border: 0;">
                <router-link to="/" class="site_title"><i class="fa fa-paw"></i> <span>Accelerator</span></router-link>
              </div>

              <div class="clearfix"></div>

              <!-- START PROFILE INFO -->
              <div class="profile clearfix">
                <router-link to="/UserProfile">
                  <div class="profile_pic">
                    <img src="./assets/images/2274240.jpg" alt="..." class="img-circle profile_img">
                  </div>
                </router-link>
                <div class="profile_info">
                  <span>Welcome</span>
                  <h2>Roy Bout</h2>
                </div>
              </div>
              <!-- END PROFILE INFO -->

              <br />

              <!-- START NAVIGATION MENU -->
              <div id="sidebar-menu" class="main_menu_side hidden-print main_menu">
                <div class="menu_section">
                  <h3>General</h3>
                  <ul class="nav side-menu">
                    <li><router-link to="/"><i class="fa fa-home"></i> Home <span class="fa fa-chevron-down"></span></a></router-link>
                      <ul class="nav child_menu">
                        <li><a href="index.html">Dashboard</a></li>
                        <li><a href="index2.html">Dashboard2</a></li>
                        <li><a href="index3.html">Dashboard3</a></li>
                      </ul>
                    </li>
                    <li><router-link to="/Accounts"><i class="fa fa-institution"></i> Accounts <span class="fa fa-chevron-down"></span></router-link>
                      <ul class="nav child_menu">
                        <li><a href="../production/form.html">Create New Account</a></li>
                        <li><a href="form_advanced.html">View Accounts</a></li>
                        <li><a href="form_validation.html">Statistics</a></li>
                      </ul>
                    </li>
                    <li><router-link to="/Contacts"><i class="fa fa-male"></i> Contacts <span class="fa fa-chevron-down"></span></router-link>
                      <ul class="nav child_menu">
                        <li><a href="form.html">Create New Contact</a></li>
                        <li><a href="form_advanced.html">View Contacts</a></li>
                        <li><a href="form_validation.html">Statistics</a></li>
                      </ul>
                    </li>
                    <li><router-link to="/Leads"><i class="fa fa-user"></i> Leads <span class="fa fa-chevron-down"></span></router-link>
                      <ul class="nav child_menu">
                        <li><a href="form.html">Create New Lead</a></li>
                        <li><a href="form_advanced.html">View Leads</a></li>
                        <li><a href="form_validation.html">Statistics</a></li>
                      </ul>
                    </li>
                    <li><router-link to="/Plans"><i class="fa fa-sitemap"></i> Plans <span class="fa fa-chevron-down"></span></router-link>
                      <ul class="nav child_menu">
                        <li><a href="form.html">Create New Plan</a></li>
                        <li><a href="form_advanced.html">View Plans</a></li>
                        <li><a href="form_validation.html">Statistics</a></li>
                      </ul>
                    </li>
                    <li><router-link to="/FundSources"><i class="fa fa-money"></i> Fund Sources <span class="fa fa-chevron-down"></span></router-link>
                      <ul class="nav child_menu">
                        <li><a href="form.html">Create New Fund Source</a></li>
                        <li><a href="form_advanced.html">View Fund Sources</a></li>
                        <li><a href="form_validation.html">Statistics</a></li>
                      </ul>
                    </li>
                    <li><router-link to="/Products"><i class="fa fa-star"></i> Products<span class="fa fa-chevron-down"></span></router-link>
                      <ul class="nav child_menu">
                        <li><a href="form.html">Create New Product</a></li>
                        <li><a href="form.html">Create New Price Book</a></li>
                        <li><a href="form_advanced.html">View Products</a></li>
                        <li><a href="form_advanced.html">View Price Books</a></li>
                        <li><a href="form_validation.html">Statistics</a></li>
                      </ul>
                    </li>
                    <li><router-link to="/"><i class="fa fa-book"></i> Price Books<span class="fa fa-chevron-down"></span></router-link>
                      <ul class="nav child_menu">
                        <li><a href="form.html">Create New Product</a></li>
                        <li><a href="form.html">Create New Price Book</a></li>
                        <li><a href="form_advanced.html">View Products</a></li>
                        <li><a href="form_advanced.html">View Price Books</a></li>
                        <li><a href="form_validation.html">Statistics</a></li>
                      </ul>
                    </li>
                    <li><router-link to="/CSVCreation"><i class="fa fa-file-archive-o"></i> NDIS CSV Generation<span class="fa fa-chevron-down"></span></router-link>
                      <ul class="nav child_menu">
                        <li><a href="form.html">Create New Csv</a></li>
                        <li><a href="form_advanced.html">View CSVs</a></li>
                      </ul>
                    </li>
                    <li><router-link to="/Reports"><i class="fa fa-area-chart"></i> Reports <span class="fa fa-chevron-down"></span></router-link>
                      <ul class="nav child_menu">
                        <li><a href="form.html">Therapist Utilization</a></li>
                        <li><a href="form_advanced.html">Support Worker Utilization</a></li>
                        <li><a href="form_validation.html">Revenue by Business Unit</a></li>
                        <li><a href="form_wizards.html">KPI Performance</a></li>
                        <li><a href="form_wizards.html">Plan Financials</a></li>
                        <li><a href="form_wizards.html">Outstanding Invoices</a></li>
                        <li><a href="form_wizards.html">Create New Report</a></li>
                        <li><a href="form_wizards.html">View All Reports</a></li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div class="menu_section">
                  <h3>Live On</h3>
                  <ul class="nav side-menu">
                    <li>
                      <router-link to="/AllPages"><i class="fa fa-bug"></i> All Pages <span class="fa fa-chevron-down"></span></router-link>
                      <ul class="nav child_menu">
                        <li><a href="e_commerce.html">E-commerce</a></li>
                        <li><a href="projects.html">Projects</a></li>
                        <li><a href="project_detail.html">Project Detail</a></li>
                        <li><a href="contacts.html">Contacts</a></li>
                        <li><a href="profile.html">Profile</a></li>
                      </ul>
                    </li>
                    <li><a><i class="fa fa-windows"></i> Extras <span class="fa fa-chevron-down"></span></a>
                      <ul class="nav child_menu">
                        <li><a href="page_403.html">403 Error</a></li>
                        <li><a href="page_404.html">404 Error</a></li>
                        <li><a href="page_500.html">500 Error</a></li>
                        <li><a href="plain_page.html">Plain Page</a></li>
                        <li><a href="login.html">Login Page</a></li>
                        <li><a href="pricing_tables.html">Pricing Tables</a></li>
                      </ul>
                    </li>
                    <li><a><i class="fa fa-sitemap"></i> Multilevel Menu <span class="fa fa-chevron-down"></span></a>
                      <ul class="nav child_menu">
                          <li><a href="#level1_1">Level One</a>
                          <li><a>Level One<span class="fa fa-chevron-down"></span></a>
                            <ul class="nav child_menu">
                              <li class="sub_menu"><a href="level2.html">Level Two</a>
                              </li>
                              <li><a href="#level2_1">Level Two</a>
                              </li>
                              <li><a href="#level2_2">Level Two</a>
                              </li>
                            </ul>
                          </li>
                          <li><a href="#level1_2">Level One</a>
                          </li>
                      </ul>
                    </li>                  
                    <li><a href="javascript:void(0)"><i class="fa fa-laptop"></i> Landing Page <span class="label label-success pull-right">Coming Soon</span></a></li>
                  </ul>
                </div>
              </div>
              <!-- END NAVIGATION MENU -->

              <!-- START MENU FOOTER -->
              <div class="sidebar-footer hidden-small">
                <router-link to="/Settings" data-toggle="tooltip" data-placement="top" title="Settings">
                    <span class="glyphicon glyphicon-cog" aria-hidden="true"></span>
                </router-link>
                <router-link to="/Settings" data-toggle="tooltip" data-placement="top" title="FullScreen">
                  <span class="glyphicon glyphicon-fullscreen" aria-hidden="true"></span>
                </router-link>
                <router-link to="/Settings" data-toggle="tooltip" data-placement="top" title="Lock">
                  <span class="glyphicon glyphicon-eye-close" aria-hidden="true"></span>
                </router-link>
                <router-link to="/Settings" data-toggle="tooltip" data-placement="top" title="Logout" href="login.html">
                  <span class="glyphicon glyphicon-off" aria-hidden="true"></span>
                </router-link>
              </div>
              <!-- END MENU FOOTER -->

            </div>
          </div>

          <!-- START TOP NAVIGATION -->
          <div class="top_nav">
            <div class="nav_menu">
              <nav>
                <div class="nav toggle">
                  <a id="menu_toggle"><i class="fa fa-bars"></i></a>
                </div>

                <ul class="nav navbar-nav navbar-right">
                  <li class="">
                    <a href="javascript:;" class="user-profile dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                      <img src="./assets/images/2274240.jpg" alt="">Roy Bout
                      <span class=" fa fa-angle-down"></span>
                    </a>
                    <ul class="dropdown-menu dropdown-usermenu pull-right">
                      <li><a href="javascript:;"> Profile</a></li>
                      <li>
                        <a href="javascript:;">
                          <span class="badge bg-red pull-right">50%</span>
                          <span>Settings</span>
                        </a>
                      </li>
                      <li><a href="javascript:;">Help</a></li>
                      <li><a href="login.html"><i class="fa fa-sign-out pull-right"></i> Log Out</a></li>
                    </ul>
                  </li>

                  <li role="presentation" class="dropdown">
                    <a href="javascript:;" class="dropdown-toggle info-number" data-toggle="dropdown" aria-expanded="false">
                      <i class="fa fa-envelope-o"></i>
                      <span class="badge bg-green">6</span>
                    </a>
                    <ul id="menu1" class="dropdown-menu list-unstyled msg_list" role="menu">
                      <li>
                        <a>
                          <span class="image"><img src="./assets/images/img.jpg" alt="Profile Image" /></span>
                          <span>
                            <span>John Smith</span>
                            <span class="time">3 mins ago</span>
                          </span>
                          <span class="message">
                            Film festivals used to be do-or-die moments for movie makers. They were where...
                          </span>
                        </a>
                      </li>
                      <li>
                        <a>
                          <span class="image"><img src="./assets/images/img.jpg" alt="Profile Image" /></span>
                          <span>
                            <span>John Smith</span>
                            <span class="time">3 mins ago</span>
                          </span>
                          <span class="message">
                            Film festivals used to be do-or-die moments for movie makers. They were where...
                          </span>
                        </a>
                      </li>
                      <li>
                        <a>
                          <span class="image"><img src="./assets/images/img.jpg" alt="Profile Image" /></span>
                          <span>
                            <span>John Smith</span>
                            <span class="time">3 mins ago</span>
                          </span>
                          <span class="message">
                            Film festivals used to be do-or-die moments for movie makers. They were where...
                          </span>
                        </a>
                      </li>
                      <li>
                        <a>
                          <span class="image"><img src="./assets/images/img.jpg" alt="Profile Image" /></span>
                          <span>
                            <span>John Smith</span>
                            <span class="time">3 mins ago</span>
                          </span>
                          <span class="message">
                            Film festivals used to be do-or-die moments for movie makers. They were where...
                          </span>
                        </a>
                      </li>
                      <li>
                        <div class="text-center">
                          <a>
                            <strong>See All Alerts</strong>
                            <i class="fa fa-angle-right"></i>
                          </a>
                        </div>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <!-- END TOP NAVIGATION -->

          <!-- START MAIN BODY -->
          <div class="right_col" role="main">
            <transition name="fade">
              <router-view></router-view>
            </transition>
          </div>
          <!-- END MAIN BODY -->

        <!-- START FOOTER -->
        <footer>
          <div class="pull-right footer-fixed">
            Acclerator
          </div>
          <div class="clearfix"></div>
        </footer>
        <!-- END FOOTER -->

        </div>
        <!-- END CONTAINER -->
      </div>
      <!-- END CONTAINER BODY -->
    </div>
  </div>
</template>

<script>
  import "./assets/vendors/jquery/dist/jquery.min.js"; //does work
  import "./assets/vendors/bootstrap/dist/js/bootstrap.min.js";
  import "./assets/vendors/fastclick/lib/fastclick.js";
  import "./assets/vendors/nprogress/nprogress.js";
  import "./assets/vendors/Chart.js/dist/Chart.min.js";
  import "./assets/vendors/gauge.js/dist/gauge.min.js";
  import "./assets/vendors/bootstrap-progressbar/bootstrap-progressbar.min.js";
  import "./assets/vendors/iCheck/icheck.js";
  import "./assets/vendors/skycons/skycons.js";

  import "./assets/vendors/Flot/jquery.flot.js";
  import "./assets/vendors/Flot/jquery.flot.pie.js";
  import "./assets/vendors/Flot/jquery.flot.time.js";
  import "./assets/vendors/Flot/jquery.flot.stack.js";
  import "./assets/vendors/Flot/jquery.flot.resize.js";

  import "./assets/vendors/flot.orderbars/js/jquery.flot.orderBars.js";
  import "./assets/vendors/flot-spline/js/jquery.flot.spline.min.js";
  import "./assets/vendors/flot.curvedlines/curvedLines.js";

  // import "./assets/vendors/DateJS/build/date.js"; 

  import "./assets/vendors/jqvmap/dist/jquery.vmap.js";
  import "./assets/vendors/jqvmap/dist/maps/jquery.vmap.world.js";
  import "./assets/vendors/jqvmap/examples/js/jquery.vmap.sampledata.js";

  import moment from 'moment'
  // import "./assets/vendors/bootstrap-daterangepicker/daterangepicker.js"; 

  import custom from "./assets/js/custom.js";
  
  export default {
    name: 'app'
  }
</script>
 
<style>
  .fade-enter-active, .fade-leave-active {
    transition-property: opacity;
    transition-duration: .25s;
  }

  .fade-enter-active {
    transition-delay: .25s;
  }

  .fade-enter, .fade-leave-active {
    opacity: 0
  }

  @import './assets/vendors/bootstrap/dist/css/bootstrap.min.css';
  @import './assets/vendors/font-awesome/css/font-awesome.min.css';
  @import './assets/vendors/nprogress/nprogress.css';
  @import './assets/vendors/iCheck/skins/flat/green.css';
  @import './assets/vendors/bootstrap-progressbar/css/bootstrap-progressbar-3.3.4.min.css';
  @import './assets/vendors/jqvmap/dist/jqvmap.min.css';
  @import './assets/vendors/bootstrap-daterangepicker/daterangepicker.css';
  @import './assets/css/custom.min.css';
</style>
