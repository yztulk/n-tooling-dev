<template>
  <div id="dashboardTemplate">

    <!-- START TOP ROW COUNT -->
    <div class="row tile_count">
      <div class="col-md-2 col-sm-4 col-xs-6 tile_stats_count">
        <span class="count_top"><i class="fa fa-user"></i> Total Active Plans</span>
        <div class="count">2500</div>
        <span class="count_bottom"><i class="green">4% </i> From last Week</span>
      </div>
      <div class="col-md-2 col-sm-4 col-xs-6 tile_stats_count">
        <span class="count_top"><i class="fa fa-clock-o"></i> Total Unplanned Services</span>
        <div class="count">$375,000</div>
        <span class="count_bottom"><i class="green"><i class="fa fa-sort-asc"></i>3% </i> From last Week</span>
      </div>
      <div class="col-md-2 col-sm-4 col-xs-6 tile_stats_count">
        <span class="count_top"><i class="fa fa-user"></i> Total Jobs Scheduled Today</span>
        <div class="count green">{{ statistic.jobCount }}</div>
        <span class="count_bottom"><i class="green"><i class="fa fa-sort-asc"></i>34% </i> From last Week</span>
      </div>
      <div class="col-md-2 col-sm-4 col-xs-6 tile_stats_count">
        <span class="count_top"><i class="fa fa-user"></i> Total Open Invoices</span>
        <div class="count">15</div>
        <span class="count_bottom"><i class="red"><i class="fa fa-sort-desc"></i>12% </i> From last Week</span>
      </div>
      <div class="col-md-2 col-sm-4 col-xs-6 tile_stats_count">
        <span class="count_top"><i class="fa fa-user"></i> Average Utilization</span>
        <div class="count">75%</div>
        <span class="count_bottom"><i class="green"><i class="fa fa-sort-asc"></i>34% </i> From last Week</span>
      </div>
      <div class="col-md-2 col-sm-4 col-xs-6 tile_stats_count">
        <span class="count_top"><i class="fa fa-user"></i> Total Connections</span>
        <div class="count">7,325</div>
        <span class="count_bottom"><i class="green"><i class="fa fa-sort-asc"></i>34% </i> From last Week</span>
      </div>
    </div>
    <!-- END TOP ROW COUNT -->

    <!-- BEGIN GRAPH TOTAL REVENUE -->
    <div class="row">
      <div class="col-md-12 col-sm-12 col-xs-12">
        <div class="dashboard_graph">
          <div class="row x_title">
            <div class="col-md-6">
              <h3>Total Revenue Generated <small>Therapy and Choose &amp; Connect</small></h3>
            </div>
            <div class="col-md-6">
              <div id="reportrange" class="pull-right" style="background: #fff; cursor: pointer; padding: 5px 10px; border: 1px solid #ccc">
                <i class="glyphicon glyphicon-calendar fa fa-calendar"></i>
                <span>December 30, 2014 - January 28, 2015</span> <b class="caret"></b>
              </div>
            </div>
          </div>

          <div class="col-md-9 col-sm-9 col-xs-12">
            <div id="chart_plot_01" class="demo-placeholder"></div>
          </div>
          <div class="col-md-3 col-sm-3 col-xs-12 bg-white">
            <div class="x_title">
              <h2>Top Employee Performers</h2>
              <div class="clearfix"></div>
            </div>

            <div class="col-md-12 col-sm-12 col-xs-6">
              <div>
                <p>Roy Bout</p>
                <div class="">
                  <div class="progress progress_sm" style="width: 76%;">
                    <div class="progress-bar bg-green" role="progressbar" data-transitiongoal="80"></div>
                  </div>
                </div>
              </div>
              <div>
                <p>Jeroen Brejaart</p>
                <div class="">
                  <div class="progress progress_sm" style="width: 76%;">
                    <div class="progress-bar bg-green" role="progressbar" data-transitiongoal="60"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-12 col-sm-12 col-xs-6">
              <div>
                <p>Carlo de Jonge</p>
                <div class="">
                  <div class="progress progress_sm" style="width: 76%;">
                    <div class="progress-bar bg-green" role="progressbar" data-transitiongoal="40"></div>
                  </div>
                </div>
              </div>
              <div>
                <p>Piet Heijn</p>
                <div class="">
                  <div class="progress progress_sm" style="width: 76%;">
                    <div class="progress-bar bg-green" role="progressbar" data-transitiongoal="50"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="clearfix"></div>
        </div>
      </div>
    </div>
    <!-- END GRAPH TOTAL REVENUE -->

    <br />

    <!-- BEGIN SECOND ROW -->
    <div class="row">

      <!-- START FIRST COMPONENT -->
      <div class="col-md-4 col-sm-4 col-xs-12">
        <div class="x_panel tile fixed_height_320">
          <div class="x_title">
            <h2>Largest Plans and Completeness</h2>
            <ul class="nav navbar-right panel_toolbox">
              <li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a>
              </li>
              <li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i class="fa fa-wrench"></i></a>
                <ul class="dropdown-menu" role="menu">
                  <li><a href="#">Settings 1</a>
                  </li>
                  <li><a href="#">Settings 2</a>
                  </li>
                </ul>
              </li>
              <li><a class="close-link"><i class="fa fa-close"></i></a>
              </li>
            </ul>
            <div class="clearfix"></div>
          </div>
          <div class="x_content">
            <!-- <h4>Largest Plans Accross Business Units</h4> -->
            <div class="widget_summary">
              <div class="w_left w_25">
                <span>John Richard</span>
              </div>
              <div class="w_center w_55">
                <div class="progress">
                  <div class="progress-bar bg-green" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 66%;">
                    <span class="sr-only">60% Complete</span>
                  </div>
                </div>
              </div>
              <div class="w_right w_20">
                <span>123k</span>
              </div>
              <div class="clearfix"></div>
            </div>

            <div class="widget_summary">
              <div class="w_left w_25">
                <span>Deetta Cloer</span>
              </div>
              <div class="w_center w_55">
                <div class="progress">
                  <div class="progress-bar bg-green" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 45%;">
                    <span class="sr-only">60% Complete</span>
                  </div>
                </div>
              </div>
              <div class="w_right w_20">
                <span>90k</span>
              </div>
              <div class="clearfix"></div>
            </div>
            <div class="widget_summary">
              <div class="w_left w_25">
                <span>Yang Keele</span>
              </div>
              <div class="w_center w_55">
                <div class="progress">
                  <div class="progress-bar bg-green" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 75%;">
                    <span class="sr-only">55% Complete</span>
                  </div>
                </div>
              </div>
              <div class="w_right w_20">
                <span>80k</span>
              </div>
              <div class="clearfix"></div>
            </div>
            <div class="widget_summary">
              <div class="w_left w_25">
                <span>Reta Fairey</span>
              </div>
              <div class="w_center w_55">
                <div class="progress">
                  <div class="progress-bar bg-green" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 20%;">
                    <span class="sr-only">60% Complete</span>
                  </div>
                </div>
              </div>
              <div class="w_right w_20">
                <span>50k</span>
              </div>
              <div class="clearfix"></div>
            </div>
            <div class="widget_summary">
              <div class="w_left w_25">
                <span>Magali Bellman</span>
              </div>
              <div class="w_center w_55">
                <div class="progress">
                  <div class="progress-bar bg-green" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 15%;">
                    <span class="sr-only">60% Complete</span>
                  </div>
                </div>
              </div>
              <div class="w_right w_20">
                <span>45k</span>
              </div>
              <div class="clearfix"></div>
            </div>

          </div>
        </div>
      </div>
      <!-- END FIRST COMPONENT -->

      <!-- START SECOND COMPONENT -->
      <div class="col-md-4 col-sm-4 col-xs-12">
        <div class="x_panel tile fixed_height_320 overflow_hidden">
          <div class="x_title">
            <h2>Revenue per Business Unit</h2>
            <ul class="nav navbar-right panel_toolbox">
              <li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a>
              </li>
              <li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i class="fa fa-wrench"></i></a>
                <ul class="dropdown-menu" role="menu">
                  <li><a href="#">Settings 1</a>
                  </li>
                  <li><a href="#">Settings 2</a>
                  </li>
                </ul>
              </li>
              <li><a class="close-link"><i class="fa fa-close"></i></a>
              </li>
            </ul>
            <div class="clearfix"></div>
          </div>
          <div class="x_content">
            <table class="" style="width:100%">
              <tr>
                <th style="width:37%;">
                  <!-- <p>Top 5</p> -->
                </th>
                <th>
                  <div class="col-lg-7 col-md-7 col-sm-7 col-xs-7">
                    <p class="">Business Unit</p>
                  </div>
                  <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5">
                    <p class="">Progress</p>
                  </div>
                </th>
              </tr>
              <tr>
                <td>
                  <canvas class="canvasDoughnut" height="140" width="140" style="margin: 15px 10px 10px 0"></canvas>
                </td>
                <td>
                  <table class="tile_info">
                    <tr>
                      <td>
                        <p><i class="fa fa-square blue"></i>Therapy </p>
                      </td>
                      <td>70%</td>
                    </tr>
                    <tr>
                      <td>
                        <p><i class="fa fa-square green"></i>Choose &amp; Connect</p>
                      </td>
                      <td>30%</td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <!-- END SECOND COMPONENT -->

      <!-- START THIRD COMPONENT -->
      <div class="col-md-4 col-sm-4 col-xs-12">
        <div class="x_panel tile fixed_height_320">
          <div class="x_title">
            <h2>Quick Settings</h2>
            <ul class="nav navbar-right panel_toolbox">
              <li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a>
              </li>
              <li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i class="fa fa-wrench"></i></a>
                <ul class="dropdown-menu" role="menu">
                  <li><a href="#">Settings 1</a>
                  </li>
                  <li><a href="#">Settings 2</a>
                  </li>
                </ul>
              </li>
              <li><a class="close-link"><i class="fa fa-close"></i></a>
              </li>
            </ul>
            <div class="clearfix"></div>
          </div>
          <div class="x_content">
            <div class="dashboard-widget-content">
              <ul class="quick-list">
                <li><i class="fa fa-calendar-o"></i><a href="#">Settings</a>
                </li>
                <li><i class="fa fa-bars"></i><a href="#">Accounts</a>
                </li>
                <li><i class="fa fa-bar-chart"></i><a href="#">Plans</a> </li>
                <li><i class="fa fa-line-chart"></i><a href="#">Repots</a>
                </li>
                <li><i class="fa fa-bar-chart"></i><a href="#">Targets</a> </li>
                <li><i class="fa fa-line-chart"></i><a href="#">Achievements</a>
                </li>
                <li><i class="fa fa-area-chart"></i><a href="#">Logout</a>
                </li>
              </ul>

              <div class="sidebar-widget">
                  <h4>Profile Completion</h4>
                  <canvas width="150" height="80" id="chart_gauge_01" class="" style="width: 160px; height: 100px;"></canvas>
                  <div class="goal-wrapper">
                    <span id="gauge-text" class="gauge-value pull-left">0</span>
                    <span class="gauge-value pull-left">%</span>
                    <span id="goal-text" class="goal-value pull-right">100%</span>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- END THIRD COMPONENT -->
    </div>
    <!-- END SECOND ROW -->

    <!-- START THIRD ROW -->
    <div class="row">

      <!-- START RECENT ACTIVITIES -->
      <div class="col-md-4 col-sm-4 col-xs-12">
        <div class="x_panel">
          <div class="x_title">
            <h2>Recent Activities <small>Sessions</small></h2>
            <ul class="nav navbar-right panel_toolbox">
              <li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a>
              </li>
              <li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i class="fa fa-wrench"></i></a>
                <ul class="dropdown-menu" role="menu">
                  <li><a href="#">Settings 1</a>
                  </li>
                  <li><a href="#">Settings 2</a>
                  </li>
                </ul>
              </li>
              <li><a class="close-link"><i class="fa fa-close"></i></a>
              </li>
            </ul>
            <div class="clearfix"></div>
          </div>
          <div class="x_content">
            <div class="dashboard-widget-content">

              <ul class="list-unstyled timeline widget">
                <li>
                  <div class="block">
                    <div class="block_content">
                      <h2 class="title">
                                        <a>Who Needs Sundance When You’ve Got&nbsp;Crowdfunding?</a>
                                    </h2>
                      <div class="byline">
                        <span>13 hours ago</span> by <a>Jane Smith</a>
                      </div>
                      <p class="excerpt">Film festivals used to be do-or-die moments for movie makers. They were where you met the producers that could fund your project, and if the buyers liked your flick, they’d pay to Fast-forward and… <a>Read&nbsp;More</a>
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="block">
                    <div class="block_content">
                      <h2 class="title">
                                        <a>Who Needs Sundance When You’ve Got&nbsp;Crowdfunding?</a>
                                    </h2>
                      <div class="byline">
                        <span>13 hours ago</span> by <a>Jane Smith</a>
                      </div>
                      <p class="excerpt">Film festivals used to be do-or-die moments for movie makers. They were where you met the producers that could fund your project, and if the buyers liked your flick, they’d pay to Fast-forward and… <a>Read&nbsp;More</a>
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="block">
                    <div class="block_content">
                      <h2 class="title">
                                        <a>Who Needs Sundance When You’ve Got&nbsp;Crowdfunding?</a>
                                    </h2>
                      <div class="byline">
                        <span>13 hours ago</span> by <a>Jane Smith</a>
                      </div>
                      <p class="excerpt">Film festivals used to be do-or-die moments for movie makers. They were where you met the producers that could fund your project, and if the buyers liked your flick, they’d pay to Fast-forward and… <a>Read&nbsp;More</a>
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="block">
                    <div class="block_content">
                      <h2 class="title">
                                        <a>Who Needs Sundance When You’ve Got&nbsp;Crowdfunding?</a>
                                    </h2>
                      <div class="byline">
                        <span>13 hours ago</span> by <a>Jane Smith</a>
                      </div>
                      <p class="excerpt">Film festivals used to be do-or-die moments for movie makers. They were where you met the producers that could fund your project, and if the buyers liked your flick, they’d pay to Fast-forward and… <a>Read&nbsp;More</a>
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!-- END RECENT ACTIVITIES -->

      
      <div class="col-md-8 col-sm-8 col-xs-12">

        <!-- START VISITOR LOCATIONS -->
        <div class="row">
          <div class="col-md-12 col-sm-12 col-xs-12">
            <div class="x_panel">
              <div class="x_title">
                <h2>Visitors location <small>geo-presentation</small></h2>
                <ul class="nav navbar-right panel_toolbox">
                  <li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a>
                  </li>
                  <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i class="fa fa-wrench"></i></a>
                    <ul class="dropdown-menu" role="menu">
                      <li><a href="#">Settings 1</a>
                      </li>
                      <li><a href="#">Settings 2</a>
                      </li>
                    </ul>
                  </li>
                  <li><a class="close-link"><i class="fa fa-close"></i></a>
                  </li>
                </ul>
                <div class="clearfix"></div>
              </div>
              <div class="x_content">
                <div class="dashboard-widget-content">
                  <div class="col-md-4 hidden-small">
                    <h2 class="line_30">125.7k Views from 60 countries</h2>

                    <table class="countries_list">
                      <tbody>
                        <tr>
                          <td>United States</td>
                          <td class="fs15 fw700 text-right">33%</td>
                        </tr>
                        <tr>
                          <td>France</td>
                          <td class="fs15 fw700 text-right">27%</td>
                        </tr>
                        <tr>
                          <td>Germany</td>
                          <td class="fs15 fw700 text-right">16%</td>
                        </tr>
                        <tr>
                          <td>Spain</td>
                          <td class="fs15 fw700 text-right">11%</td>
                        </tr>
                        <tr>
                          <td>Britain</td>
                          <td class="fs15 fw700 text-right">10%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div id="world-map-gdp" class="col-md-8 col-sm-12 col-xs-12" style="height:230px;"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- END VISITOR LOCATIONS -->


        <div class="row">

          <!-- START TODO LIST -->
          <div class="col-md-6 col-sm-6 col-xs-12">
            <div class="x_panel">
              <div class="x_title">
                <h2>To Do List <small>Sample tasks</small></h2>
                <ul class="nav navbar-right panel_toolbox">
                  <li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a>
                  </li>
                  <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i class="fa fa-wrench"></i></a>
                    <ul class="dropdown-menu" role="menu">
                      <li><a href="#">Settings 1</a>
                      </li>
                      <li><a href="#">Settings 2</a>
                      </li>
                    </ul>
                  </li>
                  <li><a class="close-link"><i class="fa fa-close"></i></a>
                  </li>
                </ul>
                <div class="clearfix"></div>
              </div>
              <div class="x_content">

                <div class="">
                  <ul class="to_do">
                    <li>
                      <p>
                        <input type="checkbox" class="flat"> Schedule meeting with new client </p>
                    </li>
                    <li>
                      <p>
                        <input type="checkbox" class="flat"> Create email address for new intern</p>
                    </li>
                    <li>
                      <p>
                        <input type="checkbox" class="flat"> Have IT fix the network printer</p>
                    </li>
                    <li>
                      <p>
                        <input type="checkbox" class="flat"> Copy backups to offsite location</p>
                    </li>
                    <li>
                      <p>
                        <input type="checkbox" class="flat"> Food truck fixie locavors mcsweeney</p>
                    </li>
                    <li>
                      <p>
                        <input type="checkbox" class="flat"> Food truck fixie locavors mcsweeney</p>
                    </li>
                    <li>
                      <p>
                        <input type="checkbox" class="flat"> Create email address for new intern</p>
                    </li>
                    <li>
                      <p>
                        <input type="checkbox" class="flat"> Have IT fix the network printer</p>
                    </li>
                    <li>
                      <p>
                        <input type="checkbox" class="flat"> Copy backups to offsite location</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <!-- END TODO LIST -->
          
          <!-- START WEATHER WIDGET -->
          <div class="col-md-6 col-sm-6 col-xs-12">
            <div class="x_panel">
              <div class="x_title">
                <h2>Daily active users <small>Sessions</small></h2>
                <ul class="nav navbar-right panel_toolbox">
                  <li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a>
                  </li>
                  <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i class="fa fa-wrench"></i></a>
                    <ul class="dropdown-menu" role="menu">
                      <li><a href="#">Settings 1</a>
                      </li>
                      <li><a href="#">Settings 2</a>
                      </li>
                    </ul>
                  </li>
                  <li><a class="close-link"><i class="fa fa-close"></i></a>
                  </li>
                </ul>
                <div class="clearfix"></div>
              </div>
              <div class="x_content">
                <div class="row">
                  <div class="col-sm-12">
                    <div class="temperature"><b>Monday</b>, 07:30 AM
                      <span>F</span>
                      <span><b>C</b></span>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-4">
                    <div class="weather-icon">
                      <canvas height="84" width="84" id="partly-cloudy-day"></canvas>
                    </div>
                  </div>
                  <div class="col-sm-8">
                    <div class="weather-text">
                      <h2>Texas <br><i>Partly Cloudy Day</i></h2>
                    </div>
                  </div>
                </div>
                <div class="col-sm-12">
                  <div class="weather-text pull-right">
                    <h3 class="degrees">23</h3>
                  </div>
                </div>

                <div class="clearfix"></div>

                <div class="row weather-days">
                  <div class="col-sm-2">
                    <div class="daily-weather">
                      <h2 class="day">Mon</h2>
                      <h3 class="degrees">25</h3>
                      <canvas id="clear-day" width="32" height="32"></canvas>
                      <h5>15 <i>km/h</i></h5>
                    </div>
                  </div>
                  <div class="col-sm-2">
                    <div class="daily-weather">
                      <h2 class="day">Tue</h2>
                      <h3 class="degrees">25</h3>
                      <canvas height="32" width="32" id="rain"></canvas>
                      <h5>12 <i>km/h</i></h5>
                    </div>
                  </div>
                  <div class="col-sm-2">
                    <div class="daily-weather">
                      <h2 class="day">Wed</h2>
                      <h3 class="degrees">27</h3>
                      <canvas height="32" width="32" id="snow"></canvas>
                      <h5>14 <i>km/h</i></h5>
                    </div>
                  </div>
                  <div class="col-sm-2">
                    <div class="daily-weather">
                      <h2 class="day">Thu</h2>
                      <h3 class="degrees">28</h3>
                      <canvas height="32" width="32" id="sleet"></canvas>
                      <h5>15 <i>km/h</i></h5>
                    </div>
                  </div>
                  <div class="col-sm-2">
                    <div class="daily-weather">
                      <h2 class="day">Fri</h2>
                      <h3 class="degrees">28</h3>
                      <canvas height="32" width="32" id="wind"></canvas>
                      <h5>11 <i>km/h</i></h5>
                    </div>
                  </div>
                  <div class="col-sm-2">
                    <div class="daily-weather">
                      <h2 class="day">Sat</h2>
                      <h3 class="degrees">26</h3>
                      <canvas height="32" width="32" id="cloudy"></canvas>
                      <h5>10 <i>km/h</i></h5>
                    </div>
                  </div>
                  <div class="clearfix"></div>
                </div>
              </div>
            </div>
          </div>
          <!-- START WEATHER WIDGET -->

        </div>
      </div>
    </div>
    <!-- END THIRD ROW -->

  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    data () {
      return {
        statistic : {
          jobCount : ''
        }
      }
    },

    methods : {
      
    },

    mounted(){
      console.log('mount: home component');
      axios.get(`/getJobCount`)
      .then(response => {
        this.statistic.jobCount = response.data.count;
      })
      .catch(e => {
        console.log(e);
      })
    }
  }
</script>

<style scoped>
</style>
