<template>
  <div id="existingAccount">

    <div class="page-title">
      <div class="title_left">
        <h3><span class="glyphicon glyphicon-user" aria-hidden="true"></span><router-link to="/Contacts"> Contacts</router-link> > Roy Bout</h3>
      </div>

      <div class="title_right">
        <div class="pull-right">
          <div class="input-group">
            <div class="btn-group">
              <router-link to="/NewContact"><button type="button" class="btn btn-default">New</button></router-link>
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
                <label class="control-label col-md-3 col-sm-3 col-xs-12">First Name</label>
                <div class="col-md-9 col-sm-9 col-xs-12">
                  <input type="text" class="form-control" value="Roy">
                </div>
              </div>
              <div class="col-md-6 form-group">
                <label class="control-label col-md-3 col-sm-3 col-xs-12">NDIS Nr.</label>
                <div class="col-md-9 col-sm-9 col-xs-12">
                  <input type="text" class="form-control" value="7382733">
                </div>
              </div>
              <div class="col-md-6 form-group">
                <label class="control-label col-md-3 col-sm-3 col-xs-12">Middle Name</label>
                <div class="col-md-9 col-sm-9 col-xs-12">
                  <input type="text" class="form-control" value="">
                </div>
              </div>
              <div class="col-md-6 form-group">
                <label class="control-label col-md-3 col-sm-3 col-xs-12">LGA Loading</label>
                <div class="col-md-9 col-sm-9 col-xs-12">
                  <input type="text" class="form-control" value="Remote Pricing">
                </div>
              </div>
              <div class="col-md-6 form-group">
                <label class="control-label col-md-3 col-sm-3 col-xs-12">Last Name</label>
                <div class="col-md-9 col-sm-9 col-xs-12">
                  <input type="text" class="form-control" value="Bout">
                </div>
              </div>
              <div class="col-md-6 form-group">
                <label class="control-label col-md-3 col-sm-3 col-xs-12">Primary Carer</label>
                <div class="col-md-9 col-sm-9 col-xs-12">
                  <input type="text" class="form-control" value="Bianca Boer">
                </div>
              </div>

              <span class="clearfix"></span>

              <br />
              <div class="x_title">
                <h2>Contact Information</h2> 
                <div class="clearfix"></div>
              </div>
              <br />
              <!-- <div class="ln_solid"></div> -->

              <div class="col-md-6 form-group">
                <label class="control-label col-md-3 col-sm-3 col-xs-12">Mobile</label>
                <div class="col-md-9 col-sm-9 col-xs-12">
                  <input type="text" class="form-control" value="0467363721">
                </div>
              </div>
              <div class="col-md-6 form-group">
                <label class="control-label col-md-3 col-sm-3 col-xs-12">Phone</label>
                <div class="col-md-9 col-sm-9 col-xs-12">
                  <input type="text" class="form-control" value="">
                </div>
              </div>
              <div class="col-md-6 form-group">
                <label class="control-label col-md-3 col-sm-3 col-xs-12">Email</label>
                <div class="col-md-9 col-sm-9 col-xs-12">
                  <input type="text" class="form-control" value="ro_ba@hotmail.com">
                </div>
              </div>

              <span class="clearfix"></span>

              <br />
              <div class="x_title">
                <h2>Address Information</h2> 
                <div class="clearfix"></div>
              </div>
              <br />
              <!-- <div class="ln_solid"></div> -->

              <div class="col-md-6 form-group">
                <label class="control-label col-md-3 col-sm-3 col-xs-12">Street Name</label>
                <div class="col-md-9 col-sm-9 col-xs-12">
                  <input type="text" class="form-control" value="George Street">
                </div>
              </div>
              <div class="col-md-6 form-group">
                <label class="control-label col-md-3 col-sm-3 col-xs-12">Postal Code</label>
                <div class="col-md-9 col-sm-9 col-xs-12">
                  <input type="text" class="form-control" value="2098">
                </div>
              </div>
              <div class="col-md-6 form-group">
                <label class="control-label col-md-3 col-sm-3 col-xs-12">Number</label>
                <div class="col-md-9 col-sm-9 col-xs-12">
                  <input type="text" class="form-control" value="154">
                </div>
              </div>
              <div class="col-md-6 form-group">
                <label class="control-label col-md-3 col-sm-3 col-xs-12">Country</label>
                <div class="col-md-9 col-sm-9 col-xs-12">
                  <input type="text" class="form-control" value="Australia">
                </div>
              </div>
              <div class="col-md-6 form-group">
                <label class="control-label col-md-3 col-sm-3 col-xs-12">City</label>
                <div class="col-md-9 col-sm-9 col-xs-12">
                  <input type="text" class="form-control" value="Sydney">
                </div>
              </div>
              <div class="col-md-6 form-group">
                <label class="control-label col-md-3 col-sm-3 col-xs-12">State</label>
                <div class="col-md-9 col-sm-9 col-xs-12">
                  <input type="text" class="form-control" value="NSW">
                </div>
              </div>
              <br></br><br></br><br></br><br></br>
              <div class="col-xs-12" align="center">
                <div class="span8">
                  <iframe width="80%" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.co.uk/maps?f=q&source=s_q&hl=en&geocode=&q=15+Springfield+Way,+Hythe,+CT21+5SH&aq=t&sll=52.8382,-2.327815&sspn=8.047465,13.666992&ie=UTF8&hq=&hnear=15+Springfield+Way,+Hythe+CT21+5SH,+United+Kingdom&t=m&z=14&ll=51.077429,1.121722&output=embed"></iframe>
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
                    <button type="button" class="btn btn-primary">Save Account</button>
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
                  <h4 class="panel-title"><span class="glyphicon glyphicon-th" aria-hidden="true"></span> Relationships (3)</h4>
                </a>
                <div id="collapseOne1" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                  <div class="panel-body">
                    <table class="table table-striped">
                      <thead>
                        <tr>
                          <th>Number</th>
                          <th>First Name</th>
                          <th>Last Name</th>
                          <th>Relationship</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row"><router-link to="/ExistingRelationship">002231</router-link></th>
                          <td>Mark</td>
                          <td>Otto</td>
                          <td>Brother</td>
                        </tr>
                        <tr>
                          <th scope="row"><router-link to="/ExistingRelationship">002232</router-link></th>
                          <td>Jacob</td>
                          <td>Thornton</td>
                          <td>Sister</td>
                        </tr>
                        <tr>
                          <th scope="row"><router-link to="/ExistingRelationship">002233</router-link></th>
                          <td>Larry</td>
                          <td>the Bird</td>
                          <td>Father</td>
                        </tr>
                      </tbody>
                    </table>
                    <router-link to="/NewRelationship"><button type="submit" class="btn btn-default">New Relationship</button></router-link>
                  </div>
                </div>
              </div>
              <div class="panel">
                <a class="panel-heading collapsed" role="tab" id="headingThree1" data-toggle="collapse" data-parent="#accordion1" href="#collapseThree1" aria-expanded="false" aria-controls="collapseThree">
                  <h4 class="panel-title"><span class="glyphicon glyphicon-file" aria-hidden="true"></span> Attachments (2)</h4>
                </a>
                <div id="collapseThree1" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                  <div class="panel-body">
                    <table class="table table-striped">
                      <thead>
                        <tr>
                          <th>File Name</th>
                          <th>Size</th>
                          <th>Upload Date</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Identity Proof.pdf</td>
                          <td>1.1MB</td>
                          <td>10-02-2017</td>
                        </tr>
                        <tr>
                          <td>AVO.docx</td>
                          <td>237kb</td>
                          <td>17-08-2017</td>
                        </tr>
                      </tbody>
                    </table>
                    <router-link to="/ExistingFundCategory"><button type="submit" class="btn btn-default">New Attachment</button></router-link>
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
