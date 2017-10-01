<template>
  <div id="existingPlan">

    <div class="page-title">
      <div class="title_left">
        <h3><span class="glyphicon glyphicon-user" aria-hidden="true"></span><router-link to="/Plans"> Plans</router-link> > Roy Bout</h3>
      </div>
      <div class="title_right">
        <div class="pull-right">
          <div class="input-group">
            <div class="btn-group">
              <router-link to="/NewPlan"><button type="button" class="btn btn-default">New</button></router-link>
              <button type="button" class="btn btn-default">Clone</button>
              <button type="button" class="btn btn-default">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br/>
    <br />

    <div class="row">
      <div class="col-md-7 col-xs-12">
        <div class="x_panel">

          <div class="x_title">
            <h2>Basic Details</h2> 
            <div class="clearfix"></div>
          </div>

          <div class="x_content">
            <br />
            <form class="form-horizontal form-label-left">
              <div class="col-md-6 form-group">
                <label class="control-label col-md-3 col-sm-3 col-xs-12">Plan Number</label>
                <div class="col-md-9 col-sm-9 col-xs-12">
                  <input type="text" class="form-control" value="0062762">
                </div>
              </div>
              <div class="col-md-6 form-group">
                <label class="control-label col-md-3 col-sm-3 col-xs-12">Status</label>
                <div class="col-md-9 col-sm-9 col-xs-12">
                  <input type="text" class="form-control" value="Active">
                </div>
              </div>
              <div class="col-md-6 form-group">
                <label class="control-label col-md-3 col-sm-3 col-xs-12">Client</label>
                <div class="col-md-9 col-sm-9 col-xs-12">
                  <input type="text" class="form-control" value="Roy Bout">
                </div>
              </div>
              <div class="col-md-6 form-group">
                <label class="control-label col-md-3 col-sm-3 col-xs-12">Start Date</label>
                <div class="col-md-9 col-sm-9 col-xs-12">
                  <input type="text" class="form-control" value="02-08-2017">
                </div>
              </div>
              <div class="col-md-6 form-group">
                <label class="control-label col-md-3 col-sm-3 col-xs-12">NDIS Nr.</label>
                <div class="col-md-9 col-sm-9 col-xs-12">
                  <input type="text" class="form-control" value="283732">
                </div>
              </div>
              <div class="col-md-6 form-group">
                <label class="control-label col-md-3 col-sm-3 col-xs-12">End Date</label>
                <div class="col-md-9 col-sm-9 col-xs-12">
                  <input type="text" class="form-control" value="02-08-2018">
                </div>
              </div>
              <div class="col-md-6 form-group">
                <label class="control-label col-md-3 col-sm-3 col-xs-12">Carer</label>
                <div class="col-md-9 col-sm-9 col-xs-12">
                  <input type="text" class="form-control" value="Bep Boer">
                </div>
              </div>
              <div class="col-md-6 form-group">
                <label class="control-label col-md-3 col-sm-3 col-xs-12">SA Sent</label>
                <div class="col-md-9 col-sm-9 col-xs-12">
                  <div class="checkbox">
                    <label>
                      <input type="checkbox" class="flat">
                    </label>
                    </div>
                </div>
              </div>

              <span class="clearfix"></span>

              <br />
              <div class="x_title">
                <h2>Financial Information</h2> 
                <div class="clearfix"></div>
              </div>
              <br />
              <!-- <div class="ln_solid"></div> -->

              <div class="col-md-6 form-group">
                <label class="control-label col-md-3 col-sm-3 col-xs-12">Total Budget</label>
                <div class="col-md-9 col-sm-9 col-xs-12">
                  <input type="text" class="form-control" value="$110,000" readonly="readonly">
                </div>
              </div>
              <div class="col-md-6 form-group">
                <label class="control-label col-md-3 col-sm-3 col-xs-12">Available</label>
                <div class="col-md-9 col-sm-9 col-xs-12">
                  <input type="text" class="form-control" value="$90,000" readonly="readonly">
                </div>
              </div>
              <div class="col-md-6 form-group">
                <label class="control-label col-md-3 col-sm-3 col-xs-12">Committed</label>
                <div class="col-md-9 col-sm-9 col-xs-12">
                  <input type="text" class="form-control" value="$5,000" readonly="readonly">
                </div>
              </div>
              <div class="col-md-6 form-group">
                <label class="control-label col-md-3 col-sm-3 col-xs-12">Consumed</label>
                <div class="col-md-9 col-sm-9 col-xs-12">
                  <input type="text" class="form-control" value="$5,000" readonly="readonly">
                </div>
              </div>
              <div class="col-md-6 form-group">
                <label class="control-label col-md-3 col-sm-3 col-xs-12">Invoiced</label>
                <div class="col-md-9 col-sm-9 col-xs-12">
                  <input type="text" class="form-control" value="$5,000" readonly="readonly">
                </div>
              </div>
              <div class="col-md-6 form-group">
                <label class="control-label col-md-3 col-sm-3 col-xs-12">Claimed</label>
                <div class="col-md-9 col-sm-9 col-xs-12">
                  <input type="text" class="form-control" value="$5,000" readonly="readonly">
                </div>
              </div>

              <span class="clearfix"></span>

              <br />
              <div class="x_title">
                <h2>Travel Cost</h2> 
                <div class="clearfix"></div>
              </div>
              <br />
              <!-- <div class="ln_solid"></div> -->

              <div class="col-md-6 form-group">
                <label class="control-label col-md-3 col-sm-3 col-xs-12">Budget</label>
                <div class="col-md-9 col-sm-9 col-xs-12">
                  <input type="text" class="form-control" value="$625" readonly="readonly">
                </div>
              </div>
              <div class="col-md-6 form-group">
                <label class="control-label col-md-3 col-sm-3 col-xs-12">Remaining</label>
                <div class="col-md-9 col-sm-9 col-xs-12">
                  <input type="text" class="form-control" value="$125" readonly="readonly">
                </div>
              </div>
              <div class="col-md-6 form-group">
                <label class="control-label col-md-3 col-sm-3 col-xs-12">Consumed</label>
                <div class="col-md-9 col-sm-9 col-xs-12">
                  <input type="text" class="form-control" value="$500" readonly="readonly">
                </div>
              </div>
              <div class="col-md-6 form-group">
                <label class="control-label col-md-3 col-sm-3 col-xs-12">Total Distribution</label>
                <div class="col-md-9 col-sm-9 col-xs-12">
                  <input type="text" class="form-control" value="2" readonly="readonly">
                </div>
              </div>
              <div class="col-md-6 form-group">
                <label class="control-label col-md-3 col-sm-3 col-xs-12">Remaining Distribution</label>
                <div class="col-md-9 col-sm-9 col-xs-12">
                  <input type="text" class="form-control" value="1" readonly="readonly">
                </div>
              </div>
              <div class="col-md-6 form-group">
                <label class="control-label col-md-3 col-sm-3 col-xs-12">Travel Claim per Job</label>
                <div class="col-md-9 col-sm-9 col-xs-12">
                  <input type="text" class="form-control" value="$44.75" readonly="readonly">
                </div>
              </div>

              <span class="clearfix"></span>

              <br />
              <div class="x_title">
                <h2>Closing and Cancelling</h2> 
                <div class="clearfix"></div>
              </div>
              <br />

              <div class="col-md-6 form-group">
                <label class="control-label col-md-3 col-sm-3 col-xs-12">Closed</label>
                  <div class="checkbox">
                    <label>
                      <input type="checkbox" class="flat">
                    </label>
                  </div>
              </div>
              <div class="col-md-6 form-group">
                <label class="control-label col-md-3 col-sm-3 col-xs-12">Cancellation Reason</label>
                <div class="col-md-9 col-sm-9 col-xs-12">
                  <input type="text" class="form-control" value="">
                </div>
              </div>
              <span class="clearfix"></span>

              <br />
              <div class="x_title">
                <h2>Other Information</h2> 
                <div class="clearfix"></div>
              </div>
              <br />
              <!-- <div class="ln_solid"></div> -->

                <div class="x_content">
                  <div id="alerts"></div>
                  <div class="btn-toolbar editor" data-role="editor-toolbar" data-target="#editor-one">
                    <div class="btn-group">
                      <a class="btn dropdown-toggle" data-toggle="dropdown" title="Font"><i class="fa fa-font"></i><b class="caret"></b></a>
                      <ul class="dropdown-menu">
                      </ul>
                    </div>

                    <div class="btn-group">
                      <a class="btn dropdown-toggle" data-toggle="dropdown" title="Font Size"><i class="fa fa-text-height"></i>&nbsp;<b class="caret"></b></a>
                      <ul class="dropdown-menu">
                        <li>
                          <a data-edit="fontSize 5">
                            <p style="font-size:17px">Huge</p>
                          </a>
                        </li>
                        <li>
                          <a data-edit="fontSize 3">
                            <p style="font-size:14px">Normal</p>
                          </a>
                        </li>
                        <li>
                          <a data-edit="fontSize 1">
                            <p style="font-size:11px">Small</p>
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div class="btn-group">
                      <a class="btn" data-edit="bold" title="Bold (Ctrl/Cmd+B)"><i class="fa fa-bold"></i></a>
                      <a class="btn" data-edit="italic" title="Italic (Ctrl/Cmd+I)"><i class="fa fa-italic"></i></a>
                      <a class="btn" data-edit="strikethrough" title="Strikethrough"><i class="fa fa-strikethrough"></i></a>
                      <a class="btn" data-edit="underline" title="Underline (Ctrl/Cmd+U)"><i class="fa fa-underline"></i></a>
                    </div>

                    <div class="btn-group">
                      <a class="btn" data-edit="insertunorderedlist" title="Bullet list"><i class="fa fa-list-ul"></i></a>
                      <a class="btn" data-edit="insertorderedlist" title="Number list"><i class="fa fa-list-ol"></i></a>
                      <a class="btn" data-edit="outdent" title="Reduce indent (Shift+Tab)"><i class="fa fa-dedent"></i></a>
                      <a class="btn" data-edit="indent" title="Indent (Tab)"><i class="fa fa-indent"></i></a>
                    </div>

                    <div class="btn-group">
                      <a class="btn" data-edit="justifyleft" title="Align Left (Ctrl/Cmd+L)"><i class="fa fa-align-left"></i></a>
                      <a class="btn" data-edit="justifycenter" title="Center (Ctrl/Cmd+E)"><i class="fa fa-align-center"></i></a>
                      <a class="btn" data-edit="justifyright" title="Align Right (Ctrl/Cmd+R)"><i class="fa fa-align-right"></i></a>
                      <a class="btn" data-edit="justifyfull" title="Justify (Ctrl/Cmd+J)"><i class="fa fa-align-justify"></i></a>
                    </div>

                    <div class="btn-group">
                      <a class="btn dropdown-toggle" data-toggle="dropdown" title="Hyperlink"><i class="fa fa-link"></i></a>
                      <div class="dropdown-menu input-append">
                        <input class="span2" placeholder="URL" type="text" data-edit="createLink" />
                        <button class="btn" type="button">Add</button>
                      </div>
                      <a class="btn" data-edit="unlink" title="Remove Hyperlink"><i class="fa fa-cut"></i></a>
                    </div>

                    <div class="btn-group">
                      <a class="btn" title="Insert picture (or just drag & drop)" id="pictureBtn"><i class="fa fa-picture-o"></i></a>
                      <input type="file" data-role="magic-overlay" data-target="#pictureBtn" data-edit="insertImage" />
                    </div>

                    <div class="btn-group">
                      <a class="btn" data-edit="undo" title="Undo (Ctrl/Cmd+Z)"><i class="fa fa-undo"></i></a>
                      <a class="btn" data-edit="redo" title="Redo (Ctrl/Cmd+Y)"><i class="fa fa-repeat"></i></a>
                    </div>
                  </div>

                  <div id="editor-one" class="editor-wrapper"></div>

                  <textarea name="descr" id="descr" style="display:none;"></textarea>
                  
                  <br />
                </div>
                <div class="form-group">
                  <!-- <div class="col-xs-12 col-md-offset-3"> -->
                    <button type="button" class="btn btn-primary">Save Plan</button>
                  <!-- </div> -->
                </div>

            </form>
          </div>
        </div>
      </div>
      <div class="col-md-5 col-xs-12">
        <div class="x_panel">
          <div class="x_title">
            <h2><i class="fa fa-align-left"></i> Related Information</h2>
          <div class="clearfix"></div>
          </div>
          <div class="x_content">

            <!-- start accordion -->
            <div class="accordion" id="accordion1" role="tablist" aria-multiselectable="true">
              <div class="panel">
                <a class="panel-heading" role="tab" id="headingOne1" data-toggle="collapse" data-parent="#accordion1" href="#collapseOne1" aria-expanded="true" aria-controls="collapseOne">
                  <h4 class="panel-title"><span class="glyphicon glyphicon-filter" aria-hidden="true"></span> Fund Categories (3)</h4> 
                </a>
                <div id="collapseOne1" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                  <div class="panel-body">
                    <table class="table table-striped">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Fund Source</th>
                          <th>NDIS Category</th>
                          <th>Total Budget</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row"><router-link to="/ExistingFundCategory">0037287</router-link></th>
                          <td>NDIS Managed</td>
                          <td>Assistive Technology</td>
                          <td>$150,000</td>
                        </tr>
                        <tr>
                          <th scope="row"><router-link to="/ExistingFundCategory">0037288</router-link></th>
                          <td>Thrid Party Managed</td>
                          <td>Improved Learning</td>
                          <td>$10,000</td>
                        </tr>
                        <tr>
                          <th scope="row"><router-link to="/ExistingFundCategory">0037289</router-link></th> 
                          <td>Thrid Party Managed</td>
                          <td>Improved Daily Living Skills</td>
                          <td>$5,000</td>
                        </tr>
                      </tbody>
                    </table>
                    <router-link to="/NewFundCategory"><button type="submit" class="btn btn-default">New Fund Category</button></router-link>
                  </div>
                </div>
              </div>
              <div class="panel">
                <a class="panel-heading collapsed" role="tab" id="headingTwo1" data-toggle="collapse" data-parent="#accordion1" href="#collapseTwo1" aria-expanded="false" aria-controls="collapseTwo">
                  <h4 class="panel-title"><span class="glyphicon glyphicon-education" aria-hidden="true"></span> Goals (3)</h4>
                </a>
                <div id="collapseTwo1" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                  <div class="panel-body">
                    <table class="table table-striped">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Source</th>
                          <th>Type</th>
                          <th>Priority</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">0018219</th>
                          <td>Aspect</td>
                          <td>1st Goal</td>
                          <td>Medium</td>
                        </tr>
                        <tr>
                          <th scope="row">0018220</th>
                          <td>Aspect</td>
                          <td>2nd Goal</td>
                          <td>Medium</td>
                        </tr>
                        <tr>
                          <th scope="row">0018221</th>
                          <td>NDIS</td>
                          <td>Long Term</td>
                          <td>High</td>
                        </tr>
                        <tr>
                          <th scope="row">0018219</th>
                          <td>Aspect</td>
                          <td>1st Goal</td>
                          <td>Medium</td>
                        </tr>
                        <tr>
                          <th scope="row">0018219</th>
                          <td>Aspect</td>
                          <td>1st Goal</td>
                          <td>Medium</td>
                        </tr>
                        <tr>
                          <th scope="row">0018220</th>
                          <td>Aspect</td>
                          <td>2nd Goal</td>
                          <td>Medium</td>
                        </tr>
                        <tr>
                          <th scope="row">0018221</th>
                          <td>NDIS</td>
                          <td>Long Term</td>
                          <td>High</td>
                        </tr>
                        <tr>
                          <th scope="row">0018219</th>
                          <td>Aspect</td>
                          <td>1st Goal</td>
                          <td>Medium</td>
                        </tr>
                        <tr>
                          <th scope="row">0018220</th>
                          <td>Aspect</td>
                          <td>2nd Goal</td>
                          <td>Medium</td>
                        </tr>
                        <tr>
                          <th scope="row">0018221</th>
                          <td>NDIS</td>
                          <td>Long Term</td>
                          <td>High</td>
                        </tr>
                      </tbody>
                    </table>
                    <router-link to="/ExistingFundCategory"><button type="submit" class="btn btn-default">New Goal</button></router-link>
                  </div>
                </div>
              </div>
              <div class="panel">
                <a class="panel-heading collapsed" role="tab" id="headingThree1" data-toggle="collapse" data-parent="#accordion1" href="#collapseThree1" aria-expanded="false" aria-controls="collapseThree">
                  <h4 class="panel-title"><span class="glyphicon glyphicon-file" aria-hidden="true"></span> Attachments (0)</h4>
                </a>
                <div id="collapseThree1" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                  <div class="panel-body">
                    <p><strong>Collapsible Item 3 data</strong>
                    </p>
                    <router-link to="/ExistingFundCategory"><button type="submit" class="btn btn-default">Add New Attachment</button></router-link>                  </div>
                </div>
              </div>
              <div class="panel">
                <a class="panel-heading collapsed" role="tab" id="headingFour1" data-toggle="collapse" data-parent="#accordion1" href="#collapseFour1" aria-expanded="false" aria-controls="collapseFour">
                  <h4 class="panel-title"><span class="glyphicon glyphicon-pencil" aria-hidden="true"></span> Notes (0)</h4>
                </a>
                <div id="collapseFour1" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFour">
                  <div class="panel-body">
                    <p><strong>Collapsible Item 4 data</strong>
                    </p>
                    <router-link to="/ExistingFundCategory"><button type="submit" class="btn btn-default">Add New Note</button></router-link> 
                  </div>
                </div>
              </div>
            </div>
            <!-- end of accordion -->
          </div>
        </div>
      </div>
    </div>

  </div>

  </div>
</template>

<script>
  export default {
    name: 'hello',
    data () {
      return {
        
      }
    }
  }
</script>

<style scoped>
</style>
